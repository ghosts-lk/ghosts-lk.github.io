# Quick Start Guide: New Features

## 🚀 Getting Started in 5 Minutes

### 1. Using the Accordion Component

**Simplest Usage:**
\`\`\`tsx
import { CollapsibleSection } from "@/components/collapsible-section"

<CollapsibleSection 
  title="Click me!"
  content="This content appears when expanded."
/>
\`\`\`

**Multiple Sections:**
\`\`\`tsx
import { CollapsibleSections } from "@/components/collapsible-section"

const faqs = [
  { title: "Q1?", content: "A1" },
  { title: "Q2?", content: "A2" },
]

<CollapsibleSections sections={faqs} />
\`\`\`

### 2. Enhanced Contact Form

The contact form is automatically enhanced with:
- ✅ Form validation
- ✅ Real-time error clearing
- ✅ Success/error messages
- ✅ Character counter
- ✅ Loading state

**Usage:**
\`\`\`tsx
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return <Contact />
}
\`\`\`

### 3. Better Typography in Articles

The knowledge base now has beautiful typography:
- Larger, clearer headings
- Better spacing between sections
- Styled code blocks
- Professional typography hierarchy

**No changes needed** - it works automatically on `/knowledge` pages!

## 🎯 Common Tasks

### Add FAQ Section to Article
\`\`\`tsx
import { CollapsibleSections } from "@/components/collapsible-section"

export default function Article() {
  const faqs = [
    { title: "What is this?", content: "Explanation here" },
    { title: "How do I use it?", content: "Instructions here" },
  ]

  return (
    <article>
      <h1>My Article</h1>
      <p>Article content...</p>
      
      <h2>FAQ</h2>
      <CollapsibleSections sections={faqs} />
    </article>
  )
}
\`\`\`

### Add Accordion to Features Page
\`\`\`tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function Features() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="feature-1">
        <AccordionTrigger>Feature 1</AccordionTrigger>
        <AccordionContent>Description of feature 1</AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="feature-2">
        <AccordionTrigger>Feature 2</AccordionTrigger>
        <AccordionContent>Description of feature 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
\`\`\`

### Integrate Contact Form
\`\`\`tsx
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Contact />
    </div>
  )
}
\`\`\`

## 🎨 Customization

### Style the Accordion Trigger
\`\`\`tsx
<AccordionTrigger className="text-lg font-bold text-primary">
  Custom Styled
</AccordionTrigger>
\`\`\`

### Style the Content
\`\`\`tsx
<AccordionContent className="bg-blue-500/10 p-4">
  Custom styled content
</AccordionContent>
\`\`\`

### Default Open State
\`\`\`tsx
<Accordion type="single" collapsible defaultValue="item-1">
  {/* item-1 opens by default */}
</Accordion>
\`\`\`

## ⌨️ Keyboard Navigation

All interactive elements support:
- **Tab** - Move focus
- **Enter/Space** - Activate/Toggle
- **Arrow Keys** - Navigate options

Users can use the entire site with just the keyboard!

## 📱 Mobile Support

Everything is responsive:
- Works on phones (375px+)
- Touch-friendly buttons
- Proper spacing on small screens
- No horizontal scrolling

## ♿ Accessibility

All components are:
- ✅ Keyboard accessible
- ✅ Screen reader friendly
- ✅ High contrast
- ✅ WCAG AA compliant

## 🐛 Common Issues

### "Component not found"
Make sure the import path is correct:
\`\`\`tsx
// ✅ Correct
import { CollapsibleSection } from "@/components/collapsible-section"

// ❌ Wrong
import { CollapsibleSection } from "@/collapsible-section"
\`\`\`

### "Styles not applying"
Make sure you're using Tailwind classes and the component is inside your app.

### "Animations not working"
Check that `globals.css` includes accordion animations (it should by default).

## 📖 Full Documentation

For more details, see:
- **UI_IMPROVEMENTS.md** - Comprehensive explanation
- **COLLAPSIBLE_GUIDE.md** - Component guide
- **CODE_EXAMPLES.md** - More code samples
- **IMPLEMENTATION_COMPLETE.md** - Full summary

## ✅ Testing

Quick test checklist:
- [ ] Click accordion headers to expand/collapse
- [ ] Use Tab key to navigate
- [ ] Press Enter to toggle
- [ ] Submit contact form
- [ ] Check validation errors
- [ ] Test on mobile

## 🎯 Next Steps

1. **Review** the new documentation files
2. **Test** the components in your browser
3. **Integrate** into your pages
4. **Customize** styling as needed
5. **Deploy** when ready

## 💡 Tips

1. Start with `CollapsibleSections` for quick setup
2. Use `Accordion` component for more control
3. Combine with existing components
4. Test keyboard navigation
5. Check mobile responsiveness

## 🤝 Need Help?

1. Check the documentation files
2. Review code examples
3. Test in browser
4. Check console for errors
5. Verify imports are correct

---

**You're all set!** The new components are production-ready and fully accessible. Start using them today! 🎉
