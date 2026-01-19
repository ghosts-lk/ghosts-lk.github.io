import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ghostprotocol.lk"

  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Add portfolio project pages
  const projects = [
    "educational-portal",
    "medical-professional-portfolio",
    "clinic-management-system",
    "real-estate-platform",
    "resort-booking-platform",
    "inventory-management-system",
  ]
  const projectPages = projects.map((id) => ({
    url: `${baseUrl}/portfolio/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Add blog post pages - redirect to knowledge base
  const blogIds = [
    "why-sri-lankan-businesses-need-websites",
    "choosing-right-tech-stack",
    "website-security-small-business",
    "real-estate-digital-marketing",
  ]
  const blogPages = blogIds.map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...pages, ...projectPages, ...blogPages]
}
