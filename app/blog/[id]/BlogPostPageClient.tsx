"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import { blogPosts } from "./blogPosts"

interface PageProps {
  params: { id: string }
}

export default function BlogPostPageClient({ params }: PageProps) {
  const { id } = params
  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="py-20 px-6 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
        <Link href="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-muted">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b border-border/30 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-24
              prose-h1:text-5xl prose-h1:mt-0 prose-h1:mb-8 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-3 prose-h2:font-bold prose-h2:border-b-2 prose-h2:border-primary/20 prose-h2:bg-gradient-to-r prose-h2:from-primary/5 prose-h2:to-transparent prose-h2:px-3 prose-h2:py-2 prose-h2:rounded-sm
              prose-h3:text-2xl prose-h3:mt-11 prose-h3:mb-4 prose-h3:font-semibold prose-h3:text-foreground/90
              prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3 prose-h4:font-semibold prose-h4:text-foreground/85
              prose-h5:text-base prose-h5:mt-6 prose-h5:mb-3 prose-h5:font-medium prose-h5:text-foreground/80
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-justify
              prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:my-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-em:text-foreground/80 prose-em:italic
              prose-ul:my-8 prose-ul:pl-6 prose-ol:my-8 prose-ol:pl-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
              prose-code:text-sm prose-code:bg-secondary/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-primary/90 prose-code:font-mono
              prose-blockquote:border-l-4 prose-blockquote:border-primary/40 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground/80 prose-blockquote:my-6
              prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/30 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-table:w-full prose-table:border-collapse prose-table:text-sm
              prose-th:text-foreground prose-th:font-semibold prose-th:border-b prose-th:border-border/30 prose-th:p-3 prose-th:text-left
              prose-td:border-b prose-td:border-border/20 prose-td:p-3
              prose-img:rounded-lg prose-img:border prose-img:border-border/30
              [&_.lead]:text-xl [&_.lead]:text-foreground [&_.lead]:leading-relaxed [&_.lead]:mb-8 [&_.lead]:font-medium [&_.lead]:text-justify
              [&_table]:border [&_table]:border-border/30"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-primary/10 bg-transparent"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
                        "_blank",
                      )
                    }
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-primary/10 bg-transparent"
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                  >
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([postId]) => postId !== id)
              .slice(0, 2)
              .map(([postId, relatedPost]) => (
                <Link key={postId} href={`/blog/${postId}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-48 rounded-lg overflow-hidden bg-muted mb-4">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
