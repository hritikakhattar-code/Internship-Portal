import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardNav } from "@/components/dashboard-nav"
import { Footer } from "@/components/footer"
import { Briefcase, Clock, Calendar, MapPin, Bell, CheckCircle, XCircle, Clock3, FileText } from "lucide-react"

export default function StudentDashboardPage() {
  const applications = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "Remote",
      appliedDate: "28 Apr 2025",
      status: "Applied",
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "BrandMasters",
      location: "Mumbai",
      appliedDate: "25 Apr 2025",
      status: "Shortlisted",
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataMinds",
      location: "Bangalore",
      appliedDate: "20 Apr 2025",
      status: "Rejected",
    },
  ]

  const recommendedInternships = [
    {
      id: 4,
      title: "UI/UX Design Intern",
      company: "DesignStudio",
      location: "Remote",
      duration: "3 months",
      stipend: "₹12,000/month",
      deadline: "10 May 2025",
    },
    {
      id: 5,
      title: "Web Developer Intern",
      company: "WebTech",
      location: "Delhi",
      duration: "6 months",
      stipend: "₹15,000/month",
      deadline: "15 May 2025",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Application Shortlisted",
      description: "Your application for Marketing Intern at BrandMasters has been shortlisted.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "New Message",
      description: "You have received a message from BrandMasters regarding your application.",
      time: "1 day ago",
    },
    {
      id: 3,
      title: "Application Rejected",
      description: "Your application for Data Science Intern at DataMinds has been rejected.",
      time: "3 days ago",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <span className="font-bold text-xl">InternHub</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
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
        <main className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John!</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shortlisted</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rejected</CardTitle>
                <XCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="applications">
            <TabsList>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="applications" className="space-y-4">
              <h2 className="text-xl font-semibold mt-6">Recent Applications</h2>
              <div className="grid gap-4">
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{application.title}</h3>
                          <p className="text-sm">{application.company}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{application.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Applied on: {application.appliedDate}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge
                            variant={
                              application.status === "Shortlisted"
                                ? "success"
                                : application.status === "Rejected"
                                  ? "destructive"
                                  : "default"
                            }
                          >
                            {application.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">View All Applications</Button>
              </div>
            </TabsContent>
            <TabsContent value="recommended" className="space-y-4">
              <h2 className="text-xl font-semibold mt-6">Recommended for You</h2>
              <div className="grid gap-4">
                {recommendedInternships.map((internship) => (
                  <Card key={internship.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{internship.title}</h3>
                          <p className="text-sm">{internship.company}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{internship.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Apply by: {internship.deadline}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="font-semibold">{internship.stipend}</p>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">View More Recommendations</Button>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <h2 className="text-xl font-semibold mt-6">Recent Notifications</h2>
              <div className="grid gap-4">
                {notifications.map((notification) => (
                  <Card key={notification.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <p className="text-sm">{notification.description}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">View All Notifications</Button>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  )
}

