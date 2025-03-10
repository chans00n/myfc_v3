import * as React from 'react'

export default function SettingsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="grid gap-6">
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <p className="text-muted-foreground">
            Your account settings will appear here. This page is under construction.
          </p>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <p className="text-muted-foreground">
            Your app preferences will appear here. This page is under construction.
          </p>
        </div>
      </div>
    </div>
  )
} 