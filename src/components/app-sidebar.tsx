"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Dumbbell, 
  LineChart, 
  Settings, 
  LogOut
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const pathname = usePathname()
  
  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Workouts",
      href: "/workouts",
      icon: <Dumbbell className="h-5 w-5" />,
    },
    {
      title: "Progress",
      href: "/progress",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <aside className="flex h-full flex-col overflow-hidden border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">MYFC</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight text-muted-foreground">
            Navigation
          </h2>
          <nav className="grid gap-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.icon}
                <span className="group-data-[expanded=false]/sidebar-wrapper:hidden">
                  {item.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-auto border-t p-2">
        <Button variant="ghost" asChild className="w-full justify-start">
          <Link
            href="/logout"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            <span className="group-data-[expanded=false]/sidebar-wrapper:hidden">
              Log out
            </span>
          </Link>
        </Button>
      </div>
    </aside>
  )
}
