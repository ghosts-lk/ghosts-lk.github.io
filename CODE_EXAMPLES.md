# Code Examples: Knowledge Base & Contact Form

## 1. Using Collapsible Sections in Articles

### Simple FAQ Section
\`\`\`tsx
"use client"

import { CollapsibleSections } from "@/components/collapsible-section"

export default function ArticleWithFAQ() {
  const faqSections = [
    {
      title: "What is Web Security?",
      content: "Web security refers to the practice of protecting websites and web applications from unauthorized access, malicious attacks, and data breaches. It encompasses various techniques and best practices to ensure the confidentiality, integrity, and availability of web-based systems.",
      defaultOpen: true,
    },
    {
      title: "Why is it important?",
      content: "With increasing cyber threats and the growing dependence on web applications for business operations, web security is crucial. It protects sensitive user data, prevents financial losses, maintains business reputation, and ensures compliance with regulations.",
      defaultOpen: false,
    },
    {
      title: "What are common vulnerabilities?",
      content: "Common web vulnerabilities include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), broken authentication, sensitive data exposure, and insecure deserialization. Knowing these helps developers and security professionals implement proper defenses.",
      defaultOpen: false,
    },
  ]

  return (
    <article className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Web Security Essentials</h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p>A comprehensive guide to securing your web applications...</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <CollapsibleSections sections={faqSections} />
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
        {/* Additional content */}
      </section>
    </article>
  )
}
\`\`\`

### Tutorial with Steps
\`\`\`tsx
"use client"

import { CollapsibleSections } from "@/components/collapsible-section"

export default function TutorialPage() {
  const steps = [
    {
      title: "Step 1: Set up your development environment",
      content: `
1. Install Node.js and npm
2. Create a new Next.js project
3. Install required dependencies
4. Configure your environment variables
      `.trim(),
      defaultOpen: true,
    },
    {
      title: "Step 2: Create your first component",
      content: `
Create a new file in the components directory.
Export your component as default.
Use TypeScript for better type safety.
Test your component in isolation.
      `.trim(),
      defaultOpen: false,
    },
    {
      title: "Step 3: Integrate with your project",
      content: `
