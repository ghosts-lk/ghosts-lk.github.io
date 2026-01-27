import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioProjects } from "@/lib/data"
import { RadarIllustration } from "@/components/radar-illustration"

export const metadata: Metadata = {
  title: "Portfolio | Ghost Protocol",
  description:
    "View our portfolio of professional websites and applications across web development, app development, and business solutions.",
  openGraph: {
    title: "Portfolio | Ghost Protocol",
    description: "Explore our professional development portfolio.",
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3 text-balance">
            Projects We Have Delivered
          </h1>
          <p className="text-lg text-muted-foreground">
            We have partnered with businesses across various industries to build custom digital solutions. Here are some
            of the projects we are particularly proud of.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AR Experiences Showcase Card */}
            <Link href="/ar">
              <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                    <RadarIllustration />
                  </div>
                  <div className="relative z-10 text-center"></div>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">AR Technology</Badge>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    AR Experiences
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    Augmented Reality solutions for restaurants, retail, and brand experiences. WebXR-powered immersive
                    interactions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Three.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      WebXR
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      3D Rendering
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <span>Ghost Protocol</span>
                    <span>2026</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {portfolioProjects.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.id}`}>
                <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group overflow-hidden">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">{item.category}</Badge>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a website, application, or custom business solution, we have the expertise to bring your
            vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
