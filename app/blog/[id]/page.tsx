import type { Metadata } from "next"
import BlogPostPageClient from "./BlogPostPageClient"
import { blogPosts } from "./blogPosts"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params
  const post = blogPosts[id as keyof typeof blogPosts]

  return {
    title: `${post?.title || "Article"} | Ghost Protocol Blog`,
    description: post?.excerpt || "Read our latest blog post",
    openGraph: {
      title: post?.title || "Blog Post",
      description: post?.excerpt || "Read our latest blog post",
      images: [post?.image || "/og-image.jpg"],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }))
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPostPageClient params={params} />
}
