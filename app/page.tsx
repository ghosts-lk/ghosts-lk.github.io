import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Blog } from "@/components/blog"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"

export const metadata = {
  title: "Ghost Protocol | IT Solutions & Web Development",
  description:
    "Explore Ghost Protocol's innovative IT solutions, web development, creative design, and digital services from Sri Lanka.",
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Portfolio />
      <Stats />
      <Blog />
      <Contact />
    </div>
  )
}
