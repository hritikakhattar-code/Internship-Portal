import Link from "next/link"
import { Briefcase } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <MobileNav />
      <Link href="/" className="flex items-center space-x-2">
        <Briefcase className="h-6 w-6" />
        <span className="font-bold text-xl">InternHub</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/internships"
          className="text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md px-2 py-1"
        >
          Internships
        </Link>
        <Link
          href="/companies"
          className="text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md px-2 py-1"
        >
          Companies
        </Link>
        <Link
          href="/for-employers"
          className="text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md px-2 py-1"
        >
          For Employers
        </Link>
      </nav>
      <div className="hidden md:block ml-auto">
        <ThemeToggle />
      </div>
    </div>
  )
}

