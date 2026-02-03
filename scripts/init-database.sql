-- =====================================================
-- TANYIGBE COMMUNITY WEBSITE DATABASE INITIALIZATION
-- =====================================================
-- Run this script in your Supabase SQL Editor to set up
-- the complete database schema for the community website
-- =====================================================

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text NOT NULL,
  email text NOT NULL,
  phone text,
  amount numeric NOT NULL CHECK (amount > 0),
  currency text DEFAULT 'GHS',
  donation_type text DEFAULT 'general' CHECK (donation_type IN ('education', 'health', 'infrastructure', 'agriculture', 'general')),
  is_anonymous boolean DEFAULT false,
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit donations"
  ON donations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all donations"
  ON donations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public can read non-anonymous donations"
  ON donations
  FOR SELECT
  TO anon
  USING (is_anonymous = false AND payment_status = 'completed');

CREATE POLICY "Authenticated users can update donations"
  ON donations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  skills text[] DEFAULT ARRAY[]::text[],
  availability text NOT NULL,
  areas_of_interest text[] DEFAULT ARRAY[]::text[],
  experience text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'active', 'inactive')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit volunteer applications"
  ON volunteers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read volunteer applications"
  ON volunteers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update volunteer applications"
  ON volunteers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date timestamptz NOT NULL,
  location text NOT NULL,
  category text DEFAULT 'community' CHECK (category IN ('cultural', 'development', 'education', 'health', 'community')),
  image_url text,
  is_published boolean DEFAULT false,
  created_by uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published events"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);

-- Create news_articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  category text DEFAULT 'general' CHECK (category IN ('general', 'education', 'health', 'development', 'culture')),
  image_url text,
  author text NOT NULL,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published articles"
  ON news_articles
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all articles"
  ON news_articles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create articles"
  ON news_articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update articles"
  ON news_articles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete articles"
  ON news_articles
  FOR DELETE
  TO authenticated
  USING (true);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Subscribers can update their own subscription"
  ON newsletter_subscriptions
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text DEFAULT 'culture' CHECK (category IN ('culture', 'development', 'events', 'tourism')),
  is_featured boolean DEFAULT false,
  uploaded_by uuid,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery images"
  ON gallery_images
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can upload images"
  ON gallery_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update images"
  ON gallery_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete images"
  ON gallery_images
  FOR DELETE
  TO authenticated
  USING (true);

-- Create diaspora_registrations table
CREATE TABLE IF NOT EXISTS diaspora_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  division_of_origin text NOT NULL CHECK (division_of_origin IN ('etoe', 'gbogame', 'avedome', 'dugame')),
  current_location text NOT NULL,
  profession text,
  contribution_interests text,
  receive_updates boolean DEFAULT true,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE diaspora_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register with diaspora network"
  ON diaspora_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all registrations"
  ON diaspora_registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update registrations"
  ON diaspora_registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_donations_payment_status ON donations(payment_status);
CREATE INDEX IF NOT EXISTS idx_donations_donation_type ON donations(donation_type);
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_volunteers_status ON volunteers(status);
CREATE INDEX IF NOT EXISTS idx_volunteers_created_at ON volunteers(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_events_is_published ON events(is_published);
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);
CREATE INDEX IF NOT EXISTS idx_news_articles_slug ON news_articles(slug);
CREATE INDEX IF NOT EXISTS idx_news_articles_is_published ON news_articles(is_published);
CREATE INDEX IF NOT EXISTS idx_news_articles_published_at ON news_articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON gallery_images(category);
CREATE INDEX IF NOT EXISTS idx_gallery_images_is_featured ON gallery_images(is_featured);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_email ON diaspora_registrations(email);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_division ON diaspora_registrations(division_of_origin);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_location ON diaspora_registrations(current_location);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_status ON diaspora_registrations(status);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_created_at ON diaspora_registrations(created_at DESC);
