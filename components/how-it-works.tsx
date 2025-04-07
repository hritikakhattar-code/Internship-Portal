"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, Send, Award } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Search",
      description: "Browse through thousands of internships across various domains and locations.",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Apply",
      description: "Create your profile and apply to internships with just a few clicks.",
    },
    {
      icon: <Send className="h-10 w-10" />,
      title: "Interview",
      description: "Get shortlisted and attend interviews with companies.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Get Selected",
      description: "Receive offer letters and kickstart your career journey.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Simple steps to find and secure your dream internship
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background h-full card-hover">
                  <CardHeader className="pb-2">
                    <motion.div
                      className="flex justify-center mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.icon}
                    </motion.div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

