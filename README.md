# MYFC - My Face Coach

MYFC (My Face Coach) is a SaaS web application that provides facial fitness workouts and training. The application follows a subscription model where users gain access to a comprehensive dashboard with daily workouts, an extensive movement library, and other fitness tracking features.

## Core Business Model

- Monthly subscription: $19.99/month
- Annual subscription: $179.99/year (equivalent to $15/month)
- 7-day free trial available for new users

## Brand Identity & Design Philosophy

- Brand slogan: "Just Lift It"
- Vision: "Every Face, Every Day!, AnyFace, Anywhere, Anytime"
- Core values: GRIT, consistency, and making fitness fun
- Design aesthetic: Minimal, primarily black and white
- Color scheme: Shadcn Zinc color profile with appropriate accents
- Voice: Approachable, motivational, uplifting, knowledgeable yet relatable, and pro-aging
- Support both light and dark mode with seamless toggle

## Technical Stack

- Frontend: Next.js with React and App Router
- Styling: Tailwind CSS
- UI Component Library: Shadcn UI
- Database and Authentication: Supabase
- Payment Processing: Stripe
- Email Services: Resend
- SSO Integration: Google Cloud
- Version Control: GitHub repository
- Deployment: Vercel
- PWA Implementation: Service workers, manifest, and offline capabilities

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Supabase account
- Stripe account
- Google Cloud account (for SSO)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/myfc.git
cd myfc
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
RESEND_API_KEY=your_resend_api_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### User Account Management

- Profile editing
- Subscription management (upgrade, downgrade, cancel)
- Billing history
- Account settings (notifications, preferences)

### Workout Experience

- Daily recommended workout
- Workout browser/library
- Custom workout builder
- Workout history and stats
- Favorites and bookmarks

### Movement Library

- Categorized movements (based on the MYFC methodology)
- Search and filter functionality
- Detailed movement instructions with visuals
- Ability to save favorites

### Progress Tracking

- Workout completion tracking
- Streak maintenance
- Progress photos (before/after comparison)
- Achievement badges/milestones

## MYFC Methodology

The application reflects the MYFC methodology:

1. **Structured Workout Approach**:
   - Warm-Up (Lymph Drainage and/or Massage)
   - Lifts/Exercises (Main Workout with 3 lifts + core)
   - Cool-Down (Stretches and/or Massage)

2. **Movement Categories**:
   - Lymph Drainage (Warm-Up)
   - Massage (Cardio) - Include "Texas Cardio" days
   - Lifts/Exercises (Strength Training)
   - Stretches (Cool-Down)
   - Facial Acupressure Points (Alternative)

3. **Facial Muscle Focus Areas**:
   - Forehead and Brows
   - Eye Area
   - Cheeks
   - Neck
   - Jawline
   - Lips
   - Eyebrows
   - Ears

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited. 