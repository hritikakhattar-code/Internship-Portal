import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { FeaturedInternships } from "@/components/featured-internships"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { SkipToContent } from "@/components/skip-to-content"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipToContent />
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/auth/login">
              <Button variant="ghost" className="hidden md:inline-flex">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="hidden md:inline-flex">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main id="main-content" className="flex-1">
        <HeroSection />
        <FeaturedInternships />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

