import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Calendar, Search, Filter } from "lucide-react"

export default function InternshipsPage() {
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
    {
      id: 4,
      title: "Graphic Design Intern",
      company: "CreativeStudio",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹12,000/month",
      deadline: "18 May 2025",
      tags: ["Photoshop", "Illustrator", "UI Design"],
    },
    {
      id: 5,
      title: "Content Writing Intern",
      company: "ContentHub",
      location: "Remote",
      duration: "2 months",
      stipend: "₹8,000/month",
      deadline: "22 May 2025",
      tags: ["Writing", "Editing", "SEO"],
    },
    {
      id: 6,
      title: "Backend Developer Intern",
      company: "ServerTech",
      location: "Hyderabad",
      duration: "6 months",
      stipend: "₹18,000/month",
      deadline: "30 May 2025",
      tags: ["Node.js", "MongoDB", "API"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Find Internships</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by keywords, title, company..." className="w-full pl-8" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="content">Content</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Duration</h3>
                <div className="space-y-2">
                  {["1-2 months", "3-4 months", "5-6 months", "6+ months"].map((duration) => (
                    <div key={duration} className="flex items-center space-x-2">
                      <Checkbox id={`duration-${duration}`} />
                      <Label htmlFor={`duration-${duration}`}>{duration}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Stipend</h3>
                <div className="space-y-2">
                  {["Unpaid", "5-10k", "10-15k", "15-20k", "20k+"].map((stipend) => (
                    <div key={stipend} className="flex items-center space-x-2">
                      <Checkbox id={`stipend-${stipend}`} />
                      <Label htmlFor={`stipend-${stipend}`}>{stipend}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Work Type</h3>
                <div className="space-y-2">
                  {["Remote", "In-office", "Hybrid"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} />
                      <Label htmlFor={`type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Showing {internships.length} internships</p>
                <Select defaultValue="latest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="stipend-high">Highest Stipend</SelectItem>
                    <SelectItem value="stipend-low">Lowest Stipend</SelectItem>
                    <SelectItem value="duration-short">Shortest Duration</SelectItem>
                    <SelectItem value="duration-long">Longest Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6">
                {internships.map((internship) => (
                  <Card key={internship.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{internship.title}</CardTitle>
                          <p className="font-medium">{internship.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{internship.stipend}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
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
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Apply by: {internship.deadline}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {internship.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/internships/${internship.id}`} className="w-full">
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

