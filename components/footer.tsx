import Link from "next/link"
import { Briefcase } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          <p className="text-sm text-muted-foreground">© 2025 InternHub. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6" aria-label="Footer Navigation">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground focus-ring rounded-md px-2 py-1"
          >
            About
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground hover:text-foreground focus-ring rounded-md px-2 py-1"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground hover:text-foreground focus-ring rounded-md px-2 py-1"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground focus-ring rounded-md px-2 py-1"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}

