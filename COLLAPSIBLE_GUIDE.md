# Collapsible Components Implementation Guide

## Quick Start

### Simple Collapsible Section

\`\`\`tsx
import { CollapsibleSection } from "@/components/collapsible-section"

export default function Example() {
  return (
    <CollapsibleSection
      title="How does it work?"
      content="This is the detailed explanation that appears when you click the heading."
      defaultOpen={false}
    />
  )
}
\`\`\`

### Multiple Collapsible Sections

\`\`\`tsx
import { CollapsibleSections } from "@/components/collapsible-section"

export default function FAQ() {
  const sections = [
    {
      title: "What is this?",
      content: "This is the answer to the first question.",
      defaultOpen: false,
    },
    {
      title: "How do I use it?",
      content: "Here's how you can use this feature...",
      defaultOpen: false,
    },
    {
      title: "Is it free?",
      content: "Yes, it's completely free!",
      defaultOpen: false,
    },
  ]

  return <CollapsibleSections sections={sections} />
}
\`\`\`

### Direct Accordion Usage

For more control, use the Accordion components directly:

\`\`\`tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function CustomAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold">
          Section 1
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          This is the content for section 1.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold">
          Section 2
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          This is the content for section 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
\`\`\`

## Features

### Click to Expand/Collapse
- Click anywhere on the heading text to expand or collapse
- Arrow icon rotates to indicate state
- Smooth animation (0.2s duration)

### Keyboard Navigation
- **Tab**: Move between accordion items
- **Enter/Space**: Toggle expand/collapse on focused item
- **Arrow Up/Down**: Move between items (on trigger)

### Accessibility
- Full ARIA support
- Screen reader friendly
- Semantic HTML
- Proper heading structure

## Customization

### Styling the Trigger

\`\`\`tsx
<AccordionTrigger className="custom-class text-xl font-bold">
  Custom Styled Trigger
</AccordionTrigger>
\`\`\`

### Styling the Content

\`\`\`tsx
<AccordionContent className="custom-class bg-blue-500/10 p-4">
  Custom Styled Content
</AccordionContent>
\`\`\`

### Default Open State

\`\`\`tsx
<Accordion type="single" collapsible defaultValue="item-1">
  {/* item-1 will be open by default */}
</Accordion>
\`\`\`

### Multiple Open Sections

\`\`\`tsx
<Accordion type="multiple">
  {/* Multiple items can be open at once */}
</Accordion>
\`\`\`

## Integration Examples

### In Knowledge Base Articles

\`\`\`tsx
import { CollapsibleSections } from "@/components/collapsible-section"

const sections = [
  {
    title: "Overview",
    content: "Introduction to the topic...",
  },
  {
    title: "Getting Started",
    content: "Step-by-step guide...",
  },
  {
    title: "Advanced Topics",
    content: "More complex concepts...",
  },
  {
    title: "FAQ",
    content: "Common questions and answers...",
  },
]

export default function ArticleWithCollapsible() {
  return (
    <div className="prose prose-invert">
      <h1>Article Title</h1>
      <p>Introduction paragraph...</p>
      
      <CollapsibleSections sections={sections} />
      
      <p>Closing paragraph...</p>
    </div>
  )
}
\`\`\`

### In FAQ Pages

\`\`\`tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12">Frequently Asked Questions</h1>
      
      <Accordion type="single" collapsible>
        <AccordionItem value="q1">
          <AccordionTrigger>What is your service?</AccordionTrigger>
          <AccordionContent>
            We provide comprehensive cybersecurity solutions...
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="q2">
          <AccordionTrigger>How much does it cost?</AccordionTrigger>
          <AccordionContent>
            Our pricing varies based on your needs...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
\`\`\`

### In Support/Help Sections

\`\`\`tsx
import { CollapsibleSection } from "@/components/collapsible-section"

export default function SupportCenter() {
  return (
    <div className="space-y-4">
      <CollapsibleSection
        title="I forgot my password"
        content="You can reset your password by clicking the 'Forgot Password' link on the login page..."
      />
      
      <CollapsibleSection
        title="How do I update my profile?"
        content="Navigate to your account settings and click the edit button..."
      />
      
      <CollapsibleSection
        title="Where's my order?"
        content="You can track your order in the order history section..."
      />
    </div>
  )
}
\`\`\`

## Animation Details

The accordion uses smooth CSS animations:

\`\`\`css
@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}
\`\`\`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Uses CSS transforms for smooth animations
- No JavaScript animations (better performance)
- Minimal re-renders
- Lazy loading of content (not in DOM until expanded)

## Accessibility Checklist

- [x] Keyboard navigation (Tab, Enter, Space, Arrow keys)
- [x] Screen reader support (ARIA labels)
- [x] Focus indicators
- [x] Semantic HTML
- [x] Color contrast meets WCAG AA
- [x] No keyboard traps
- [x] Proper heading hierarchy

## Troubleshooting

### Animations not working?
- Ensure `globals.css` includes accordion animation keyframes
- Check that Tailwind CSS is properly configured

### Not expanding on click?
- Verify `"use client"` directive if component is in app directory
- Check browser console for errors
- Ensure `@radix-ui/react-accordion` is installed

### Styling not applying?
- Use Tailwind utility classes for consistent styling
- Check CSS specificity (prose classes might override)
- Ensure CSS classes are being generated by Tailwind

## Additional Resources

- [Radix UI Accordion Documentation](https://www.radix-ui.com/docs/primitives/components/accordion)
- [Accessible Accordions](https://www.a11y-101.com/components/accordion)
- [Keyboard Navigation Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
