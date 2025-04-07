"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Find Your Dream Internship
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover thousands of internships from top companies and startups. Kickstart your career today.
            </p>
          </motion.div>
          <motion.div
            className="w-full max-w-sm space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search internships..."
                  className="w-full bg-background pl-8 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search internships"
                />
              </div>
              <Button className="w-full mt-2" size="lg" type="submit">
                Find Internships
              </Button>
            </form>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/internships/tech">
              <Button variant="outline" className="transition-all hover:bg-primary hover:text-primary-foreground">
                Tech
              </Button>
            </Link>
            <Link href="/internships/marketing">
              <Button variant="outline" className="transition-all hover:bg-primary hover:text-primary-foreground">
                Marketing
              </Button>
            </Link>
            <Link href="/internships/design">
              <Button variant="outline" className="transition-all hover:bg-primary hover:text-primary-foreground">
                Design
              </Button>
            </Link>
            <Link href="/internships/business">
              <Button variant="outline" className="transition-all hover:bg-primary hover:text-primary-foreground">
                Business
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

