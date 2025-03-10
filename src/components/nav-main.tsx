"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavMainProps {
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
    href: string
  }[]
}

export function NavMain({ links }: NavMainProps) {
  const pathname = usePathname()

  return (
    <div className="grid gap-1">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={cn(
            buttonVariants({
              variant: link.href === pathname ? "default" : "ghost",
              size: "sm",
            }),
            "justify-start"
          )}
        >
          <link.icon className="mr-2 h-4 w-4" />
          {link.title}
          {link.label && (
            <span
              className={cn(
                "ml-auto",
                link.variant === "default" &&
                  "text-background dark:text-white"
              )}
            >
              {link.label}
            </span>
          )}
        </Link>
      ))}
    </div>
  )
}
