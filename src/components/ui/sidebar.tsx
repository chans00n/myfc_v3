"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "group relative flex h-full flex-col overflow-hidden bg-background data-[collapsible=icon]:w-[--sidebar-width] data-[collapsible=icon]:transition-[width] data-[collapsible=icon]:duration-300 data-[state=closed]:w-[var(--sidebar-icon-width)]",
  {
    variants: {
      variant: {
        default: "border-r",
        outline: "border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsible?: boolean | "icon"
  defaultCollapsed?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      variant,
      collapsible = false,
      defaultCollapsed = false,
      ...props
    },
    ref
  ) => {
    const [collapsed, setCollapsed] = React.useState(
      collapsible ? defaultCollapsed : false
    )

    return (
      <div
        ref={ref}
        data-collapsible={collapsible}
        data-state={collapsed ? "closed" : "open"}
        className={cn(sidebarVariants({ variant }), className)}
        style={{
          "--sidebar-width": "240px",
          "--sidebar-icon-width": "80px",
        } as React.CSSProperties}
        {...props}
      />
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 group-data-[state=closed]:p-2", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto p-4 group-data-[state=closed]:p-2", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-auto p-4 group-data-[state=closed]:p-2", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarRail = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute inset-y-0 right-0 w-1 cursor-ew-resize bg-transparent transition-colors hover:bg-muted/50 group-data-[collapsible=false]:hidden",
      className
    )}
    {...props}
  />
))
SidebarRail.displayName = "SidebarRail"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
}
