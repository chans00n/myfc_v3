"use client"

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Dumbbell, 
  LineChart, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

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
      title: "Movements",
      href: "/movements",
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
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground lg:hidden"
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">MYFC</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/logout"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:w-20 xl:w-64 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center border-b px-6 lg:hidden xl:flex">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">MYFC</span>
            </Link>
          </div>
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight lg:hidden xl:block">
                  Navigation
                </h2>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.icon}
                    <span className="lg:hidden xl:block">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
} 