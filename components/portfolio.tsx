"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { portfolioProjects } from "@/lib/data"

export function Portfolio() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-3 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of recent projects we have delivered for clients across various industries. Each solution is
            tailored to meet specific business requirements and drive measurable results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.id}`}>
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                {/* Image Container */}
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-secondary text-foreground rounded border border-border/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Client: <span className="text-foreground font-medium">{item.client}</span>
                    </p>
                    <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      View Details
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of our work or discussing your project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
            >
              View All Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
