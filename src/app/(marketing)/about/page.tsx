import * as React from 'react'
import Link from 'next/link'

export default function AboutPage() {
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
            <div className="mx-auto max-w-3xl space-y-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About MYFC</h1>
              <p className="text-xl text-muted-foreground">
                My Face Coach (MYFC) is a revolutionary facial fitness platform dedicated to helping you achieve your facial fitness goals.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  At MYFC, our mission is to make facial fitness accessible, enjoyable, and effective for everyone. We believe in the power of consistent practice and proper technique to transform your facial appearance naturally.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Approach</h2>
                <p className="text-muted-foreground">
                  Our methodology is based on scientific principles of muscle training, adapted specifically for the unique muscles of the face. We focus on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Structured workout routines that target all facial muscle groups</li>
                  <li>Progressive training that adapts to your fitness level</li>
                  <li>Proper form and technique to maximize results and prevent strain</li>
                  <li>Consistency and tracking to ensure steady progress</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Values</h2>
                <p className="text-muted-foreground">
                  MYFC is built on the core values of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>GRIT:</strong> Perseverance and passion for long-term goals</li>
                  <li><strong>Consistency:</strong> Regular practice leads to lasting results</li>
                  <li><strong>Fun:</strong> Making fitness enjoyable and sustainable</li>
                  <li><strong>Accessibility:</strong> Facial fitness for everyone, anywhere, anytime</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Join Us</h2>
                <p className="text-muted-foreground">
                  Start your facial fitness journey today with our 7-day free trial. Experience the MYFC difference and see why our members are achieving remarkable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
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