"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Trophy, Zap, BookOpen, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  progress: number
  maxProgress: number
  completed: boolean
  level?: number
}

export function AchievementSystem() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "profile-complete",
      title: "Profile Master",
      description: "Complete your profile to 100%",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      progress: 80,
      maxProgress: 100,
      completed: false,
    },
    {
      id: "application-starter",
      title: "Application Starter",
      description: "Apply to your first 5 internships",
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      progress: 3,
      maxProgress: 5,
      completed: false,
    },
    {
      id: "skill-collector",
      title: "Skill Collector",
      description: "Add 10 skills to your profile",
      icon: <Star className="h-6 w-6 text-amber-500" />,
      progress: 7,
      maxProgress: 10,
      completed: false,
    },
    {
      id: "interview-ace",
      title: "Interview Ace",
      description: "Get shortlisted for 3 interviews",
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      progress: 1,
      maxProgress: 3,
      completed: false,
    },
    {
      id: "learning-path",
      title: "Learning Path",
      description: "Complete 5 skill assessments",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      progress: 2,
      maxProgress: 5,
      completed: false,
      level: 1,
    },
  ])

  const [showNotification, setShowNotification] = useState(false)
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null)

  const completeAchievement = (id: string) => {
    setAchievements((prev) =>
      prev.map((achievement) =>
        achievement.id === id ? { ...achievement, progress: achievement.maxProgress, completed: true } : achievement,
      ),
    )

    const achievement = achievements.find((a) => a.id === id)
    if (achievement) {
      setCurrentAchievement(achievement)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {showNotification && currentAchievement && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-primary-foreground text-primary rounded-full p-2">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold">Achievement Unlocked!</p>
                  <p>{currentAchievement.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className={`card-hover ${achievement.completed ? "border-primary" : ""}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  {achievement.icon}
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
                {achievement.level && (
                  <Badge variant="outline" className="ml-auto">
                    Level {achievement.level}
                  </Badge>
                )}
              </div>
              <CardDescription>{achievement.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>
                    {achievement.progress}/{achievement.maxProgress}
                  </span>
                </div>
                <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
                {!achievement.completed && (
                  <button
                    onClick={() => completeAchievement(achievement.id)}
                    className="text-xs text-primary hover:underline mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    Demo: Complete Achievement
                  </button>
                )}
                {achievement.completed && (
                  <div className="flex items-center gap-1 text-xs text-primary mt-2">
                    <CheckCircle className="h-3 w-3" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

