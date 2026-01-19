import type { Metadata } from "next"
import ContactPageClient from "./client-page"

export const metadata: Metadata = {
  title: "Contact | Ghost Protocol",
  description: "Get in touch with Ghost Protocol. Contact us for inquiries, project proposals, or support requests.",
  openGraph: {
    title: "Contact | Ghost Protocol",
    description: "Contact Ghost Protocol for IT solutions and web development services.",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
