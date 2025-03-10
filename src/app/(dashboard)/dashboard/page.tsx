import * as React from 'react'
import Link from 'next/link'
import { Calendar, Clock, Dumbbell, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Current Streak</h3>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">7 days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Workouts Completed</h3>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Total Time</h3>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">3.5 hours</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Achievements</h3>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">3</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Today's Workout</h2>
          <Button variant="link" asChild>
            <Link href="/workouts">View all workouts</Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Full Face Workout</CardTitle>
            <CardDescription>
              A comprehensive workout targeting all facial muscle groups.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">15 minutes</Badge>
              <Badge variant="secondary">Beginner</Badge>
              <Badge variant="secondary">Full Face</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/workouts/1">Start Workout</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent Movements</h2>
          <Button variant="link" asChild>
            <Link href="/movements">View all movements</Link>
          </Button>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['Face Plank', 'Cheek Squats', 'Jawline Push-Ups'].map((movement, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{movement}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {i === 0
                        ? 'Strengthens forehead muscles'
                        : i === 1
                        ? 'Tones cheek muscles'
                        : 'Defines jawline'}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="favorites">
            <div className="rounded-md border p-8 text-center">
              <h3 className="text-lg font-medium">No favorites yet</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Add movements to your favorites to see them here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="recent">
            <div className="rounded-md border p-8 text-center">
              <h3 className="text-lg font-medium">No recent movements</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Complete a workout to see recent movements.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 