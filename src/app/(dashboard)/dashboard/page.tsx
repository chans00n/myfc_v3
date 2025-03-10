"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar-new"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    My Face Coach
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Current Streak</h2>
              <p className="text-3xl font-bold">7 days</p>
            </div>
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Workouts Completed</h2>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="rounded-xl border bg-card p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Total Time</h2>
              <p className="text-3xl font-bold">3.5 hours</p>
            </div>
          </div>
          <div className="min-h-[50vh] flex-1 rounded-xl border bg-card p-6 shadow-sm md:min-h-min">
            <h2 className="text-2xl font-bold mb-4">Today's Workout</h2>
            <p className="text-muted-foreground mb-6">Complete your daily facial workout to maintain your streak!</p>
            <Button>Start Workout</Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 