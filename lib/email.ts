/**
 * Email utility using Resend for sending emails
 * Requires RESEND_API_KEY environment variable
 * 
 * SECURITY NOTES:
 * - API key is stored in .env.local (not committed to git)
 * - Never log or expose API key
 * - All emails are sent from noreply@ghostprotocol.lk (no-reply address)
 * - Email validation prevents invalid addresses
 */

import { Resend } from 'resend'

let resend: Resend | null = null

/**
 * Get Resend client instance
 */
function getResendClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠ RESEND_API_KEY not configured - email sending disabled')
    return null
  }

  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }

  return resend
}

interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

/**
 * Send email to user confirming submission
 */
export async function sendUserConfirmationEmail(
  email: string,
  name: string
): Promise<{ success: boolean; error?: string }> {
  const client = getResendClient()

  if (!client) {
    return { success: false, error: 'Resend not configured' }
  }

  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0;">Message Received ✓</h1>
        </div>
        
        <div style="padding: 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>Thank you for reaching out to Ghost Protocol. We have received your message and will review it shortly.</p>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p><strong>What happens next?</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll reach out with a response and next steps</li>
              <li>Professional assessment of your needs</li>
            </ul>
          </div>
          
          <p>If you have any urgent matters, feel free to reach out directly.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            <strong>Ghost Protocol</strong><br/>
            Enterprise-Grade Web Solutions<br/>
            <a href="https://ghosts-lk.com" style="color: #667eea; text-decoration: none;">ghosts-lk.com</a>
          </p>
        </div>
      </div>
    `

    const { data, error } = await client.emails.send({
      from: 'noreply@ghostprotocol.lk',
      to: email,
      subject: `We received your message, ${name}!`,
      html,
    })

    if (error) {
      console.error('Resend user email error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    console.error('Failed to send user confirmation email:', err)
    return { success: false, error: errorMessage }
  }
}

/**
 * Send email to admin with submission details
 */
export async function sendAdminNotificationEmail(data: {
  name: string
  email: string
  company?: string
  message: string
  clientIp: string
}): Promise<{ success: boolean; error?: string }> {
  const client = getResendClient()
  const adminEmail = process.env.CONTACT_EMAIL_RECIPIENT || 'ghosts.lk@proton.me'

  if (!client) {
    return { success: false, error: 'Resend not configured' }
  }

  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0;">🔔 New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: white; border: 1px solid #e0e0e0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 12px; background-color: white; border: 1px solid #e0e0e0;"><strong>${data.name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fafafa; border: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
              <td style="padding: 12px; background-color: #fafafa; border: 1px solid #e0e0e0;">
                <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 12px; background-color: white; border: 1px solid #e0e0e0; font-weight: bold;">Company:</td>
              <td style="padding: 12px; background-color: white; border: 1px solid #e0e0e0;">${data.company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 12px; background-color: #fafafa; border: 1px solid #e0e0e0; font-weight: bold;">Client IP:</td>
              <td style="padding: 12px; background-color: #fafafa; border: 1px solid #e0e0e0; font-family: monospace; font-size: 12px;">${data.clientIp}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: white; border: 1px solid #e0e0e0; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 12px; background-color: white; border: 1px solid #e0e0e0; white-space: pre-wrap; word-break: break-word;">${data.message}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
            Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `

    const { data: result, error } = await client.emails.send({
      from: 'noreply@ghostprotocol.lk',
      to: adminEmail,
      subject: `📬 New Contact Form Submission from ${data.name}`,
      html,
    })

    if (error) {
      console.error('Resend admin email error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    console.error('Failed to send admin notification email:', err)
    return { success: false, error: errorMessage }
  }
}
