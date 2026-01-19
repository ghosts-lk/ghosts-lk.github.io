import { Card, CardContent } from "@/components/ui/card"
import { Code, Wrench, Globe, Monitor, Settings, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built with modern open-source technologies. Fast, responsive, and conversion-optimized.",
  },
  {
    icon: Code,
    title: "App Development",
    description: "Full-stack mobile and web applications using cutting-edge frameworks. Scalable and feature-rich.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Strategic lead generation and digital marketing solutions to grow your qualified prospect pipeline ethically.",
  },
  {
    icon: Wrench,
    title: "IT Troubleshooting",
    description: "Quick diagnosis and resolution of hardware, software, and network issues. We fix what's broken.",
  },
  {
    icon: Monitor,
    title: "System Setup & Config",
    description: "Professional setup of workstations, servers, and development environments tailored to your needs.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance to keep your systems running smoothly 24/7.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Web Development, App Development & Lead Generation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We combine cutting-edge development with strategic lead generation to help your business grow. From stunning
            websites to powerful applications and ethical lead generation strategies, we deliver comprehensive
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                
                {/* Bottom accent line */}
                <div className="mt-6 pt-6 border-t border-border/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Learn more →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
