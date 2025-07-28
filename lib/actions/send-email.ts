"use server"

import { ExchangeService, Uri, ExchangeVersion, EmailMessage, MessageBody, BodyType } from "ews-javascript-api"

const clientId = process.env.MICROSOFT_CLIENT_ID
const clientSecret = process.env.MICROSOFT_CLIENT_SECRET
const tenantId = process.env.MICROSOFT_TENANT_ID
const userId = process.env.MICROSOFT_USER_ID

if (!clientId || !clientSecret || !tenantId || !userId) {
  throw new Error("Microsoft OAuth credentials are not set in environment variables.")
}

// Type assertion for OAuth credentials
const clientIdStr: string = clientId
const clientSecretStr: string = clientSecret
const tenantIdStr: string = tenantId
const userIdStr: string = userId

// Get OAuth access token
async function getAccessToken() {
  const tokenEndpoint = `https://login.microsoftonline.com/${tenantIdStr}/oauth2/v2.0/token`
  
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientIdStr,
      client_secret: clientSecretStr,
      scope: 'https://outlook.office365.com/.default',
      grant_type: 'client_credentials',
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data.access_token
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
    // Get OAuth access token
    const accessToken = await getAccessToken()
    
    // Create Exchange service with OAuth
    const service = new ExchangeService(ExchangeVersion.Exchange2010_SP2)
    service.Url = new Uri("https://outlook.office365.com/EWS/Exchange.asmx")
    
    // Set OAuth token
    service.Credentials = {
      getAccessToken: () => Promise.resolve(accessToken)
    } as any

    const email = new EmailMessage(service)
    email.Subject = `New Partnership Inquiry from ${formData.name}`
    email.ToRecipients.Add("louis.charlesint@gmail.com")
    email.ToRecipients.Add("info@louis-charles.com")
    email.ReplyTo.Add(formData.email)
    email.Body = new MessageBody(BodyType.HTML, `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Partnership Inquiry</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🤝 New Partnership Inquiry</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Louis Charles International</p>
        </div>
        <div style="background: #f8fafc; padding: 30px; border-radius: 10px; border-left: 4px solid #f59e0b;">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 20px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #1f2937;">
                <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
              <td style="padding: 8px 0; color: #1f2937;">${formData.company}</td>
            </tr>
            ${
              formData.phone
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #1f2937;">
                <a href="tel:${formData.phone}" style="color: #3b82f6; text-decoration: none;">${formData.phone}</a>
              </td>
            </tr>
            `
                : ""
            }
          </table>
        </div>
        <div style="background: #f0f9ff; padding: 30px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #3b82f6;">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 20px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Industry:</td>
              <td style="padding: 8px 0; color: #1f2937; text-transform: capitalize;">${formData.industry}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service Interest:</td>
              <td style="padding: 8px 0; color: #1f2937;">
                ${
                  formData.projectType === "marketing-solutions"
                    ? "Marketing Solutions"
                    : formData.projectType === "ai-automation"
                      ? "AI Automation"
                      : formData.projectType === "admin-support"
                        ? "Admin Support"
                        : formData.projectType === "all-business-services"
                          ? "All Business Services"
                          : formData.projectType
                }
              </td>
            </tr>
          </table>
        </div>
        <div style="background: #f0fdf4; padding: 30px; border-radius: 10px; border-left: 4px solid #10b981;">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 20px;">Message</h2>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #374151; white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
        </div>
        <div style="background: #1f2937; color: white; padding: 25px; border-radius: 10px; text-align: center; margin-top: 30px;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            📧 Received: ${new Date().toLocaleString("en-US", {
              timeZone: "Asia/Dubai",
              dateStyle: "full",
              timeStyle: "short",
            })} (Dubai Time)
          </p>
          <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.8;">
            💼 Louis Charles International - Partnership Form
          </p>
        </div>
      </body>
      </html>
    `)

    await email.Send()
    return { success: true, data: { message: "Email sent successfully" } }
  } catch (error) {
    console.error("EWS OAuth email sending error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
