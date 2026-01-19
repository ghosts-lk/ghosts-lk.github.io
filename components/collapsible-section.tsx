"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface CollapsibleSectionProps {
  title: string
  content: string
  defaultOpen?: boolean
}

export function CollapsibleSection({ title, content, defaultOpen = false }: CollapsibleSectionProps) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : ""} className="w-full">
      <AccordionItem value="item-1" className="border-b border-border/50">
        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

interface CollapsibleSectionsProps {
  sections: CollapsibleSectionProps[]
}

export function CollapsibleSections({ sections }: CollapsibleSectionsProps) {
  return (
    <div className="space-y-2 my-8">
      <Accordion type="single" collapsible defaultValue="" className="w-full space-y-2">
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-0">
            <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed px-4">
              {section.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
