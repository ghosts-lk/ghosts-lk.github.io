import type { Metadata } from 'next'
import { BrandARViewer } from '@/components/ar/BrandARViewer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Zap, Eye, Smartphone, UtensilsCrossed, ShoppingBag, Sparkles, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AR Experiences | Ghost Protocol',
  description:
    'Explore cutting-edge Augmented Reality solutions. From interactive product menus to immersive brand experiences powered by WebXR.',
  openGraph: {
    title: 'AR Experiences | Ghost Protocol',
    description: 'Next-generation AR solutions for your business',
    type: 'website',
  },
}

export default function ARPage() {
  const arUseCases = [
    {
      title: 'Restaurant & Hospitality',
      description: 'Interactive AR menus that let customers visualize dishes in 3D before ordering',
      features: ['3D Product Display', 'Real-time Pricing', 'Nutritional Info'],
      icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Retail & E-commerce',
      description: 'Virtual try-ons and product visualization in customer space',
      features: ['Virtual Try-on', 'Size Preview', 'Color Variants'],
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Brand Experience',
      description: 'Immersive brand interactions and marketing campaigns',
      features: ['Brand Storytelling', 'Interactive Elements', 'Social Sharing'],
      icon: <Sparkles className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Real Estate',
      description: 'Virtual property tours and space visualization',
      features: ['360° Views', 'Furniture Placement', 'Layout Design'],
      icon: <Home className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-20 px-6 border-b border-border/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/40 hover:border-primary/60 transition-all mb-6">
              <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">AR Innovation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-[1.1] text-balance">
              Augmented Reality
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                for Sri Lanka
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl font-medium">
              Be the first in your industry to offer AR experiences. We bring immersive technology to businesses in
              Sri Lanka, transforming how customers interact with products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
              <Zap className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Web-Based</p>
                <p className="text-sm text-muted-foreground">No app downloads needed</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
              <Eye className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Immersive</p>
                <p className="text-sm text-muted-foreground">Full WebXR support</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
              <Smartphone className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Mobile Ready</p>
                <p className="text-sm text-muted-foreground">Works on modern devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AR Experience */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Ghost Protocol AR Experience</h2>
          <p className="text-muted-foreground mb-12">View our logo in immersive 3D using your device's camera</p>

          <Card className="border-border/50 hover:border-primary/30 transition-all bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground">Ghost Protocol Brand in 3D</CardTitle>
              <CardDescription>
                Interactive 3D visualization of the Ghost Protocol brand. Compatible with devices supporting WebXR.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BrandARViewer />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-foreground">AR Use Cases for Your Business</h2>
          <p className="text-muted-foreground mb-12">Proven applications across multiple industries</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arUseCases.map((useCase, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/30 transition-all bg-background/50 backdrop-blur-sm hover:bg-background/60">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                    {useCase.icon}
                  </div>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-foreground">How It Works</h2>
          <p className="text-muted-foreground mb-12">Our streamlined AR development process</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Custom Design',
                description: 'We design 3D models tailored to your products or brand',
              },
              {
                step: '2',
                title: 'Integration',
                description: 'Seamlessly integrate AR into your website or app',
              },
              {
                step: '3',
                title: 'Launch',
                description: 'Deploy to your customers with no download required',
              },
              {
                step: '4',
                title: 'Analytics',
                description: 'Track engagement and optimize based on user behavior',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent -z-10" />
                )}
                <div className="border border-border/50 hover:border-primary/30 rounded-lg p-6 text-center bg-background/50 backdrop-blur-sm hover:bg-background/60 transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center font-bold text-background mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Ready to Transform Your Business with AR?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be ahead of the curve. Most businesses in Sri Lanka haven't explored AR yet. This is your opportunity to
            stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Get Started with AR
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary/30 hover:bg-primary/5 text-foreground rounded-lg font-semibold transition-all hover:border-primary/60"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
