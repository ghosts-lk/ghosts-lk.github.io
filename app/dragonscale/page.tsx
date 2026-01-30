import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ShoppingCart,
  CreditCard,
  Clock,
  MapPin,
  Shield,
  Smartphone,
  BarChart3,
  Settings,
  Zap,
  Globe,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Palette,
  Database,
  Lock,
  Truck,
  ChefHat,
  Receipt,
  Bell,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "DragonScale | Restaurant Ordering Platform by Ghost Protocol",
  description:
    "DragonScale is a modern, open-source restaurant ordering platform. Accept online orders, manage your menu, track deliveries, and grow your business.",
  openGraph: {
    title: "DragonScale | Restaurant Ordering Platform",
    description:
      "Modern, open-source restaurant ordering platform. Accept online orders, manage your menu, and grow your business.",
    type: "website",
    images: ["/dragonscale/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DragonScale | Restaurant Ordering Platform",
    description: "Modern, open-source restaurant ordering platform by Ghost Protocol.",
  },
}

const coreFeatures = [
  {
    icon: ShoppingCart,
    title: "Online Ordering",
    description:
      "Beautiful, mobile-first ordering experience. Customers can browse your menu, customize items, and place orders effortlessly.",
  },
  {
    icon: ChefHat,
    title: "Menu Management",
    description:
      "Easy-to-use admin panel to manage categories, items, prices, availability, and special offers in real-time.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Accept payments via card, bank transfer, or cash on delivery. Secure and flexible for any business model.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description:
      "Customers can track their order status from confirmation to delivery with automatic updates and ETA.",
  },
  {
    icon: Truck,
    title: "Delivery & Pickup",
    description:
      "Support for delivery, pickup, and dine-in orders with delivery zone management and fee calculation.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track orders, revenue, popular items, and customer insights to make data-driven decisions.",
  },
]

const adminFeatures = [
  {
    icon: Receipt,
    title: "Order Management",
    description: "View, filter, and manage all orders with one-click status updates and kitchen tickets.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Get instant alerts for new orders with browser notifications and sound alerts.",
  },
  {
    icon: Settings,
    title: "Restaurant Settings",
    description: "Configure business hours, delivery zones, minimum orders, and more from one place.",
  },
  {
    icon: Shield,
    title: "Secure Admin Panel",
    description: "Protected admin area with session management, rate limiting, and security headers.",
  },
]

const technicalFeatures = [
  {
    icon: Database,
    title: "SQLite Database",
    description: "Zero-configuration database. No MySQL or PostgreSQL setup needed — just deploy and go.",
  },
  {
    icon: Globe,
    title: "Single-Page Experience",
    description: "Fast, app-like experience with smooth transitions and no full page reloads.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive design optimized for phones, tablets, and desktops. Works everywhere.",
  },
  {
    icon: Lock,
    title: "Security Built-In",
    description: "CSRF protection, XSS prevention, SQL injection prevention, and rate limiting out of the box.",
  },
]

const benefits = [
  {
    title: "No Monthly Fees",
    description: "Unlike SaaS platforms, DragonScale is self-hosted. No recurring subscription costs.",
    icon: CreditCard,
  },
  {
    title: "Full Ownership",
    description: "Your data, your customers, your business. No third-party platform lock-in.",
    icon: Users,
  },
  {
    title: "Open Source",
    description: "MIT licensed. Customize, extend, and white-label as you need.",
    icon: Terminal,
  },
  {
    title: "Easy Setup",
    description: "Deploy on any PHP 8+ host in minutes. Works with cPanel, Plesk, or any VPS.",
    icon: Zap,
  },
]

const techStack = [
  { name: "PHP 8+", description: "Modern PHP with PDO" },
  { name: "SQLite", description: "Zero-config database" },
  { name: "Vanilla JS", description: "No framework dependencies" },
  { name: "CSS3", description: "Custom properties & animations" },
]

export default function DragonScalePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Open Source • MIT License
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Restaurant Ordering,{" "}
                <span className="text-primary">Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                DragonScale is a modern, self-hosted ordering platform for restaurants. Accept online orders, manage your menu, track deliveries, and own your customer relationships — without monthly fees.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dragonscale/docs">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    <BookOpen className="h-5 w-5" />
                    View Documentation
                  </Button>
                </Link>
                <Link href="https://github.com/ghosts-lk/DragonScale" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Terminal className="h-5 w-5" />
                    GitHub Repository
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Production Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">No Vendor Lock-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">GDPR Friendly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border shadow-2xl">
                {/* Placeholder for screenshot */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-center p-8">
                    <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Beautiful ordering interface</p>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Real-time updates</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">5-star experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Everything You Need to Run Your Restaurant Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DragonScale comes packed with features to help you accept orders, manage your business, and delight your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="border border-border hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Why DragonScale?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Own Your Platform,{" "}
                <span className="text-primary">Not Your Fees</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Third-party ordering platforms charge 15-30% per order. DragonScale is a one-time setup with zero recurring fees. Your revenue stays with you.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Cost Comparison</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Third-Party Platforms</span>
                  <span className="text-destructive font-semibold">15-30% per order</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Monthly SaaS</span>
                  <span className="text-yellow-500 font-semibold">$50-300/month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">DragonScale</span>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/10 text-primary">One-time setup</Badge>
                    <span className="text-primary font-bold">$0/month</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Example:</strong> A restaurant doing 500 orders/month at $30 average could save <span className="text-primary font-semibold">$2,250+/month</span> in platform fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin & Technical Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="admin" className="w-full">
            <div className="text-center mb-12">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Powerful for Owners, Simple for Customers
              </h2>
              <TabsList className="bg-card/50 border border-border">
                <TabsTrigger value="admin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Admin Features
                </TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Technical Details
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="admin">
              <div className="grid md:grid-cols-2 gap-8">
                {adminFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card key={feature.title} className="border border-border bg-card/50">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-foreground mb-2">{feature.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="technical">
              <div className="grid md:grid-cols-2 gap-8">
                {technicalFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card key={feature.title} className="border border-border bg-card/50">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-foreground mb-2">{feature.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Built With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Simple, Reliable Technology
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="text-center p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-card/50 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Launch Your Online Ordering?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with DragonScale today. Check our documentation for setup guides, or contact us for professional installation and customization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dragonscale/docs">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Read the Docs
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                Get Professional Setup
              </Button>
            </Link>
            <Link href="https://github.com/ghosts-lk/DragonScale" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="gap-2">
                <Terminal className="h-5 w-5" />
                View Source Code
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
