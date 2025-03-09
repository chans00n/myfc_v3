import * as React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

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
                href="/login"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Start Free Trial
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
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Monthly</h3>
                  <p className="text-muted-foreground">
                    Perfect for those who want flexibility.
                  </p>
                </div>
                <div className="flex">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="text-muted-foreground">/month</span>
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
                <Link
                  href="/signup?plan=monthly"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="relative flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Annual</h3>
                  <p className="text-muted-foreground">
                    Save 25% with our annual plan.
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
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
                <Link
                  href="/signup?plan=annual"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Start Free Trial
                </Link>
              </div>
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