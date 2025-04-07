import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardNav } from "@/components/dashboard-nav"
import { Footer } from "@/components/footer"
import { Briefcase, Bell, Award, Trophy, Target, Zap } from "lucide-react"
import { AchievementSystem } from "@/components/achievement-system"
import { Leaderboard } from "@/components/leaderboard"
import { SkillAssessment } from "@/components/skill-assessment"
import { ThemeToggle } from "@/components/theme-toggle"
import { SkipToContent } from "@/components/skip-to-content"

export default function StudentGamificationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipToContent />
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <span className="font-bold text-xl">InternHub</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] px-4 py-6 md:px-6">
        <aside className="hidden md:block">
          <DashboardNav />
        </aside>
        <main id="main-content" className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Learning & Achievements</h1>
            <p className="text-muted-foreground">Track your progress and compete with peers</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Level</CardTitle>
                <Zap className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Level 5</div>
                <p className="text-xs text-muted-foreground">Intermediate Explorer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">XP Points</CardTitle>
                <Award className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,340</div>
                <p className="text-xs text-muted-foreground">Next level: 3,000 XP</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rank</CardTitle>
                <Trophy className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#42</div>
                <p className="text-xs text-muted-foreground">Top 10% of users</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Badges</CardTitle>
                <Target className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 badges to unlock</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="achievements">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="assessments">Skill Assessments</TabsTrigger>
            </TabsList>
            <TabsContent value="achievements" className="space-y-4 mt-6">
              <AchievementSystem />
            </TabsContent>
            <TabsContent value="leaderboard" className="space-y-4 mt-6">
              <Leaderboard />
            </TabsContent>
            <TabsContent value="assessments" className="space-y-4 mt-6">
              <SkillAssessment />
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  )
}

