import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Download,
  Upload,
  Settings,
  ShoppingCart,
  Users,
  ChefHat,
  CreditCard,
  Truck,
  Bell,
  BarChart3,
  FileText,
  Terminal,
  FolderOpen,
  Database,
  Globe,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Info,
  Lightbulb,
  Clock,
  MapPin,
  Receipt,
  Eye,
  Edit,
  Plus,
  Search,
  Filter,
  Printer,
  Volume2,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation | DragonScale - Restaurant Ordering Platform",
  description:
    "Complete guide to setting up and using DragonScale restaurant ordering platform. Easy-to-follow instructions for restaurant owners and developers.",
  openGraph: {
    title: "DragonScale Documentation",
    description: "Complete setup and usage guide for DragonScale restaurant ordering platform.",
  },
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/dragonscale"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to DragonScale
          </Link>
          <div className="flex items-center gap-4">
            <Badge className="bg-primary/10 text-primary">Documentation</Badge>
            <Badge variant="outline">v1.0</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            DragonScale Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to set up and run your restaurant ordering platform. Written for both restaurant owners and developers.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-card/30 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#getting-started" className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <Download className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm">Getting Started</span>
            </a>
            <a href="#for-owners" className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <ChefHat className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm">For Restaurant Owners</span>
            </a>
            <a href="#for-developers" className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm">For Developers</span>
            </a>
            <a href="#faq" className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <Info className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm">FAQ</span>
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-16 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Download className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Getting Started</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-primary" />
                  Restaurant Owners
                </CardTitle>
                <CardDescription>
                  No technical knowledge required. Get your online ordering up and running quickly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    Contact us for professional setup, or have your IT person follow the developer guide
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    Access your admin panel at yoursite.com/admin
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    Add your menu items, set prices, and configure delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    Share your ordering link with customers and start receiving orders!
                  </li>
                </ol>
                <Link href="/contact" className="block mt-6">
                  <Button className="w-full">Request Professional Setup</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  Developers
                </CardTitle>
                <CardDescription>
                  Self-host on any PHP 8+ server. Deploy in under 10 minutes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    Contact us to get started
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    Upload files to your web host
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    Edit config/database.php with your settings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    Visit /admin to create your first admin account
                  </li>
                </ol>
                <Link href="/contact">
                  <Button variant="outline" className="w-full gap-2">
                    <Terminal className="h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Requirements Box */}
          <div className="bg-card/50 border border-border rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              System Requirements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Server</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />PHP 8.0 or higher</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />PDO SQLite extension</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />50MB disk space</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Compatible Hosts</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />cPanel / Plesk</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />DigitalOcean / Vultr</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-green-500" />Any VPS with Apache/Nginx</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Not Required</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2"><Info className="h-3 w-3 text-blue-500" />No MySQL/PostgreSQL</li>
                  <li className="flex items-center gap-2"><Info className="h-3 w-3 text-blue-500" />No Composer</li>
                  <li className="flex items-center gap-2"><Info className="h-3 w-3 text-blue-500" />No Node.js/NPM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Restaurant Owners */}
      <section id="for-owners" className="py-16 px-6 bg-gradient-to-b from-card/30 to-transparent scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ChefHat className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">For Restaurant Owners</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            This section explains how to use DragonScale day-to-day. No technical knowledge required — just simple step-by-step guides with visuals.
          </p>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border">
                Managing Orders
              </TabsTrigger>
              <TabsTrigger value="menu" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border">
                Menu Management
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Your Admin Dashboard</CardTitle>
                  <CardDescription>The command center for your restaurant operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-card to-muted rounded-lg border border-border overflow-hidden">
                    <Image
                      src="/dragonscale/screenshots/admin-dashboard.png"
                      alt="Dashboard Overview"
                      width={1280}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Eye className="h-4 w-4 text-primary" />
                        What You See
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span><strong>Today's Orders</strong> — See all orders at a glance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span><strong>Revenue Summary</strong> — Track daily, weekly, monthly earnings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span><strong>Popular Items</strong> — Know what's selling best</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                          <span><strong>Pending Orders</strong> — Orders needing your attention</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        Notifications
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Volume2 className="h-4 w-4 text-blue-500 mt-0.5" />
                          <span><strong>Sound Alerts</strong> — Hear when new orders arrive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Bell className="h-4 w-4 text-blue-500 mt-0.5" />
                          <span><strong>Browser Notifications</strong> — Get alerted even in other tabs</span>
                        </li>
                      </ul>
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-sm">
                        <p className="text-muted-foreground">
                          <Lightbulb className="h-4 w-4 text-primary inline mr-1" />
                          <strong>Tip:</strong> Keep the dashboard open on a tablet in your kitchen for real-time order updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Managing Orders</CardTitle>
                  <CardDescription>How to view, update, and fulfill customer orders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Order Status Flow */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Order Status Flow</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">Pending</Badge>
                      <span className="text-muted-foreground">→</span>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/50">Confirmed</Badge>
                      <span className="text-muted-foreground">→</span>
                      <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/50">Preparing</Badge>
                      <span className="text-muted-foreground">→</span>
                      <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/50">Ready / Out for Delivery</Badge>
                      <span className="text-muted-foreground">→</span>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/50">Delivered</Badge>
                    </div>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-card to-muted rounded-lg border border-border overflow-hidden">
                    <Image
                      src="/dragonscale/screenshots/checkout.png"
                      alt="Order Management"
                      width={1280}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Search className="h-4 w-4 text-primary" />
                        Finding Orders
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Search by order number, customer name, or phone</li>
                        <li>• Filter by status (Pending, Preparing, etc.)</li>
                        <li>• Filter by order type (Delivery, Pickup, Dine-in)</li>
                        <li>• View by date range</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Edit className="h-4 w-4 text-primary" />
                        Updating Orders
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Click on an order to see full details</li>
                        <li>• Use the status buttons to update progress</li>
                        <li>• Print kitchen tickets with one click</li>
                        <li>• Add notes for special instructions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Printer className="h-4 w-4 text-primary" />
                      Printing Kitchen Tickets
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Click the print icon on any order to generate a kitchen ticket. The ticket shows all items, special requests, customer details, and order time. Works with any receipt printer or regular printer.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="menu">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Menu Management</CardTitle>
                  <CardDescription>Add, edit, and organize your menu items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="aspect-video bg-gradient-to-br from-card to-muted rounded-lg border border-border overflow-hidden">
                    <Image
                      src="/dragonscale/screenshots/menu-browse.png"
                      alt="Menu Editor"
                      width={1280}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Plus className="h-4 w-4 text-primary" />
                        Adding Items
                      </h4>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Go to Menu in admin panel</li>
                        <li>Click "Add New Item"</li>
                        <li>Enter name, description, price</li>
                        <li>Select a category</li>
                        <li>Upload a photo (optional)</li>
                        <li>Save your item</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FolderOpen className="h-4 w-4 text-primary" />
                        Categories
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Create categories like "Appetizers", "Main Dishes", "Beverages"</li>
                        <li>• Drag to reorder categories</li>
                        <li>• Hide categories temporarily</li>
                        <li>• Set display order for each item</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Availability
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Mark items as "Out of Stock"</li>
                        <li>• Set items as "Featured"</li>
                        <li>• Create special offers with discounted prices</li>
                        <li>• Schedule items for specific times</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Pro Tips for Menu Management
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use high-quality photos — items with photos sell 30% more</li>
                      <li>• Keep descriptions short and appetizing</li>
                      <li>• Put your best sellers at the top of each category</li>
                      <li>• Update prices instantly — changes appear immediately for customers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Settings & Configuration</CardTitle>
                  <CardDescription>Customize your restaurant's online ordering experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        Business Settings
                      </h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span><strong>Business Hours</strong> — Set opening and closing times for each day</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span><strong>Address & Contact</strong> — Your restaurant's location and phone number</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ShoppingCart className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span><strong>Minimum Order</strong> — Set minimum order amount for delivery</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        Delivery Settings
                      </h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span><strong>Delivery Zones</strong> — Define areas you deliver to</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span><strong>Delivery Fee</strong> — Set flat or distance-based fees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span><strong>Estimated Time</strong> — Set average delivery time</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      Payment Options
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-card border border-border rounded-lg">
                        <p className="font-medium text-foreground mb-1">Cash on Delivery</p>
                        <p className="text-xs text-muted-foreground">Customer pays when order arrives</p>
                      </div>
                      <div className="p-4 bg-card border border-border rounded-lg">
                        <p className="font-medium text-foreground mb-1">Bank Transfer</p>
                        <p className="text-xs text-muted-foreground">Display your bank details</p>
                      </div>
                      <div className="p-4 bg-card border border-border rounded-lg">
                        <p className="font-medium text-foreground mb-1">Card Payment</p>
                        <p className="text-xs text-muted-foreground">Integrate payment gateways</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* For Developers */}
      <section id="for-developers" className="py-16 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Terminal className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">For Developers</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Technical documentation for deploying, customizing, and extending DragonScale.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="installation" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-primary" />
                  <span>Installation Guide</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">1. Clone the Repository</h4>
                    <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto">
                      <code className="text-muted-foreground">Contact Ghost Protocol for installation package</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">2. Upload to Your Server</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload all files to your web root (usually <code className="bg-muted px-1 rounded">public_html</code> or <code className="bg-muted px-1 rounded">www</code>).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">3. Configure Database</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Edit <code className="bg-muted px-1 rounded">config/database.php</code> with your settings:
                    </p>
                    <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto">
