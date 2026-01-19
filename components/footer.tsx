import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services" },
    { name: "App Development", href: "/services" },
    { name: "Business Software", href: "/services" },
    { name: "IT Support", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Knowledge Base", href: "/knowledge" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Web Development Guide", href: "/knowledge/category/web-development" },
    { name: "Security Articles", href: "/knowledge/category/security" },
    { name: "Business Strategy", href: "/knowledge/category/business-strategy" },
    { name: "All Articles", href: "/knowledge/all" },
  ],
}

export function Footer() {
  return (
    <footer className="py-20 bg-gradient-to-b from-background via-background to-card/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <Image src="/images/gp.jpg" alt="Ghost Protocol" width={180} height={60} className="h-16 w-auto group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6 font-medium">
              Premium web development and IT solutions from Colombo, Sri Lanka. We craft websites, applications, and business
              software that drive results.
            </p>
            <div className="text-sm space-y-2">
              <p>
                <a href="mailto:ghosts.lk@proton.me" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  ghosts.lk@proton.me
                </a>
              </p>
              <p>
                <a href="tel:+94771062770" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  +94 77 106 2770
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ghost Protocol. All rights reserved. Colombo, Sri Lanka.
          </p>
          <p className="text-xs text-muted-foreground">Crafted with Next.js, TypeScript, and open-source excellence.</p>
        </div>
      </div>
    </footer>
  )
}
