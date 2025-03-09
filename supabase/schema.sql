-- Create schema for MYFC application

-- Enable RLS (Row Level Security)
alter default privileges revoke execute on functions from public;

-- Create custom types
create type subscription_status as enum ('trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid');
create type subscription_plan as enum ('monthly', 'annual');

-- Create tables
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique not null,
  first_name text,
  last_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint email_check check (email ~* '^.+@.+\..+$')
);

create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  status subscription_status not null,
  plan subscription_plan not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  cancel_at_period_end boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.workouts (
  id uuid default uuid_generate_v4() not null primary key,
  name text not null,
  description text,
  duration integer not null, -- in minutes
  difficulty text not null, -- beginner, intermediate, advanced
  focus_area text[], -- array of focus areas
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.movements (
  id uuid default uuid_generate_v4() not null primary key,
  name text not null,
  description text,
  instructions text,
  category text not null, -- lymph drainage, massage, lift, stretch, acupressure
  focus_area text not null, -- forehead, eyes, cheeks, neck, jawline, lips, eyebrows, ears
  image_url text,
  video_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.workout_movements (
  id uuid default uuid_generate_v4() not null primary key,
  workout_id uuid references public.workouts(id) on delete cascade not null,
  movement_id uuid references public.movements(id) on delete cascade not null,
  sequence_order integer not null,
  reps integer,
  duration integer, -- in seconds
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  unique (workout_id, movement_id, sequence_order)
);

create table if not exists public.user_workouts (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  workout_id uuid references public.workouts(id) on delete cascade not null,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  duration integer, -- actual duration in minutes
  notes text,
  
  unique (user_id, workout_id, completed_at)
);

create table if not exists public.user_favorites (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  workout_id uuid references public.workouts(id) on delete cascade,
  movement_id uuid references public.movements(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint workout_or_movement_check check (
    (workout_id is not null and movement_id is null) or
    (workout_id is null and movement_id is not null)
  ),
  
  unique (user_id, workout_id),
  unique (user_id, movement_id)
);

create table if not exists public.progress_photos (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  photo_url text not null,
  photo_type text not null, -- before, after
  taken_at timestamp with time zone default timezone('utc'::text, now()) not null,
  notes text
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.user_workouts enable row level security;
alter table public.user_favorites enable row level security;
alter table public.progress_photos enable row level security;

-- Create policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can view their own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

create policy "Users can view workouts"
  on public.workouts for select
  to authenticated;

create policy "Users can view movements"
  on public.movements for select
  to authenticated;

create policy "Users can view workout movements"
  on public.workout_movements for select
  to authenticated;

create policy "Users can view their own workout history"
  on public.user_workouts for select
  using (auth.uid() = user_id);

create policy "Users can insert their own workout history"
  on public.user_workouts for insert
  with check (auth.uid() = user_id);

create policy "Users can view their own favorites"
  on public.user_favorites for select
  using (auth.uid() = user_id);

create policy "Users can manage their own favorites"
  on public.user_favorites for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own favorites"
  on public.user_favorites for delete
  using (auth.uid() = user_id);

create policy "Users can view their own progress photos"
  on public.progress_photos for select
  using (auth.uid() = user_id);

create policy "Users can manage their own progress photos"
  on public.progress_photos for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own progress photos"
  on public.progress_photos for delete
  using (auth.uid() = user_id);

-- Create functions
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

-- Create triggers
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user(); 