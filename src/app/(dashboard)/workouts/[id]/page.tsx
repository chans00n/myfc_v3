import * as React from 'react'
import Link from 'next/link'

export default function WorkoutDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link 
          href="/workouts" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Workouts
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Workout #{params.id}</h1>
      
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Workout Details</h2>
        <p className="text-muted-foreground">
          Workout details for ID: {params.id} will appear here. This page is under construction.
        </p>
      </div>
    </div>
  )
} 