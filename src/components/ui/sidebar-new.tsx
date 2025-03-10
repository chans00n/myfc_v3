"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const SidebarContext = React.createContext<{
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  toggleExpanded: () => void
}>({
  expanded: true,
  setExpanded: () => undefined,
  toggleExpanded: () => undefined,
})

export function SidebarProvider({
  children,
  defaultExpanded = true,
}: {
  children: React.ReactNode
  defaultExpanded?: boolean
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  const toggleExpanded = React.useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        expanded,
        setExpanded,
        toggleExpanded,
      }}
    >
      <div
        data-expanded={expanded}
        className="group/sidebar-wrapper grid h-full w-full grid-cols-1 grid-rows-1 transition-[grid-template-columns] duration-300 ease-in-out data-[expanded=true]:grid-cols-[280px_1fr] data-[expanded=false]:grid-cols-[64px_1fr]"
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export function SidebarTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { expanded, toggleExpanded } = React.useContext(SidebarContext)

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-8 w-8", className)}
      onClick={toggleExpanded}
      {...props}
    >
      {expanded ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}

export function SidebarInset({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full flex-col">{children}</div>
} 