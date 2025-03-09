import * as React from 'react'
import Link from 'next/link'
import { Calendar, Clock, Dumbbell, Trophy } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your facial fitness overview.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-sm font-medium">Current Streak</h3>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">7 days</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-sm font-medium">Workouts Completed</h3>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-sm font-medium">Total Time</h3>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">3.5 hours</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-sm font-medium">Achievements</h3>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Today's Workout</h2>
          <Link
            href="/workouts"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            View all workouts
          </Link>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-medium">Full Face Workout</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive workout targeting all facial muscle groups.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold">
                15 minutes
              </div>
              <div className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold">
                Beginner
              </div>
              <div className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold">
                Full Face
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/workouts/1"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Start Workout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent Movements</h2>
          <Link
            href="/movements"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            View all movements
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Face Plank', 'Cheek Squats', 'Jawline Push-Ups'].map((movement, i) => (
            <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="font-medium">{movement}</h3>
                <p className="text-sm text-muted-foreground">
                  {i === 0
                    ? 'Strengthens forehead muscles'
                    : i === 1
                    ? 'Tones cheek muscles'
                    : 'Defines jawline'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 