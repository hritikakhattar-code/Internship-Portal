import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EmployerNav } from "@/components/employer-nav"
import { Footer } from "@/components/footer"
import { Briefcase, Users, Clock, Calendar, Bell, CheckCircle, Plus, Building } from "lucide-react"

export default function EmployerDashboardPage() {
  const postedInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      location: "Remote",
      duration: "3 months",
      postedDate: "20 Apr 2025",
      applications: 24,
      status: "Active",
    },
    {
      id: 2,
      title: "Marketing Intern",
      location: "Mumbai",
      duration: "6 months",
      postedDate: "15 Apr 2025",
      applications: 18,
      status: "Active",
    },
    {
      id: 3,
      title: "Content Writer Intern",
      location: "Remote",
      duration: "2 months",
      postedDate: "10 Apr 2025",
      applications: 12,
      status: "Closed",
    },
  ]

  const recentApplications = [
    {
      id: 1,
      name: "John Doe",
      position: "Frontend Developer Intern",
      education: "B.Tech Computer Science",
      appliedDate: "28 Apr 2025",
      status: "New",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Marketing Intern",
      education: "BBA Marketing",
      appliedDate: "27 Apr 2025",
      status: "Shortlisted",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Frontend Developer Intern",
      education: "B.Sc Computer Science",
      appliedDate: "26 Apr 2025",
      status: "Rejected",
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
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] px-4 py-6 md:px-6">
        <aside className="hidden md:block">
          <EmployerNav />
        </aside>
        <main className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Employer Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, TechCorp!</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Internships</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">54</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shortlisted</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hired</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Posted Internships</h2>
            <Link href="/dashboard/employer/post-internship">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Post New Internship
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {postedInternships.map((internship) => (
              <Card key={internship.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{internship.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Posted on: {internship.postedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{internship.applications} Applications</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={internship.status === "Active" ? "default" : "secondary"}>
                        {internship.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Applications
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-6">Recent Applications</h2>
          <div className="grid gap-4">
            {recentApplications.map((application) => (
              <Card key={application.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{application.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{application.name}</h3>
                        <p className="text-sm">{application.position}</p>
                        <p className="text-sm text-muted-foreground">{application.education}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Applied on: {application.appliedDate}</span>
                        </div>
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
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button size="sm">Review</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">View All Applications</Button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

