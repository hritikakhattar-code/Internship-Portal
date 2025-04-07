"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"
import { motion } from "framer-motion"

interface LeaderboardUser {
  id: number
  name: string
  avatar?: string
  points: number
  rank: number
  badges: string[]
  college: string
}

export function Leaderboard() {
  const [period, setPeriod] = useState<"weekly" | "monthly" | "alltime">("weekly")

  const leaderboardData: Record<string, LeaderboardUser[]> = {
    weekly: [
      {
        id: 1,
        name: "Rahul Sharma",
        avatar: "/placeholder-user.jpg",
        points: 850,
        rank: 1,
        badges: ["Top Applicant", "Quick Learner"],
        college: "Delhi Technical University",
      },
      {
        id: 2,
        name: "Priya Singh",
        avatar: "/placeholder-user.jpg",
        points: 720,
        rank: 2,
        badges: ["Profile Star"],
        college: "IIT Mumbai",
      },
      {
        id: 3,
        name: "Amit Kumar",
        avatar: "/placeholder-user.jpg",
        points: 690,
        rank: 3,
        badges: ["Skill Master"],
        college: "BITS Pilani",
      },
      {
        id: 4,
        name: "Neha Gupta",
        avatar: "/placeholder-user.jpg",
        points: 650,
        rank: 4,
        badges: [],
        college: "VIT Vellore",
      },
      {
        id: 5,
        name: "Vikram Patel",
        avatar: "/placeholder-user.jpg",
        points: 610,
        rank: 5,
        badges: ["Quick Learner"],
        college: "NIT Trichy",
      },
    ],
    monthly: [
      {
        id: 2,
        name: "Priya Singh",
        avatar: "/placeholder-user.jpg",
        points: 2340,
        rank: 1,
        badges: ["Profile Star", "Consistent Performer"],
        college: "IIT Mumbai",
      },
      {
        id: 1,
        name: "Rahul Sharma",
        avatar: "/placeholder-user.jpg",
        points: 2100,
        rank: 2,
        badges: ["Top Applicant", "Quick Learner"],
        college: "Delhi Technical University",
      },
      {
        id: 5,
        name: "Vikram Patel",
        avatar: "/placeholder-user.jpg",
        points: 1950,
        rank: 3,
        badges: ["Quick Learner"],
        college: "NIT Trichy",
      },
      {
        id: 3,
        name: "Amit Kumar",
        avatar: "/placeholder-user.jpg",
        points: 1820,
        rank: 4,
        badges: ["Skill Master"],
        college: "BITS Pilani",
      },
      {
        id: 4,
        name: "Neha Gupta",
        avatar: "/placeholder-user.jpg",
        points: 1760,
        rank: 5,
        badges: [],
        college: "VIT Vellore",
      },
    ],
    alltime: [
      {
        id: 6,
        name: "Ananya Desai",
        avatar: "/placeholder-user.jpg",
        points: 12500,
        rank: 1,
        badges: ["Legend", "All Star", "Placement King"],
        college: "IIT Delhi",
      },
      {
        id: 7,
        name: "Rohan Mehta",
        avatar: "/placeholder-user.jpg",
        points: 10200,
        rank: 2,
        badges: ["Veteran", "Skill Guru"],
        college: "IIIT Hyderabad",
      },
      {
        id: 2,
        name: "Priya Singh",
        avatar: "/placeholder-user.jpg",
        points: 9800,
        rank: 3,
        badges: ["Profile Star", "Consistent Performer"],
        college: "IIT Mumbai",
      },
      {
        id: 1,
        name: "Rahul Sharma",
        avatar: "/placeholder-user.jpg",
        points: 8900,
        rank: 4,
        badges: ["Top Applicant", "Quick Learner"],
        college: "Delhi Technical University",
      },
      {
        id: 8,
        name: "Kiran Reddy",
        avatar: "/placeholder-user.jpg",
        points: 8500,
        rank: 5,
        badges: ["Rising Star"],
        college: "IIIT Bangalore",
      },
    ],
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />
      default:
        return <span className="font-bold">{rank}</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>See who's leading the pack this week</CardDescription>
        <Tabs defaultValue="weekly" className="mt-2" onValueChange={(value) => setPeriod(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="alltime">All Time</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData[period].map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex items-center gap-4 p-3 rounded-lg ${user.rank <= 3 ? "bg-muted/50" : ""}`}
            >
              <div className="flex items-center justify-center w-8 h-8">{getRankIcon(user.rank)}</div>
              <Avatar className="h-10 w-10 border-2 border-muted">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.college}</p>
                {user.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.badges.map((badge) => (
                      <Badge key={badge} variant="outline" className="text-xs py-0">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="font-bold">{user.points}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