Import your component in the desired page.
Pass any required props.
Test the component in the live page.
Verify styling and responsiveness.
      `.trim(),
      defaultOpen: false,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12">Getting Started Tutorial</h1>
      <CollapsibleSections sections={steps} />
    </div>
  )
}
\`\`\`

## 2. Enhanced Contact Form Integration

### Basic Implementation
\`\`\`tsx
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Have questions? We'd love to hear from you.
        </p>
      </div>
      <Contact />
    </div>
  )
}
\`\`\`

### Custom Wrapper with Analytics
\`\`\`tsx
"use client"

import { Contact } from "@/components/contact"
import { useEffect } from "react"

export default function ContactPageWithAnalytics() {
  useEffect(() => {
    // Track contact page view
    window.gtag?.("pageview", {
      page_path: "/contact",
      page_title: "Contact Page",
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Have questions? We'd love to hear from you.
        </p>
      </div>
      <Contact />
    </div>
  )
}
\`\`\`

## 3. Custom Accordion Usage

### Multi-Select Accordion
\`\`\`tsx
"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function MultiSelectAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1" className="border border-border rounded-lg mb-4">
        <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline">
          🔒 Security
        </AccordionTrigger>
        <AccordionContent className="px-4 text-muted-foreground">
          We use industry-standard encryption and security protocols to protect your data.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border border-border rounded-lg mb-4">
        <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline">
          ⚡ Performance
        </AccordionTrigger>
        <AccordionContent className="px-4 text-muted-foreground">
          Our optimized infrastructure ensures lightning-fast response times.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border border-border rounded-lg">
        <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline">
          🎯 Scalability
        </AccordionTrigger>
        <AccordionContent className="px-4 text-muted-foreground">
          Scale from startup to enterprise without worrying about infrastructure.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
\`\`\`

### Styled Features Accordion
\`\`\`tsx
"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function FeaturesAccordion() {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Real-time insights into your application's performance",
      badge: "Pro",
    },
    {
      title: "Custom Integrations",
      description: "Connect with your favorite tools and services",
      badge: "Enterprise",
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team ready to help anytime",
      badge: "All Plans",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {features.map((feature, index) => (
          <AccordionItem key={index} value={`feature-${index}`} className="border border-primary/20 rounded-lg mb-4">
            <AccordionTrigger className="px-4 py-3 text-lg font-semibold hover:no-underline flex justify-between">
              <span>{feature.title}</span>
              <Badge className="ml-2">{feature.badge}</Badge>
            </AccordionTrigger>
            <AccordionContent className="px-4 text-muted-foreground">
              {feature.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
\`\`\`

## 4. Knowledge Base Article with Enhanced Typography

### Full Article Example
\`\`\`tsx
export default function ArticlePage() {
  return (
    <article className="container mx-auto py-12 max-w-4xl">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-6">
          Advanced CSS Techniques for Modern Web Design
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Discover cutting-edge CSS techniques that will elevate your web design skills
          and create stunning, performant user interfaces.
        </p>
        
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>By Sarah Chen</span>
          <span>•</span>
          <span>January 15, 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </header>

      {/* Content with proper typography */}
      <div className="prose prose-lg prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>
          CSS has evolved significantly over the past decade. What once seemed impossible
          with CSS alone is now achievable with modern features like Grid, Flexbox, and
          CSS Custom Properties.
        </p>

        <h2>CSS Grid Mastery</h2>
        <p>
          CSS Grid is one of the most powerful layout tools ever created. It allows you to
          create complex, responsive layouts with minimal code.
        </p>

        <h3>Two-Dimensional Layouts</h3>
        <p>
          Unlike Flexbox, which is primarily one-dimensional, CSS Grid can handle both rows
          and columns simultaneously.
        </p>

        <code className="block bg-secondary/50 p-4 rounded-lg">
          {`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`}
        </code>

        <h3>Named Grid Areas</h3>
        <p>
          Named grid areas make your layouts more readable and maintainable.
        </p>

        <blockquote>
          "CSS Grid changes everything we thought we knew about web layouts."
          — Developer Advocate
        </blockquote>

        <h2>Custom Properties (CSS Variables)</h2>
        <p>
          CSS custom properties provide a way to reuse values throughout your stylesheets.
        </p>

        <ul>
          <li>Define once, use everywhere</li>
          <li>Update dynamically with JavaScript</li>
          <li>Create custom design systems</li>
          <li>Improve maintainability</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Mastering these advanced CSS techniques will make you a more effective web designer
          and developer. Keep experimenting and pushing the boundaries of what's possible.
        </p>
      </div>

      {/* Related Articles */}
      <section className="mt-12 pt-12 border-t border-border">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        {/* Article cards here */}
      </section>
    </article>
  )
}
\`\`\`

## 5. Advanced Form Handling

### Form with Custom Success Message
\`\`\`tsx
"use client"

import { Contact } from "@/components/contact"
import { useState } from "react"

export default function ContactWithCustomLogic() {
  const [submitCount, setSubmitCount] = useState(0)

  const handleSubmitSuccess = () => {
    setSubmitCount(count => count + 1)
    
    // Track successful submissions
    window.gtag?.("event", "form_submit", {
      value: submitCount,
    })
  }

  return (
    <div>
      {submitCount > 0 && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8">
          <p className="text-green-600 font-medium">
            You've successfully sent {submitCount} message(s). Thank you for your interest!
          </p>
        </div>
      )}
      
      <Contact />
    </div>
  )
}
\`\`\`

### Form with Custom Validation
\`\`\`tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormWithCustomValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validatePhone = (phone: string): boolean => {
    return /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(phone)
  }

  const handleValidation = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (handleValidation()) {
      // Submit form
      console.log("Form submitted:", formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
\`\`\`

## 6. Keyboard Navigation Testing

### Test Accordion Navigation
\`\`\`tsx
export default function AccordionKeyboardTest() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Keyboard Navigation Test</h1>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
        <p className="text-blue-600 font-medium mb-2">Instructions:</p>
        <ul className="text-blue-600 space-y-1 text-sm">
          <li>• Press Tab to navigate between accordion items</li>
          <li>• Press Enter or Space to toggle expansion</li>
          <li>• Press Arrow Up/Down to move between items</li>
        </ul>
      </div>

      {/* Include accordion components here */}
      {/* Users can test keyboard navigation */}
    </div>
  )
}
\`\`\`

---

These examples demonstrate the flexibility and power of the new components. Feel free to adapt them to your specific needs and design preferences.
