import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Calendar, Building, Award, CheckCircle } from "lucide-react"

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  const internship = {
    id: params.id,
    title: "Frontend Developer Intern",
    company: "TechCorp",
    companyDescription:
      "TechCorp is a leading technology company specializing in web and mobile application development.",
    location: "Remote",
    duration: "3 months",
    stipend: "₹15,000/month",
    deadline: "15 May 2025",
    startDate: "1 June 2025",
    tags: ["React", "JavaScript", "UI/UX"],
    about:
      "We are looking for a passionate Frontend Developer Intern to join our team. The ideal candidate should have a strong interest in web development and be eager to learn and grow in a fast-paced environment.",
    responsibilities: [
      "Develop and maintain responsive web applications",
      "Collaborate with the design team to implement UI/UX designs",
      "Write clean, efficient, and reusable code",
      "Test and debug applications",
      "Stay updated with the latest frontend technologies",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with React.js is a plus",
      "Good problem-solving skills",
      "Ability to work in a team",
    ],
    perks: [
      "Flexible working hours",
      "Certificate of completion",
      "Letter of recommendation",
      "Possibility of pre-placement offer",
      "Mentorship from industry experts",
    ],
  }

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
          <div className="mb-6">
            <Link href="/internships" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Internships
            </Link>
            <div className="grid md:grid-cols-[1fr_300px] gap-6">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">{internship.title}</h1>
                  <p className="text-xl">{internship.company}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Location</span>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Duration</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{internship.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Start Date</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{internship.startDate}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Stipend</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">About the Internship</h2>
                  <p>{internship.about}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    {internship.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    {internship.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Perks</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {internship.perks.map((perk, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">About {internship.company}</h2>
                  <p>{internship.companyDescription}</p>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Apply Now</CardTitle>
                    <CardDescription>Application deadline: {internship.deadline}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" size="lg">
                      Apply Now
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">You need to be logged in to apply</p>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Company Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                        <Building className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">{internship.company}</p>
                        <p className="text-sm text-muted-foreground">Technology</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Company Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

