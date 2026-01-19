"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import { knowledgeArticles, knowledgeCategories } from "@/lib/data"

export function Blog() {
  // Get featured and recent articles from knowledge base
  const featuredArticles = knowledgeArticles.filter((a) => a.featured).slice(0, 2)
  const recentArticles = [...knowledgeArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)
  
  const displayArticles = [...featuredArticles, ...recentArticles.filter(
    (r) => !featuredArticles.find((f) => f.id === r.id)
  )].slice(0, 4)

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance leading-tight">
            Resources & Educational Content
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive guides, tutorials, and insights on web development, security, design, and business strategy.
            A curated resource for learning and reference.
          </p>
        </div>

        {/* Categories Preview */}
        <div className="flex flex-wrap gap-3 mb-12">
          {knowledgeCategories.slice(0, 5).map((category) => (
            <Link
              key={category.id}
              href={`/knowledge/category/${category.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <BookOpen className="h-3.5 w-3.5" />
              {category.name}
            </Link>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {displayArticles.map((article, index) => (
            <Card
              key={article.id}
              className={`border transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-lg ${
                index === 0 ? "border-primary/30 shadow-md" : "border-border hover:border-primary/50"
              }`}
            >
              {/* Optional image section for featured articles */}
              {article.image && (
                <div className="relative h-40 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "text-primary bg-primary/10 hover:bg-primary/20"
                  }`}>
                    {knowledgeCategories.find((c) => c.id === article.category)?.name || article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors line-clamp-3 leading-tight ${
                  index === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                }`}>
                  {article.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">{article.excerpt}</p>

                <div className="flex items-center justify-between pt-6 border-t border-border/40">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-semibold text-foreground">{article.author}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <Link
                    href={`/knowledge/${article.id}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={`Read ${article.title}`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            Explore Knowledge Base
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