<code className="text-muted-foreground">{`<?php
// SQLite database path
define('DB_PATH', __DIR__ . '/../data/restaurant.db');

// Restaurant configuration
define('RESTAURANT_NAME', 'Your Restaurant');
define('RESTAURANT_PHONE', '+1234567890');
define('RESTAURANT_EMAIL', 'orders@yourrestaurant.com');`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">4. Set Permissions</h4>
                    <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto">
<code className="text-muted-foreground">{`chmod 755 data/
chmod 644 data/restaurant.db`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">5. Access Admin Panel</h4>
                    <p className="text-sm text-muted-foreground">
                      Visit <code className="bg-muted px-1 rounded">https://yourdomain.com/admin</code> to set up your admin account.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="structure" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <FolderOpen className="h-5 w-5 text-primary" />
                  <span>Project Structure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto">
<code className="text-muted-foreground">{`dragonscale/
├── admin/              # Admin panel pages
│   ├── dashboard.php   # Main dashboard
│   ├── orders.php      # Order management
│   ├── menu.php        # Menu editor
│   └── settings.php    # Restaurant settings
├── api/                # REST API endpoints
│   ├── orders.php      # Order CRUD operations
│   ├── menu.php        # Menu data endpoint
│   └── health.php      # Health check
├── assets/             # Frontend assets
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Static images
├── config/             # Configuration files
│   ├── database.php    # Database settings
│   └── install.sql     # Database schema
├── includes/           # PHP includes
│   ├── functions.php   # Helper functions
│   ├── security.php    # Security utilities
│   └── payment.php     # Payment integration
├── templates/          # Shared templates
│   ├── header.php      # Page header
│   └── footer.php      # Page footer
├── index.php           # Customer ordering page
├── checkout.php        # Checkout process
├── track.php           # Order tracking
└── confirmation.php    # Order confirmation`}</code>
                </pre>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="api" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>API Reference</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Get Menu</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-500/10 text-green-500">GET</Badge>
                      <code className="text-sm text-muted-foreground">/api/menu.php</code>
                    </div>
                    <p className="text-sm text-muted-foreground">Returns all menu categories and items.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Create Order</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500/10 text-blue-500">POST</Badge>
                      <code className="text-sm text-muted-foreground">/api/orders.php</code>
                    </div>
                    <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto mt-2">
<code className="text-muted-foreground">{`{
  "customer_name": "John Doe",
  "customer_phone": "+1234567890",
  "order_type": "delivery",
  "delivery_address": "123 Main St",
  "items": [
    { "id": 1, "quantity": 2, "special_instructions": "" }
  ],
  "payment_method": "cash"
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Get Order Status</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-500/10 text-green-500">GET</Badge>
                      <code className="text-sm text-muted-foreground">/api/orders.php?id=ORDER_ID</code>
                    </div>
                    <p className="text-sm text-muted-foreground">Returns order details and current status.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Customization</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Branding & Colors</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Edit CSS custom properties in <code className="bg-muted px-1 rounded">assets/css/main.css</code>:
                    </p>
                    <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto">
<code className="text-muted-foreground">{`:root {
  --color-primary: #D4AF37;      /* Gold - main accent */
  --color-dark: #1a1a1a;         /* Background */
  --color-cream: #F5F5DC;        /* Light text */
  --font-primary: 'Playfair Display', serif;
  --font-secondary: 'Lato', sans-serif;
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Adding Payment Gateways</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement your gateway in <code className="bg-muted px-1 rounded">includes/payment-gateways.php</code>. The system supports Stripe, PayHere, and custom webhooks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Multi-tenant Mode</h4>
                    <p className="text-sm text-muted-foreground">
                      For hosting multiple restaurants, enable multi-tenant configuration in <code className="bg-muted px-1 rounded">config/saas-config.php</code>.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security Features</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Built-in Protection</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" />CSRF token validation</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" />XSS prevention with output escaping</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" />SQL injection prevention (PDO prepared statements)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" />Rate limiting on API endpoints</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" />Security headers (CSP, X-Frame-Options, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Always use HTTPS in production</li>
                      <li>• Change default admin credentials</li>
                      <li>• Keep PHP and server software updated</li>
                      <li>• Set restrictive file permissions</li>
                      <li>• Enable firewall on your server</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-gradient-to-b from-card/30 to-transparent scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline text-left">
                How do I get DragonScale?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Contact Ghost Protocol for pricing and deployment options. We offer flexible solutions tailored to your restaurant's needs, including professional setup, customization, and ongoing support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline text-left">
                Do I need technical knowledge to use it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                To set it up initially, you'll need someone with basic web hosting knowledge (or you can contact us for professional setup). Once installed, the admin panel is designed for non-technical users — if you can use Facebook, you can manage your menu and orders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline text-left">
                What hosting do I need?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Any shared hosting with PHP 8.0+ works fine. DragonScale uses SQLite, so you don't need MySQL or PostgreSQL. Popular hosts like Hostinger, Bluehost, SiteGround, DigitalOcean, and Vultr all work. You'll need about 50MB of space.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline text-left">
                Can I accept online payments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! DragonScale supports cash on delivery out of the box, and you can integrate payment gateways like Stripe, PayHere, or any gateway with webhook support. The payment integration guide is included in the developer documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline text-left">
                Can I customize the design to match my brand?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. All styling is done with CSS custom properties, making it easy to change colors, fonts, and spacing. You can also modify the HTML templates for more extensive customization. The code is well-organized and documented.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline text-left">
                Is there a demo I can try?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We're currently deploying DragonScale for several restaurants. Contact us if you'd like to see a live demo or get a test environment set up for your evaluation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you want to set it up yourself or need professional help, we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <Terminal className="h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request Professional Setup
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
