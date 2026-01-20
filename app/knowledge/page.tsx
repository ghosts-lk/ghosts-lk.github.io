import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  TrendingUp,
  Shield,
  Target,
  Layers,
  CheckSquare,
  Search,
  BookOpen,
  Clock,
  ArrowRight,
} from "lucide-react"
import { knowledgeCategories, knowledgeArticles } from "@/lib/data"
import { Suspense } from "react"
import Loading from "./loading"
import SearchInput from "./search-input"

export const metadata: Metadata = {
  title: "Knowledge Base | Ghost Protocol - IT Security Encyclopedia & Technology Resources",
  description:
    "Comprehensive IT security encyclopedia with 15+ in-depth articles covering enterprise security audits, network security, identity management, incident response, ransomware prevention, compliance frameworks, and cybersecurity best practices. Expert guides on web development, digital marketing, and technology infrastructure.",
  openGraph: {
    title: "Knowledge Base | Ghost Protocol - IT Security Encyclopedia",
    description: "Comprehensive IT security encyclopedia and technology resources. Expert guides on enterprise security, compliance, and best practices.",
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  TrendingUp,
  Shield,
  Target,
  Layers,
  CheckSquare,
  Palette: Target,
  Server: Layers,
  Megaphone: TrendingUp,
}

const featuredArticles = Object.values(knowledgeArticles).slice(0, 3)
const recentArticles = Object.values(knowledgeArticles)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6)

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Search className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Knowledge Base</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Learn. Build. Grow.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Comprehensive guides and resources on web development, cybersecurity, digital marketing, and technology
            best practices. Written by practitioners, for practitioners.
          </p>
          <Suspense fallback={<Loading />}>
            <SearchInput />
          </Suspense>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Browse by Category</h2>
              <p className="text-lg text-muted-foreground mt-2">Explore our organized collection of resources</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeCategories.map((category) => {
              const Icon = iconMap[category.icon] || BookOpen
              return (
                <Link key={category.id} href={`/knowledge/category/${category.id}`}>
                  <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.articleCount} articles
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors mt-4">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-base">{category.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Resources</h2>
              <p className="text-lg text-muted-foreground mt-2">Essential reading for technology professionals</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.id} href={`/knowledge/${article.id}`}>
                <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group overflow-hidden hover:shadow-lg">
                  {/* Image Section - Uniform height */}
                  {article.image && (
                    <div className="relative bg-linear-to-br from-primary/10 to-primary/5 overflow-hidden h-40">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs">
                        {article.category}
                      </Badge>
                      {article.subcategory && (
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">{article.subcategory}</span>
                      )}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-3 pb-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium line-clamp-1">{article.author}</span>
                        <span className="flex items-center gap-1 bg-muted/40 px-2 py-1 rounded">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recent Publications</h2>
              <p className="text-lg text-muted-foreground mt-2">Latest additions to our knowledge base</p>
            </div>
            <Link
              href="/knowledge/all"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recentArticles.map((article) => (
              <Link key={article.id} href={`/knowledge/${article.id}`}>
                <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group hover:shadow-md overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">{article.readTime}</span>
                        </div>
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{article.excerpt}</p>
                        <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                          <span className="font-semibold">{article.author}</span>
                          <span className="text-border">·</span>
                          <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0">
                        <ArrowRight className="h-4.5 w-4.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-card/30 border-t border-border">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Need Expert Guidance?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Our knowledge base is just the beginning. If you need hands-on assistance with your project, our team is
            ready to help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
