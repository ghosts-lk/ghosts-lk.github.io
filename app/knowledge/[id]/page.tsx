import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  BookOpen,
  ArrowRight,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react"
import { knowledgeArticles, getRelatedArticles, getArticleById, knowledgeCategories } from "@/lib/data"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const article = getArticleById(id)

  if (!article) {
    return {
      title: "Article Not Found | Ghost Protocol",
    }
  }

  return {
    title: `${article.title} | Ghost Protocol Knowledge Base`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

export async function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ id: article.id }))
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = getArticleById(id)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(id)

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
            <Link
              href={`/knowledge/category/${article.category.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
              className="hover:text-primary transition-colors"
            >
              {article.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Header */}
            <header className="mb-14">
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Knowledge Base
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">{article.category}</Badge>
                {article.subcategory && (
                  <Badge variant="secondary" className="text-xs font-medium bg-muted/50">
                    {article.subcategory}
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight">
                {article.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">{article.excerpt}</p>

              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground pb-8 border-b border-border/50">
                <div className="flex items-center gap-3 font-medium">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{new Date(article.date).toLocaleDateString("en-US", { 
                    year: "numeric", 
                    month: "long", 
                    day: "numeric" 
                  })}</span>
                </div>
                <div className="flex items-center gap-3 bg-muted/50 px-3 py-1.5 rounded-lg">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </header>

            {/* Article Content with Professional Styling - Consistent with Site Design */}
            <style>{`
              .article-content h2 {
                font-size: 1.875rem;
                font-weight: 700;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid rgba(var(--primary), 0.3);
                background: linear-gradient(to right, rgba(var(--primary), 0.08), transparent);
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 0.5rem;
                border-radius: 0.375rem;
                color: rgb(var(--foreground));
                letter-spacing: -0.5px;
              }
              
              .article-content h3 {
                font-size: 1.5rem;
                font-weight: 700;
                margin-top: 2.5rem;
                margin-bottom: 1.25rem;
                color: rgb(var(--foreground));
                letter-spacing: -0.3px;
              }
              
              .article-content h4 {
                font-size: 1.25rem;
                font-weight: 600;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: rgb(var(--foreground));
              }
              
              .article-content p {
                margin-bottom: 1.75rem;
                line-height: 1.8;
                color: rgb(var(--muted-foreground));
                font-size: 1rem;
                letter-spacing: 0.3px;
              }
              
              .article-content .lead {
                font-size: 1.125rem;
                font-weight: 500;
                line-height: 1.8;
                margin-bottom: 2rem;
                color: rgb(var(--foreground));
              }
              
              .article-content ul, .article-content ol {
                margin-top: 1.5rem;
                margin-bottom: 2rem;
                padding-left: 2rem;
                list-style-position: outside;
              }
              
              .article-content ul li {
                margin-bottom: 1rem;
                line-height: 1.8;
                color: rgb(var(--muted-foreground));
                font-size: 1rem;
                padding-left: 0.5rem;
              }
              
              .article-content ul li::marker {
                color: rgb(var(--primary));
                font-weight: 600;
              }
              
              .article-content ol {
                counter-reset: list-counter;
                list-style: none;
                padding-left: 0;
              }
              
              .article-content ol li {
                counter-increment: list-counter;
                margin-bottom: 1rem;
                line-height: 1.8;
                color: rgb(var(--muted-foreground));
                font-size: 1rem;
                display: flex;
                align-items: flex-start;
              }
              
              .article-content ol li::before {
                content: counter(list-counter);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 1.75rem;
                height: 1.75rem;
                margin-right: 1rem;
                background: rgba(var(--primary), 0.1);
                color: rgb(var(--primary));
                font-weight: 600;
                border-radius: 0.375rem;
                font-size: 0.875rem;
                flex-shrink: 0;
              }
              
              .article-content strong {
                font-weight: 700;
                color: rgb(var(--foreground));
              }
              
              .article-content a {
                color: rgb(var(--primary));
                text-decoration: none;
                transition: all 0.2s ease;
                font-weight: 500;
                border-bottom: 1px solid rgba(var(--primary), 0.2);
              }
              
              .article-content a:hover {
                border-bottom: 1px solid rgb(var(--primary));
              }
              
              .article-content code {
                background-color: rgba(var(--primary), 0.08);
                color: rgb(var(--primary));
                padding: 0.25rem 0.6rem;
                border-radius: 0.375rem;
                font-family: 'Monaco', 'Courier New', monospace;
                font-size: 0.875rem;
                font-weight: 500;
              }
              
              .article-content blockquote {
                border-left: 4px solid rgb(var(--primary));
                padding: 1rem 1.5rem;
                background: rgba(var(--primary), 0.05);
                font-style: italic;
                color: rgb(var(--muted-foreground));
                margin: 2rem 0;
                border-radius: 0.375rem;
              }
              
              .article-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 2rem 0;
                font-size: 0.95rem;
                border: 1px solid rgba(var(--border), 0.3);
                border-radius: 0.5rem;
                overflow: hidden;
              }
              
              .article-content th {
                background: linear-gradient(to right, rgba(var(--primary), 0.12), rgba(var(--primary), 0.05));
                border-bottom: 2px solid rgba(var(--primary), 0.3);
                padding: 1rem;
                text-align: left;
                font-weight: 700;
                color: rgb(var(--foreground));
              }
              
              .article-content td {
                border-bottom: 1px solid rgba(var(--border), 0.2);
                padding: 0.875rem 1rem;
                color: rgb(var(--muted-foreground));
              }
              
              .article-content tr:last-child td {
                border-bottom: none;
              }
              
              .article-content tr:hover {
                background-color: rgba(var(--primary), 0.02);
              }
            `}</style>

            <div
              className="article-content space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">Topics Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <button className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors" aria-label="Share article">
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors" aria-label="Bookmark article">
                  <Bookmark className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* CTA Card */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Need Implementation Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our team can help you apply these concepts to your specific project.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Related Articles</h4>
                    <div className="space-y-4">
                      {relatedArticles.slice(0, 5).map((related) => (
                        <Link
                          key={related.id}
                          href={`/knowledge/${related.id}`}
                          className="block group"
                        >
                          <h5 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h5>
                          <p className="text-xs text-muted-foreground mt-1">{related.readTime}</p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Table of Contents */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Table of Contents
                    </h4>
                    <nav className="space-y-2">
                      {article.tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm text-muted-foreground hover:text-primary transition-colors ${
                            item.level === 3 ? "pl-4" : ""
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* More Articles */}
      <section className="py-24 px-6 bg-gradient-to-br from-card/40 to-card/20 border-t border-border">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Continue Learning</h2>
            <p className="text-muted-foreground">Explore related topics and expand your knowledge</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {knowledgeArticles
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((a) => (
                <Link key={a.id} href={`/knowledge/${a.id}`}>
                  <Card className="h-full border border-border hover:border-primary/50 transition-all cursor-pointer group hover:shadow-lg overflow-hidden">
                    {a.image && (
                      <div className="relative h-32 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                        <img
                          src={a.image || "/placeholder.svg"}
                          alt={a.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className={`${a.image ? "pt-5" : "pt-6"} px-6 pb-6`}>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold mb-4">
                        {a.category}
                      </Badge>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-tight">
                        {a.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{a.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 w-fit px-2.5 py-1.5 rounded">
                        <Clock className="h-3.5 w-3.5" />
                        {a.readTime}
                      </div>
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
