import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
              A Small Team That Gets Things Done
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ghost Protocol is a Colombo-based development team that's been helping Sri Lankan businesses build their
                digital presence since 2019. We're small by choice — it means every project gets our full attention.
              </p>
              <p>
                We specialize in websites, web applications, and business software. Our approach is straightforward: we
                listen to what you need, tell you honestly what's possible within your budget, and then we build it
                properly.
              </p>
            </div>
            <Link href="/about">
              <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-background border border-border overflow-hidden flex items-center justify-center p-8">
              <Image
                src="/images/gp.jpg"
                alt="Ghost Protocol Logo"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
