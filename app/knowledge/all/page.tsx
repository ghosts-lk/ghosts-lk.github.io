import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, ArrowRight, ChevronRight, Filter } from "lucide-react"
import { knowledgeArticles, knowledgeCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "All Articles | Ghost Protocol Knowledge Base",
  description: "Browse our complete collection of articles, guides, and tutorials on technology and business.",
}

export default function AllArticlesPage() {
  const allArticles = [...knowledgeArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
            <span className="text-foreground">All Articles</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" />
                  Categories
                </h3>
                <nav className="space-y-2">
                  {knowledgeCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/knowledge/category/${category.id}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.articleCount}
                      </Badge>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 order-1 lg:order-2">
            <div className="mb-8">
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Knowledge Base
              </Link>
              <h1 className="text-3xl font-bold text-foreground mb-2">All Articles</h1>
              <p className="text-muted-foreground">{allArticles.length} publications</p>
            </div>

            <div className="space-y-4">
              {allArticles.map((article) => (
                <Link key={article.id} href={`/knowledge/${article.id}`}>
                  <Card className="border border-border hover:border-primary/50 transition-all cursor-pointer group hover:shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 font-semibold text-xs">{article.category}</Badge>
                            {article.subcategory && (
                              <Badge variant="secondary" className="text-xs font-medium bg-muted/50">
                                {article.subcategory}
                              </Badge>
                            )}
                          </div>
                          <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                            {article.title}
                          </h2>
                          <p className="text-muted-foreground line-clamp-2 mb-5 text-sm">{article.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                            <span className="font-semibold">{article.author}</span>
                            <span className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1 rounded text-xs">
                              <Clock className="h-3.5 w-3.5 text-primary" />
                              {article.readTime}
                            </span>
                            <span>
                              {new Date(article.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
