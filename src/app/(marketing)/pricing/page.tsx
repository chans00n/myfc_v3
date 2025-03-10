import * as React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">MYFC</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Login
              </Link>
              <Link href="/signup">
                <Button>Start Free Trial</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Simple, transparent pricing
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Start your 7-day free trial. Cancel anytime.
              </p>
            </div>
            <div className="grid gap-8 pt-12 md:grid-cols-2 md:gap-12 lg:gap-16">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly</CardTitle>
                  <CardDescription>Perfect for those who want flexibility.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span className="text-muted-foreground self-end ml-1">/month</span>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Access to all workouts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Full movement library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup?plan=monthly">Start Free Trial</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="relative">
                <div className="absolute -top-3 right-4">
                  <Badge className="px-3 py-1">Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Annual</CardTitle>
                  <CardDescription>Save 25% with our annual plan.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">$179.99</span>
                    <span className="text-muted-foreground">/year</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      ($15/month)
                    </span>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Access to all workouts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Full movement library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>25% savings vs monthly</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup?plan=annual">Start Free Trial</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mx-auto mt-12 max-w-[58rem] text-center text-muted-foreground">
              <p>
                All plans include a 7-day free trial. No credit card required to
                start. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 MYFC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 