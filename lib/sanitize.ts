/**
 * Security utility for sanitizing HTML content
 * Prevents XSS attacks by stripping dangerous HTML/JS
 */

export function sanitizeHTML(html: string): string {
  // Create a temporary element to parse HTML
  const temp = document.createElement("div")
  temp.textContent = html

  // List of allowed tags (whitelist approach)
  const allowedTags = [
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "a",
    "code",
    "pre",
    "blockquote",
    "hr",
    "img",
  ]

  // List of allowed attributes
  const allowedAttributes: Record<string, string[]> = {
    a: ["href", "title"],
    img: ["src", "alt", "width", "height"],
    code: ["class"],
    pre: ["class"],
  }

  // Parse the HTML string
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")

  // Sanitize recursively
  function sanitizeNode(node: Node): boolean {
    if (node.nodeType === Node.COMMENT_NODE) {
      return false // Remove comments
    }

    if (node.nodeType === Node.TEXT_NODE) {
      return true // Keep text nodes
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element
      const tagName = element.tagName.toLowerCase()

      // Check if tag is allowed
      if (!allowedTags.includes(tagName)) {
        return false // Remove disallowed tags
      }

      // Remove disallowed attributes
      const allowedAttrs = allowedAttributes[tagName] || []
      const attrs = Array.from(element.attributes)
      attrs.forEach((attr) => {
        if (!allowedAttrs.includes(attr.name)) {
          element.removeAttribute(attr.name)
        }
      })

      // Validate URLs in href
      if (tagName === "a") {
        const href = element.getAttribute("href")
        if (href && !href.startsWith("http") && !href.startsWith("/") && !href.startsWith("#")) {
          element.removeAttribute("href")
        }
      }

      // Validate URLs in src
      if (tagName === "img") {
        const src = element.getAttribute("src")
        if (src && !src.startsWith("http") && !src.startsWith("/") && !src.startsWith("data:")) {
          element.removeAttribute("src")
        }
      }

      // Check children
      const children = Array.from(node.childNodes)
      children.forEach((child) => {
        if (!sanitizeNode(child)) {
          node.removeChild(child)
        }
      })

      return true
    }

    return true
  }

  // Sanitize the parsed document
  Array.from(doc.body.childNodes).forEach((node) => {
    sanitizeNode(node)
  })

  return doc.body.innerHTML
}

/**
 * Server-side sanitization using simple regex patterns
 * Use this for server components
 */
export function sanitizeHTMLServer(html: string): string {
  let sanitized = html

  // Remove script tags and their content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")

  // Remove iframe tags
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")

  // Remove event handlers
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, "")
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, "")

  // Remove style tags
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")

  // Remove form tags
  sanitized = sanitized.replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, "")

  // Remove meta tags
  sanitized = sanitized.replace(/<meta\b[^>]*>/gi, "")

  // Remove data: URLs (potential XSS vector)
  sanitized = sanitized.replace(/href\s*=\s*["']data:[^"']*["']/gi, 'href="#"')
  sanitized = sanitized.replace(/src\s*=\s*["']data:text\/html[^"']*["']/gi, 'src=""')

  return sanitized
}
