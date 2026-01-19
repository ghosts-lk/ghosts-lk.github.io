import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghost Protocol | IT Solutions Sri Lanka",
  description:
    "Premium IT services and digital solutions based in Sri Lanka. Web development, software development, creative design, and IT troubleshooting.",
  generator: "v0.app",
  metadataBase: new URL("https://ghostprotocol.lk"),
  openGraph: {
    title: "Ghost Protocol | IT Solutions Sri Lanka",
    description: "Premium IT services and digital solutions based in Sri Lanka.",
    type: "website",
    locale: "en_US",
    url: "https://ghostprotocol.lk",
    siteName: "Ghost Protocol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Protocol | IT Solutions Sri Lanka",
    description: "Premium IT services and digital solutions based in Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="min-h-screen bg-background pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
