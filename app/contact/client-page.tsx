"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot field
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Message sent successfully! We'll get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          website: "",
        })
      } else {
        setMessage({
          type: "error",
          text: result.message || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      })
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Contact Our Team</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3 text-balance">
            Let's Explore Your Project Opportunity
          </h1>
          <p className="text-lg text-muted-foreground">
            We welcome the opportunity to discuss your business requirements and demonstrate how our enterprise solutions can drive meaningful results. Our team is ready to provide strategic insights and personalized recommendations tailored to your objectives.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </h3>
                <a
                  href="mailto:ghosts.lk@proton.me"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ghosts.lk@proton.me
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone / WhatsApp
                </h3>
                <a href="tel:+94771062770" className="text-muted-foreground hover:text-primary transition-colors">
                  +94 77 106 2770
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </h3>
                <address className="text-muted-foreground not-italic leading-relaxed">
                  30, Beddagana South
                  <br />
                  Pitakotte, Colombo
                  <br />
                  Sri Lanka
                </address>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Working Hours
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {message && (
                  <div
                    className={`p-4 rounded-lg ${
                      message.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-card border-border"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-card border-border"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="bg-card border-border"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Honeypot field - hidden from users, for spam detection */}
                <input type="hidden" id="website" value={formData.website} onChange={handleInputChange} />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="bg-card border-border min-h-32"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-primary/5 border-y border-primary/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Custom Pricing for Your Project</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every project is unique. We provide customized quotes based on your specific requirements, timeline, and budget. 
            Let's discuss what works best for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+94771062770" className="inline-flex items-center gap-2">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="h-5 w-5" />
                Call for Pricing: +94 77 106 2770
              </Button>
            </a>
            <a href="mailto:ghosts.lk@proton.me" className="inline-flex items-center gap-2">
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 bg-transparent">
                <Mail className="h-5 w-5" />
                Email us for Details
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Essential information about our services, processes, and engagement models</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is the typical project timeline for website development?",
                a: "Project timelines vary based on scope and complexity. Standard business websites are typically completed within 4-8 weeks from initiation to launch. Enterprise-level solutions, including e-commerce platforms and bespoke applications, generally require 8-16 weeks. We will provide a comprehensive timeline projection during our initial consultation.",
              },
              {
                q: "How are project fees structured?",
                a: "Our pricing model is customized to reflect the specific scope, technical complexity, and resource requirements of your project. We provide competitive, transparent quotes that align with your business objectives and timeline. For a detailed cost assessment and formal proposal, please contact us at +94 77 106 2770 or ghosts.lk@proton.me.",
              },
              {
                q: "Do you offer hosting infrastructure and ongoing maintenance services?",
                a: "Yes. We provide comprehensive hosting solutions, infrastructure management, security updates, and scheduled maintenance services. We will work with you to identify the optimal hosting configuration and support tier that meets your operational requirements. Contact us at +94 77 106 2770 to discuss your specific hosting and maintenance needs.",
              },
              {
                q: "Do you provide assessment and migration services for existing platforms?",
                a: "We specialize in evaluating, optimizing, and migrating existing web properties and digital infrastructure. Our assessment process includes a thorough technical audit, identification of performance gaps, and strategic recommendations. We welcome the opportunity to discuss your current platform and explore migration or optimization opportunities.",
              },
              {
                q: "What post-delivery support and knowledge transfer are included?",
                a: "Upon project completion, we provide comprehensive training, complete documentation, and transfer of all credentials and assets. Your organization maintains full ownership and operational control. We also offer flexible ongoing support arrangements to ensure optimal system performance and continued success.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
