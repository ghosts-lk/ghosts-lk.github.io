import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Zap, Globe, Award, Building2, Calendar, Target, Briefcase, CheckCircle2, Shield } from "lucide-react"
import { teamMembers, companyStats } from "@/lib/data"

export const metadata: Metadata = {
  title: "About | Ghost Protocol",
  description:
    "Learn about Ghost Protocol's mission, team, and expertise in web development, app development, and digital solutions.",
  openGraph: {
    title: "About | Ghost Protocol",
    description: "Discover our story, mission, and team.",
  },
}

const values = [
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

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Started with a vision to provide quality web solutions to businesses of all sizes.",
  },
  {
    year: "2023",
    title: "First Major Project",
    description: "Delivered our first comprehensive platform for an educational institution.",
  },
  {
    year: "2024",
    title: "Team Expansion",
    description: "Grew our team to include specialized designers and developers.",
  },
  {
    year: "2024",
    title: "50+ Projects Milestone",
    description: "Reached over 50 successfully completed projects across multiple industries.",
  },
  {
    year: "2025",
    title: "Knowledge Base Launch",
    description: "Launched our comprehensive knowledge base to share expertise with the community.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-3 text-balance">
            Building Digital Solutions That Last
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ghost Protocol was founded with a clear mission: to provide businesses with technology solutions that
            actually work. Not overengineered systems that look impressive but fail in practice, but practical,
            maintainable solutions tailored to real business needs.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We started Ghost Protocol after seeing too many businesses struggle with technology partners who
                overpromised and underdelivered. Companies were being sold complex systems they didn't need, left with
                code they couldn't maintain, or locked into relationships that didn't serve their interests.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach is different. We keep our team small intentionally, because that's how we maintain quality
                and ensure every client gets the attention they deserve. We believe in honest communication, practical
                solutions, and building relationships that last beyond the initial project.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-muted">
              <Image
                src="/about/office-environment.jpg"
                alt="Ghost Protocol team workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every project we take on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border border-border">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <CardTitle className="text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our growth and development.</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  {index < milestones.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-primary font-semibold">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-1">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of professionals committed to delivering exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.role} className="border border-border">
                <CardHeader>
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-primary/60" />
                    </div>
                  </div>
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {index === 0 && <Target className="h-6 w-6 text-primary" />}
                  {index === 1 && <Building2 className="h-6 w-6 text-primary" />}
                  {index === 2 && <Users className="h-6 w-6 text-primary" />}
                  {index === 3 && <Zap className="h-6 w-6 text-primary" />}
                  <span className="text-4xl font-bold text-primary">{stat.value}</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We're not the biggest agency, and we're okay with that. What we offer is something larger agencies often
            can't: direct access to the people actually building your project, honest advice even when it means less
            work for us, and the flexibility to adapt to your specific needs without bureaucratic overhead.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our clients are businesses that value quality over flashy promises. They've often been burned before and
            want a different experience—or they're smart business owners who did their research and want to get it
            right from day one.
          </p>
        </div>
      </section>
    </div>
  )
}
