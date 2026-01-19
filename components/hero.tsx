"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Paintbrush, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, top, left } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left - width / 2) / width
      const y = (clientY - top - height / 2) / height

      // Subtle parallax effect for logo
      const logoElement = containerRef.current.querySelector("[data-parallax-logo]")
      if (logoElement) {
        ;(logoElement as HTMLElement).style.transform = `
          perspective(1000px)
          rotateY(${x * 5}deg)
          rotateX(${-y * 5}deg)
          translateZ(20px)
        `
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px] animate-parallax-slow" />

      {/* Dynamic gradient orbs */}
      <div
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex flex-col items-start justify-center order-2 lg:order-2">
            <div className="relative">
              {/* Glow background for logo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 rounded-3xl blur-3xl animate-glow-pulse" />

              {/* Logo with parallax effect */}
              <div
                data-parallax-logo
                className="relative animate-float transition-transform duration-300 ease-out"
                style={{ animationDelay: "1s" }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-QMISML0iRClDvDRfGL4rzGIkwBsz0C.png"
                  alt="Ghost Protocol - Precision. Privacy. Performance."
                  width={400}
                  height={400}
                  className="w-80 md:w-96 h-auto rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center order-1 lg:order-1 space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/40 hover:border-primary/60 transition-all">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Welcome to Excellence</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] text-balance">
                Enterprise Solutions
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Built for Impact
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty font-medium">
                Premium IT solutions powered by cutting-edge open-source technology. Web development, creative design, and enterprise IT services crafted with precision and delivered with excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary w-full sm:w-auto bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Paintbrush className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Creative Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">IT Troubleshooting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
