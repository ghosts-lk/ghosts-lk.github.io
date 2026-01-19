import { redirect } from "next/navigation"

// Redirect old blog URLs to the new knowledge base
export default function BlogPage() {
  redirect("/knowledge")
}
