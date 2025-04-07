"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

interface Assessment {
  id: string
  title: string
  description: string
  duration: string
  questions: number
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  completed: boolean
  score?: number
}

export function SkillAssessment() {
  const [assessments, setAssessments] = useState<Assessment[]>([
    {
      id: "react-basics",
      title: "React Fundamentals",
      description: "Test your knowledge of React core concepts",
      duration: "20 mins",
      questions: 15,
      difficulty: "Beginner",
      category: "Frontend",
      completed: true,
      score: 85,
    },
    {
      id: "javascript-advanced",
      title: "Advanced JavaScript",
      description: "Challenge yourself with advanced JS concepts",
      duration: "30 mins",
      questions: 20,
      difficulty: "Advanced",
      category: "Programming",
      completed: false,
    },
    {
      id: "data-structures",
      title: "Data Structures",
      description: "Test your knowledge of common data structures",
      duration: "25 mins",
      questions: 18,
      difficulty: "Intermediate",
      category: "Computer Science",
      completed: false,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Basics",
      description: "Assess your digital marketing knowledge",
      duration: "15 mins",
      questions: 12,
      difficulty: "Beginner",
      category: "Marketing",
      completed: false,
    },
  ])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessments.map((assessment, index) => (
          <motion.div
            key={assessment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="card-hover h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{assessment.title}</CardTitle>
                  <Badge className={getDifficultyColor(assessment.difficulty)}>{assessment.difficulty}</Badge>
                </div>
                <CardDescription>{assessment.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{assessment.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{assessment.questions} questions</span>
                  </div>
                </div>
                <Badge variant="outline" className="mb-4">
                  {assessment.category}
                </Badge>
                {assessment.completed && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Your Score</span>
                      <span className="font-medium">{assessment.score}%</span>
                    </div>
                    <Progress value={assessment.score} className="h-2" />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {assessment.completed ? (
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Certificate
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full">Start Assessment</Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

