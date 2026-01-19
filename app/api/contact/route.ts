import { NextRequest, NextResponse } from "next/server"
import { sendUserConfirmationEmail, sendAdminNotificationEmail } from "@/lib/email"
import { logSubmission, logError, logWarn } from "@/lib/logger"

interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

// Rate limiting: Store IP + timestamp
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Get client IP address
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0].trim() : request.headers.get("x-real-ip") || "unknown"
  return ip
}

// Check rate limit (5 requests per 1 hour)
function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 3600000): boolean {
  const now = Date.now()
  const existing = rateLimitStore.get(ip)

  if (!existing || now > existing.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (existing.count < maxRequests) {
    existing.count++
    return true
  }

  return false
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate form data
function validateFormData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] }
  }

  const formData = data as Partial<ContactFormData>

  // Validate name
  if (!formData.name || typeof formData.name !== "string") {
    errors.push("Name is required")
  } else if (formData.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters")
  } else if (formData.name.length > 100) {
    errors.push("Name is too long")
  }

  // Validate email
  if (!formData.email || typeof formData.email !== "string") {
    errors.push("Email is required")
  } else if (!isValidEmail(formData.email)) {
    errors.push("Invalid email format")
  }

  // Validate company (optional)
  if (formData.company && typeof formData.company === "string") {
    if (formData.company.length > 100) {
      errors.push("Company name is too long")
    }
  }

  // Validate message
  if (!formData.message || typeof formData.message !== "string") {
    errors.push("Message is required")
  } else if (formData.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters")
  } else if (formData.message.length > 5000) {
    errors.push("Message is too long")
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const clientIp = getClientIp(request)
    if (!checkRateLimit(clientIp)) {
      logWarn(`Rate limit exceeded for IP: ${clientIp}`)
      return NextResponse.json(
        {
          error: "Too many requests",
          message: "You have exceeded the rate limit. Please try again later.",
        },
        { status: 429 }
      )
    }

    // Parse request body
    const data = await request.json()

    // Validate form data
    const { valid, errors } = validateFormData(data)
    if (!valid) {
      logError(new Error(`Validation failed: ${errors.join(", ")}`), "ContactForm")
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      )
    }

    const formData = data as ContactFormData

    // Log submission to file
    logSubmission({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      ip: clientIp,
    })

    // Send user confirmation email
    const userEmailResult = await sendUserConfirmationEmail(formData.email, formData.name)
    if (userEmailResult.success) {
      console.log(`✓ User confirmation email sent to ${formData.email}`)
    } else {
      console.warn(`⚠ Failed to send user confirmation email: ${userEmailResult.error}`)
    }

    // Send admin notification email
    const adminEmailResult = await sendAdminNotificationEmail({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      clientIp,
    })

    if (adminEmailResult.success) {
      console.log(`✓ Admin notification email sent`)
    } else {
      console.warn(`⚠ Failed to send admin notification: ${adminEmailResult.error}`)
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon!",
      },
      { status: 200 }
    )
  } catch (error) {
    logError(error, "ContactForm")

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to process your request. Please try again later.",
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
