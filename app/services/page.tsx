import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, TrendingUp, Wrench, Cloud, Zap, Shield, Megaphone, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Ghost Protocol",
  description:
    "Professional web development, app development, lead generation strategies, and IT solutions to grow your business.",
  openGraph: {
    title: "Services | Ghost Protocol",
    description: "Explore our comprehensive services including web development, app development, and lead generation.",
  },
}

const mainServices = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "From simple business sites to complex platforms. We use Next.js, WordPress, or custom solutions depending on what makes sense for your project.",
    features: [
      "Business Websites",
      "E-commerce Stores",
      "Booking Platforms",
      "Portfolio Sites",
      "News & Blog Sites",
      "Landing Pages",
    ],
    highlight: true,
  },
  {
    icon: Code,
    title: "Web Applications",
    description:
      "Custom software built specifically for your business needs. Inventory systems, customer portals, internal tools — we build what off-the-shelf software cannot do.",
    features: [
      "Inventory Management",
      "Customer Portals",
      "Booking Systems",
      "Internal Dashboards",
      "API Development",
      "Database Design",
    ],
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Practical SEO and online marketing that actually brings customers. We focus on what works in Sri Lanka, not generic strategies.",
    features: [
      "Local SEO",
      "Google Business Profile",
      "Content Strategy",
      "WhatsApp Marketing",
      "Social Media Setup",
      "Analytics & Reporting",
    ],
    highlight: true,
  },
  {
    icon: Megaphone,
    title: "Lead Generation",
    description:
      "Attract qualified leads for your business. We use targeted strategies and proven tactics to identify and reach potential customers who are ready to buy.",
    features: [
      "Lead Capture Systems",
      "Email Campaigns",
      "Landing Page Optimization",
      "Lead Scoring",
      "Conversion Funnel Setup",
      "CRM Integration",
    ],
    highlight: true,
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Protect your business from threats. We implement security best practices, conduct vulnerability assessments, and help you stay compliant.",
    features: ["Security Audits", "Vulnerability Assessment", "Data Protection", "Compliance & Regulations"],
    highlight: true,
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description:
      "Ide
    icon: Lock,
    title: "Penetration Testing",
    description:
      "Identify vulnerabilities before attackers do. Our ethical hackers simulate real attacks to find security weaknesses in your systems and applications.",
    features: ["Web App Testing", "Network Testing", "Social Engineering Tests", "Detailed Reports"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your site secure, updated, and running smoothly. We handle backups, updates, and small changes.",
    features: ["Security Updates", "Content Changes", "Regular Backups", "Performance Monitoring"],
  },
  {
    icon: Cloud,
    title: "Hosting & Infrastructure",
    description: "Reliable hosting setup and management. We work with local and international providers.",
    features: ["Domain Management", "SSL Certificates", "Email Setup", "Server Configuration"],
  },
  {
    icon: Zap,
    title: "Technical Support",
    description: "Help when you need it. Whether it is a website issue or general IT questions, we are here.",
    features: ["Issue Resolution", "Training Sessions", "Documentation", "Consultation"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3 text-balance">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We focus on three core areas: building websites that convert, developing applications that solve real
            problems, and providing ongoing IT support to keep everything running smoothly.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-card/20 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className={`border transition-all ${service.highlight ? "border-primary/50 bg-primary/5 hover:border-primary" : "border-border hover:border-primary/50"}`}
                >
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Supporting Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportingServices.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Ghost Protocol?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Transparent Partnership</h3>
                <p className="text-muted-foreground">
                  We work with you as true partners, not vendors. Your success is our success.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Open Source & Customizable</h3>
                <p className="text-muted-foreground">
                  We leverage open-source technologies for flexibility, sustainability, and cost-effectiveness.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Results-Driven Approach</h3>
                <p className="text-muted-foreground">
                  Every solution is designed to deliver measurable results and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Ghost Protocol can help you achieve your business goals through web development, app
            development, and strategic lead generation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
