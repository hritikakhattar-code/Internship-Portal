import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EmployerNav } from "@/components/employer-nav"
import { Footer } from "@/components/footer"
import { Briefcase, Bell, ArrowLeft } from "lucide-react"

export default function PostInternshipPage() {
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
          <div className="flex items-center gap-2">
            <Link href="/dashboard/employer" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <h1 className="text-3xl font-bold">Post New Internship</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Internship Details</CardTitle>
              <CardDescription>Fill in the details of the internship you want to post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3">
                <Label htmlFor="title">Internship Title</Label>
                <Input id="title" placeholder="e.g. Frontend Developer Intern" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="city">City (if applicable)</Label>
                <Input id="city" placeholder="e.g. Mumbai" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="duration">Duration</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="duration" placeholder="e.g. 3" type="number" min="1" />
                  <Select defaultValue="months">
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="stipend">Stipend</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="stipend" placeholder="e.g. 15000" type="number" min="0" />
                  <Select defaultValue="month">
                    <SelectTrigger>
                      <SelectValue placeholder="Select stipend frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Per Month</SelectItem>
                      <SelectItem value="week">Per Week</SelectItem>
                      <SelectItem value="lumpsum">Lump Sum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="openings">Number of Openings</Label>
                <Input id="openings" placeholder="e.g. 2" type="number" min="1" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="apply-by">Apply By</Label>
                <Input id="apply-by" type="date" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="about">About the Internship</Label>
                <Textarea
                  id="about"
                  placeholder="Describe the internship and what the intern will be working on"
                  rows={4}
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="responsibilities">Responsibilities</Label>
                <Textarea id="responsibilities" placeholder="List the key responsibilities of the intern" rows={4} />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="List the skills and qualifications required for the internship"
                  rows={4}
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="perks">Perks</Label>
                <Textarea id="perks" placeholder="List any additional perks or benefits" rows={3} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Post Internship</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
      <Footer />
    </div>
  )
}

