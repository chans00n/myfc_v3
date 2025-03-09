import * as React from 'react'
import Link from 'next/link'

export default function TermsPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-muted-foreground">
                Last updated: January 1, 2023
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to MYFC ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at myfacecoach.com (together or individually "Service") operated by MYFC.
                </p>
                <p className="text-muted-foreground">
                  Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
                <p className="text-muted-foreground">
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Subscriptions</h2>
                <p className="text-muted-foreground">
                  Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p className="text-muted-foreground">
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or MYFC cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting MYFC customer support team.
                </p>
                <p className="text-muted-foreground">
                  A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide MYFC with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize MYFC to charge all Subscription fees incurred through your account to any such payment instruments.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Free Trial</h2>
                <p className="text-muted-foreground">
                  MYFC may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").
                </p>
                <p className="text-muted-foreground">
                  You may be required to enter your billing information in order to sign up for the Free Trial.
                </p>
                <p className="text-muted-foreground">
                  If you do enter your billing information when signing up for the Free Trial, you will not be charged by MYFC until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
                </p>
                <p className="text-muted-foreground">
                  At any time and without notice, MYFC reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Content</h2>
                <p className="text-muted-foreground">
                  Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-muted-foreground">
                  By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The information provided by MYFC on our website is for general informational and educational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
                <p className="text-muted-foreground">
                  UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at <Link href="mailto:legal@myfacecoach.com" className="text-primary hover:underline">legal@myfacecoach.com</Link>.
                </p>
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