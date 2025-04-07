"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InternshipCard } from "@/components/internship-card"
import { motion } from "framer-motion"

export function FeaturedInternships() {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "Remote",
      duration: "3 months",
      stipend: "₹15,000/month",
      deadline: "15 May 2025",
      tags: ["React", "JavaScript", "UI/UX"],
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "BrandMasters",
      location: "Mumbai",
      duration: "6 months",
      stipend: "₹10,000/month",
      deadline: "20 May 2025",
      tags: ["Social Media", "Content", "Analytics"],
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataMinds",
      location: "Bangalore",
      duration: "4 months",
      stipend: "₹20,000/month",
      deadline: "25 May 2025",
      tags: ["Python", "ML", "Data Analysis"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Internships</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore the latest internship opportunities from top companies
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            {internships.map((internship, index) => (
              <InternshipCard key={internship.id} internship={internship} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/internships">
              <Button variant="outline" className="mt-4 group">
                View All Internships
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

