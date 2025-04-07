import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardNav } from "@/components/dashboard-nav"
import { Footer } from "@/components/footer"
import { Briefcase, Bell, Upload, Plus, Trash2 } from "lucide-react"

export default function StudentProfilePage() {
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
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your profile information</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-6">
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Change
                </Button>
                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-500 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground">B.Tech Computer Science, 3rd Year</p>
              <p className="text-sm text-muted-foreground">Delhi, India</p>
            </div>
          </div>

          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" defaultValue="2000-01-15" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select defaultValue="male">
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" defaultValue="123 Main Street, Delhi, India" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Add your educational qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">B.Tech Computer Science</h3>
                        <p className="text-sm">Delhi Technical University</p>
                        <p className="text-sm text-muted-foreground">2020 - 2024</p>
                        <p className="text-sm">CGPA: 8.5/10</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">Class XII (CBSE)</h3>
                        <p className="text-sm">Delhi Public School</p>
                        <p className="text-sm text-muted-foreground">2020</p>
                        <p className="text-sm">Percentage: 92%</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="skills" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Add your skills and proficiency levels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">JavaScript</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">React</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Node.js</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">HTML/CSS</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Python</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Communication</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Teamwork</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Problem Solving</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Time Management</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">Languages</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">English (Proficient)</div>
                          <div className="rounded-full bg-muted px-3 py-1 text-sm">Hindi (Native)</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Skill Category
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="resume" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription>Upload your resume and manage your documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-6 flex flex-col items-center justify-center">
                    <div className="mb-4 text-center">
                      <h3 className="font-semibold">Current Resume</h3>
                      <p className="text-sm text-muted-foreground">john_doe_resume.pdf</p>
                      <p className="text-xs text-muted-foreground">Uploaded on: 15 Apr 2025</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-500 hover:bg-red-50">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border border-dashed p-8 flex flex-col items-center justify-center">
                    <div className="mb-4 text-center">
                      <h3 className="font-semibold">Upload New Resume</h3>
                      <p className="text-sm text-muted-foreground">Drag and drop your resume here or click to browse</p>
                      <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX (Max size: 5MB)</p>
                    </div>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Resume
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  )
}

