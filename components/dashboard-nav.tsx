import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, FileText, User, MessageSquare, Bell, Settings, LogOut } from "lucide-react"

export function DashboardNav() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/dashboard/student">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </Link>
      <Link href="/internships">
        <Button variant="ghost" className="w-full justify-start">
          <Briefcase className="mr-2 h-4 w-4" />
          Browse Internships
        </Button>
      </Link>
      <Link href="/dashboard/student/applications">
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          My Applications
        </Button>
      </Link>
      <Link href="/dashboard/student/profile">
        <Button variant="ghost" className="w-full justify-start">
          <User className="mr-2 h-4 w-4" />
          My Profile
        </Button>
      </Link>
      <Link href="/dashboard/student/messages">
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Messages
        </Button>
      </Link>
      <Link href="/dashboard/student/notifications">
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
      </Link>
      <Link href="/dashboard/student/settings">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </Link>
      <Link href="/auth/logout">
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </Link>
    </div>
  )
}

