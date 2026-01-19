"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPageClient() {
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
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" className="bg-card border-border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-card border-border" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+94 (0) 11 234 5678" className="bg-card border-border" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Your Company" className="bg-card border-border" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-3 py-2 rounded-md bg-card border border-border text-foreground">
                    <option value="">Select a service</option>
                    <option value="web-dev">Web Development</option>
                    <option value="software-dev">Software Development</option>
                    <option value="design">Creative Design</option>
                    <option value="troubleshooting">IT Troubleshooting</option>
                    <option value="setup">System Setup</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="bg-card border-border min-h-32"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
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
