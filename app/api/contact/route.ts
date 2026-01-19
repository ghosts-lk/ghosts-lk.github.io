import { NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
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
    // Check request method
    if (request.method !== "POST") {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }

    // Parse request body
    const data = await request.json()

    // Validate form data
    const { valid, errors } = validateFormData(data)
    if (!valid) {
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      )
    }

    const formData = data as ContactFormData

    // TODO: Send email or store in database
    // For now, we'll just log the submission
    console.log("Contact form submission:", {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      timestamp: new Date().toISOString(),
    })

    // Example: You could integrate with email service here
    // await sendEmail({
    //   to: 'ghosts.lk@proton.me',
    //   subject: `New contact form submission from ${formData.name}`,
    //   html: `...`
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

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
