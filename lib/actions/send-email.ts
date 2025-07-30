"use server"

import nodemailer from "nodemailer"

// SMTP Configuration for noreply@louis-charles.com
const smtpHost = process.env.SMTP_HOST || "smtp.office365.com"
const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587")
const smtpUser = process.env.SMTP_USER || "no.reply@louis-charles.com"
const smtpPassword = process.env.SMTP_PASSWORD

// Check if SMTP is properly configured
const isSmtpConfigured = smtpPassword && smtpHost && smtpUser

// Create transporter only if SMTP is configured
let transporter: nodemailer.Transporter | null = null

if (isSmtpConfigured) {
  try {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })
  } catch (error) {
    console.error("Failed to create SMTP transporter:", error)
  }
}

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  industry: string
  projectType: string
  message: string
}

export async function sendPartnershipEmail(formData: FormData) {
  try {
    // Check if SMTP is configured
    if (!isSmtpConfigured) {
      console.warn("SMTP not configured. Email functionality disabled in preview/development.")

      // In development/preview, just log the form data and return success
      console.log("Partnership form submission:", {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        industry: formData.industry,
        projectType: formData.projectType,
        message: formData.message.substring(0, 100) + "...",
      })

      return {
        success: true,
        data: {
          message: "Form submitted successfully! (Email sending disabled in preview mode)",
        },
      }
    }

    if (!transporter) {
      throw new Error("SMTP transporter not available")
    }

    const name = formData.name
    const email = formData.email
    const company = formData.company
    const message = formData.message

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          🤝 New Partnership Inquiry
        </h2>
          
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Project Details</h3>
          <p><strong>Industry:</strong> ${formData.industry}</p>
          <p><strong>Service Interest:</strong> ${
                    formData.projectType === "marketing-solutions"
                      ? "Marketing Solutions"
                      : formData.projectType === "ai-automation"
                        ? "AI Automation"
                        : formData.projectType === "admin-support"
                          ? "Admin Support"
                          : formData.projectType === "all-business-services"
                            ? "All Business Services"
                            : formData.projectType
          }</p>
          </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #666;">
          <p>This inquiry was submitted through the Louis Charles International website.</p>
          <p>To respond, please reply to this email or contact: ${email}</p>
        </div>
          </div>
    `

    // Send email
    const mailOptions = {
      from: `"Louis Charles International" <${smtpUser}>`,
      to: ["info@louis-charles.com"],
      replyTo: email,
      subject: `New Partnership Inquiry from ${name}`,
      html: htmlContent,
    }

    await transporter.sendMail(mailOptions)

    return { success: true, data: { message: "Email sent successfully" } }
  } catch (error) {
    console.error("SMTP email sending error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
