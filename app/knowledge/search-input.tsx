"use client"

import React from "react"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchInput() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState(searchParams.get("q") || "")

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      // Navigate to all articles page with search query
      // Note: Full search functionality would require backend implementation
      router.push(`/knowledge/all?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        placeholder="Search articles, guides, and tutorials..."
        className="pl-12 py-6 text-base bg-card border-border"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search knowledge base"
      />
    </form>
  )
}
