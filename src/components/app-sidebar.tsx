"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Home,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  Inbox,
  FileText,
  Plus,
  type LucideIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Define the link type to match the component interfaces
type NavLink = {
  title: string
  label?: string
  icon: LucideIcon
  variant: "default" | "ghost"
  href: string
}

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  mainLinks: [
    {
      title: "Home",
      href: "/dashboard",
      icon: Home,
      variant: "default" as const,
    },
    {
      title: "Workouts",
      href: "/workouts",
      icon: SquareTerminal,
      variant: "ghost" as const,
    },
    {
      title: "Exercises",
      href: "/exercises",
      icon: Bot,
      variant: "ghost" as const,
    },
    {
      title: "Progress",
      href: "/progress",
      icon: BookOpen,
      variant: "ghost" as const,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings2,
      variant: "ghost" as const,
    },
  ] as NavLink[],
  projectLinks: [
    {
      title: "Chest Day",
      href: "/projects/chest",
      icon: Frame,
      variant: "ghost" as const,
    },
    {
      title: "Leg Day",
      href: "/projects/legs",
      icon: PieChart,
      variant: "ghost" as const,
    },
    {
      title: "Full Body",
      href: "/projects/fullbody",
      icon: Map,
      variant: "ghost" as const,
    },
    {
      title: "Create Workout",
      href: "/projects/new",
      icon: Plus,
      variant: "ghost" as const,
    },
  ] as NavLink[],
  userLinks: [
    {
      title: "Profile",
      href: "/profile",
      icon: Users,
      variant: "ghost" as const,
    },
    {
      title: "Billing",
      href: "/billing",
      icon: CreditCard,
      variant: "ghost" as const,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      variant: "ghost" as const,
    },
    {
      title: "Help",
      href: "/help",
      icon: HelpCircle,
      variant: "ghost" as const,
    },
  ] as NavLink[],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain links={data.mainLinks} />
        <NavProjects links={data.projectLinks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser links={data.userLinks} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
