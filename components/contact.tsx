"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (formData.company && formData.company.trim().length > 100) {
      newErrors.company = "Company name is too long"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = "Message is too long (max 5000 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus("error")
      setErrorMessage("Please fix the errors below and try again")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      // Simulate form submission to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send your message. Please try again."
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background via-background to-card/50 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-sm text-primary font-bold uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Our team is ready to discuss your project requirements and craft a strategic solution tailored to your needs. Let's build something exceptional together.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Location</div>
                  <div className="text-muted-foreground mt-1">30, Beddagana South, Pitakotte, Colombo 05, Sri Lanka</div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Email</div>
                  <a href="mailto:ghosts.lk@proton.me" className="text-primary hover:text-primary/80 transition-colors">ghosts.lk@proton.me</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Phone</div>
                  <a href="tel:+94771062770" className="text-primary hover:text-primary/80 transition-colors">+94 77 106 2770</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Success Message */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-600 dark:text-green-400">Message Sent Successfully!</p>
                  <p className="text-sm text-green-600/80 dark:text-green-400/80 mt-1">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-600 dark:text-red-400">Error Sending Message</p>
                  <p className="text-sm text-red-600/80 dark:text-red-400/80 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={`bg-background border-border ${
                      errors.name ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-500 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className={`bg-background border-border ${
                      errors.email ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="bg-background border-border"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className={`bg-background border-border min-h-[120px] resize-none ${
                    errors.message ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <div className="flex justify-between items-start mt-1">
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground ml-auto">
                    {formData.message.length} / 5000
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll respond to your inquiry within 24 hours on business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
