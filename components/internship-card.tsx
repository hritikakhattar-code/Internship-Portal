"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface InternshipCardProps {
  internship: {
    id: number
    title: string
    company: string
    location: string
    duration: string
    stipend: string
    deadline: string
    tags: string[]
  }
  index: number
}

export function InternshipCard({ internship, index }: InternshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="card-hover h-full flex flex-col">
        <CardHeader>
          <CardTitle>{internship.title}</CardTitle>
          <p className="font-medium">{internship.company}</p>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{internship.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{internship.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Stipend:</span>
              <span>{internship.stipend}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Apply by: {internship.deadline}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {internship.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="transition-all hover:bg-secondary-foreground hover:text-secondary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href={`/internships/${internship.id}`} className="w-full">
            <Button className="w-full group">
              View Details
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
        </CardFooter>
      </Card>
    </motion.div>
  )
}

