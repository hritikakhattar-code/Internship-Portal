import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, Users, Building, MessageSquare, Bell, Settings, LogOut } from "lucide-react"

export function EmployerNav() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/dashboard/employer">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </Link>
      <Link href="/dashboard/employer/internships">
        <Button variant="ghost" className="w-full justify-start">
          <Briefcase className="mr-2 h-4 w-4" />
          My Internships
        </Button>
      </Link>
      <Link href="/dashboard/employer/applications">
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Applications
        </Button>
      </Link>
      <Link href="/dashboard/employer/company-profile">
        <Button variant="ghost" className="w-full justify-start">
          <Building className="mr-2 h-4 w-4" />
          Company Profile
        </Button>
      </Link>
      <Link href="/dashboard/employer/messages">
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Messages
        </Button>
      </Link>
      <Link href="/dashboard/employer/notifications">
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
      </Link>
      <Link href="/dashboard/employer/settings">
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

