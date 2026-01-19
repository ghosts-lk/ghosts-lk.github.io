import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code2, Lightbulb, Users, Quote } from "lucide-react"
import { portfolioProjects, getProjectById } from "@/lib/data"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  return {
    title: `${project?.title || "Project"} | Ghost Protocol`,
    description: project?.description || "View our portfolio project",
    openGraph: {
      title: project?.title || "Portfolio Project",
      description: project?.description || "View our portfolio project",
      images: [project?.image || "/og-image.jpg"],
    },
  }
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="py-20 px-6 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
        <Link href="/portfolio">
          <Button variant="outline">Back to Portfolio</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-muted">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{project.description}</p>

              {/* Challenge */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-primary" />
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="text-muted-foreground flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-card/50 border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Client</dt>
                    <dd className="text-foreground font-medium">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Year</dt>
                    <dd className="text-foreground font-medium">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Industry</dt>
                    <dd className="text-foreground font-medium">{project.category}</dd>
                  </div>
                </dl>
              </div>

              {/* Features */}
              <div className="bg-card/50 border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-card/50 border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact" className="block">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioProjects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/portfolio/${relatedProject.id}`}>
                  <div className="group bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2 bg-primary/10 text-primary">{relatedProject.category}</Badge>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
