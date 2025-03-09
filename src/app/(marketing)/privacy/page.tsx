import * as React from 'react'
import Link from 'next/link'

export default function PrivacyPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Last updated: January 1, 2023
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p className="text-muted-foreground">
                  MYFC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by MYFC.
                </p>
                <p className="text-muted-foreground">
                  This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service") alongside our application, MYFC. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information from you when you register on our site, place an order, subscribe to our service, respond to a survey, fill out a form, or enter information on our site.
                </p>
                <p className="text-muted-foreground">
                  The personal information that we collect depends on the context of your interactions with us and the Service, the choices you make, and the products and features you use. The personal information we collect may include the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and contact data. We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
                  <li>Credentials. We collect passwords, password hints, and similar security information used for authentication and account access.</li>
                  <li>Payment data. We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
                  <li>Location data. We collect data about your location, which can be either precise or imprecise. Precise location data can be Global Position System (GPS) data, as well as data identifying nearby cell towers and Wi-Fi hotspots, that we collect when you enable location-based services or features.</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect in various ways, including to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, operate, and maintain our Service</li>
                  <li>Improve, personalize, and expand our Service</li>
                  <li>Understand and analyze how you use our Service</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes</li>
                  <li>Process your transactions</li>
                  <li>Send you text messages and push notifications</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Sharing Your Information</h2>
                <p className="text-muted-foreground">
                  We may share the information we collect in various ways, including the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Vendors and Service Providers. We may share information with third-party vendors and service providers that provide services on our behalf, such as helping to provide our Service, for promotional and/or marketing purposes, and to provide you with information relevant to you such as product announcements, software updates, special offers, or other information.</li>
                  <li>Aggregate Information. Where legally permissible, we may use and share information about users with our partners in aggregated or de-identified form that can't reasonably be used to identify you.</li>
                  <li>Business Transfers. Information may be disclosed and otherwise transferred to any potential acquirer, successor, or assignee as part of any proposed merger, acquisition, debt financing, sale of assets, or similar transaction, or in the event of insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets.</li>
                  <li>As Required By Law and Similar Disclosures. We may also share information to (i) satisfy any applicable law, regulation, legal process, or governmental request; (ii) enforce this Privacy Policy and our Terms of Service, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security, or technical issues; (iv) respond to your requests; or (v) protect our rights, property or safety, our users and the public. This includes exchanging information with other companies and organizations for fraud protection and spam/malware prevention.</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have several rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access. You can request copies of your personal information.</li>
                  <li>Rectification. You can ask us to fix inaccurate or incomplete information.</li>
                  <li>Erasure. You can ask us to erase your personal information in certain circumstances.</li>
                  <li>Restriction. You can ask us to restrict the processing of your information in certain circumstances.</li>
                  <li>Object. You can object to our processing of your information in certain circumstances.</li>
                  <li>Data portability. You can ask for a copy of your information in a machine-readable format.</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:privacy@myfacecoach.com" className="text-primary hover:underline">privacy@myfacecoach.com</Link>.
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