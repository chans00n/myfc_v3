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
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50 p-4">
              <h2 className="text-xl font-semibold mb-2">Current Streak</h2>
              <p className="text-3xl font-bold">7 days</p>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 p-4">
              <h2 className="text-xl font-semibold mb-2">Workouts Completed</h2>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 p-4">
              <h2 className="text-xl font-semibold mb-2">Total Time</h2>
              <p className="text-3xl font-bold">3.5 hours</p>
            </div>
          </div>
          <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 p-6 md:min-h-min">
            <h2 className="text-2xl font-bold mb-4">Today's Workout</h2>
            <p className="text-muted-foreground mb-6">Complete your daily facial workout to maintain your streak!</p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              Start Workout
            </button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 