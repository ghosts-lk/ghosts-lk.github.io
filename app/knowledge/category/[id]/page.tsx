import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { knowledgeCategories, knowledgeArticles } from "@/lib/data"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const category = knowledgeCategories.find((c) => c.id === id)

  if (!category) {
    return {
      title: "Category Not Found | Ghost Protocol",
    }
  }

  return {
    title: `${category.name} | Ghost Protocol Knowledge Base`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return knowledgeCategories.map((category) => ({ id: category.id }))
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params
  const category = knowledgeCategories.find((c) => c.id === id)

  if (!category) {
    notFound()
  }

  // Get articles for this category
  const categoryArticles = knowledgeArticles.filter(
    (article) => article.category === id
  )

  // Group by subcategory
  const subcategories = categoryArticles.reduce(
    (acc, article) => {
      const sub = article.subcategory || "General"
      if (!acc[sub]) acc[sub] = []
      acc[sub].push(article)
      return acc
    },
    {} as Record<string, typeof categoryArticles>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/knowledge" className="hover:text-primary transition-colors">
              Knowledge Base
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{category.name}</h1>
          <p className="text-lg text-muted-foreground mb-4">{category.description}</p>
          <Badge variant="secondary">{categoryArticles.length} articles</Badge>
        </div>
      </section>

      {/* Articles by Subcategory */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {Object.entries(subcategories).map(([subcategory, articles]) => (
            <div key={subcategory} className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">{subcategory}</h2>
              <div className="space-y-4">
                {articles.map((article) => (
                  <Link key={article.id} href={`/knowledge/${article.id}`}>
                    <Card className="border border-border hover:border-primary/50 transition-all cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span>{article.author}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {article.readTime}
                              </span>
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {categoryArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No articles in this category yet.</p>
              <Link href="/knowledge" className="text-primary hover:text-primary/80 transition-colors">
                Browse all articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Explore Other Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {knowledgeCategories
              .filter((c) => c.id !== id)
              .slice(0, 3)
              .map((c) => (
                <Link key={c.id} href={`/knowledge/category/${c.id}`}>
                  <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {c.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{c.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {c.articleCount} articles
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
