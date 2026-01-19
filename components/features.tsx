import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, Globe, Users, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Honest Assessments",
    description:
      "We tell you what you actually need, not what makes us more money. Sometimes that means recommending simpler solutions.",
  },
  {
    icon: Zap,
    title: "Reliable Delivery",
    description:
      "We give realistic timelines and stick to them. If something changes, you'll know immediately — no surprises.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "We use proven technologies and write clean code. Your website will still work well three years from now.",
  },
  {
    icon: Globe,
    title: "No Vendor Lock-in",
    description:
      "Everything we build is yours. Full access to code, hosting credentials, and documentation. Leave anytime with everything.",
  },
  {
    icon: Users,
    title: "Direct Communication",
    description:
      "You talk to the people actually building your project. No account managers, no game of telephone.",
  },
  {
    icon: Award,
    title: "Local Understanding",
    description:
      "We understand Sri Lankan businesses, payment gateways, hosting infrastructure, and what actually works here.",
  },
]

export function Features() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-sm text-primary font-bold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-4 text-balance leading-tight">
            Built on Trust, Delivered with Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            We combine technical excellence, innovative thinking, and customer-centric values to deliver premium solutions that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
