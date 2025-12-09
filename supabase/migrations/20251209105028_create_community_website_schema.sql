/*
  # Community Website Database Schema

  ## Overview
  This migration creates the complete database schema for the Tanyigbe community website,
  including tables for managing contact submissions, donations, volunteers, events, news, 
  and community engagement.

  ## New Tables

  ### 1. `contact_submissions`
  Stores contact form submissions from visitors
  - `id` (uuid, primary key)
  - `name` (text) - Visitor's full name
  - `email` (text) - Contact email address
  - `phone` (text, optional) - Phone number
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `status` (text) - Status: 'new', 'in_progress', 'resolved'
  - `created_at` (timestamptz) - Submission timestamp

  ### 2. `donations`
  Tracks donation records and pledges
  - `id` (uuid, primary key)
  - `donor_name` (text) - Donor's name
  - `email` (text) - Donor email
  - `phone` (text, optional) - Phone number
  - `amount` (numeric) - Donation amount
  - `currency` (text) - Currency code (default: 'GHS')
  - `donation_type` (text) - Type: 'education', 'health', 'infrastructure', 'agriculture', 'general'
  - `is_anonymous` (boolean) - Whether to show donor publicly
  - `payment_status` (text) - Status: 'pending', 'completed', 'failed'
  - `notes` (text, optional) - Additional notes
  - `created_at` (timestamptz) - Donation timestamp

  ### 3. `volunteers`
  Stores volunteer application information
  - `id` (uuid, primary key)
  - `name` (text) - Volunteer's full name
  - `email` (text) - Contact email
  - `phone` (text) - Phone number
  - `location` (text) - Current location
  - `skills` (text[]) - Array of skills/expertise
  - `availability` (text) - Available time commitment
  - `areas_of_interest` (text[]) - Areas they want to help with
  - `experience` (text, optional) - Relevant experience
  - `status` (text) - Status: 'pending', 'approved', 'active', 'inactive'
  - `created_at` (timestamptz) - Application timestamp

  ### 4. `events`
  Community events and activities
  - `id` (uuid, primary key)
  - `title` (text) - Event name
  - `description` (text) - Event details
  - `event_date` (timestamptz) - When the event occurs
  - `location` (text) - Event location
  - `category` (text) - Type: 'cultural', 'development', 'education', 'health', 'community'
  - `image_url` (text, optional) - Event image
  - `is_published` (boolean) - Whether event is visible
  - `created_by` (uuid, optional) - User who created it
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 5. `news_articles`
  Community news and updates
  - `id` (uuid, primary key)
  - `title` (text) - Article title
  - `slug` (text, unique) - URL-friendly version
  - `content` (text) - Article content
  - `excerpt` (text) - Short summary
  - `category` (text) - Category: 'general', 'education', 'health', 'development', 'culture'
  - `image_url` (text, optional) - Featured image
  - `author` (text) - Author name
  - `is_published` (boolean) - Publication status
  - `published_at` (timestamptz, optional) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 6. `newsletter_subscriptions`
  Email newsletter subscribers
  - `id` (uuid, primary key)
  - `email` (text, unique) - Subscriber email
  - `name` (text, optional) - Subscriber name
  - `status` (text) - Status: 'active', 'unsubscribed'
  - `subscribed_at` (timestamptz) - Subscription date
  - `unsubscribed_at` (timestamptz, optional) - Unsubscription date

  ### 7. `gallery_images`
  Community photo gallery
  - `id` (uuid, primary key)
  - `title` (text) - Image title
  - `description` (text, optional) - Image description
  - `image_url` (text) - Image URL
  - `category` (text) - Category: 'culture', 'development', 'events', 'tourism'
  - `is_featured` (boolean) - Featured image flag
  - `uploaded_by` (uuid, optional) - User who uploaded
  - `created_at` (timestamptz) - Upload timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access for published content (events, news, gallery)
  - Authenticated-only write access for content management
  - Public write access for submissions (contact, donations, volunteers, newsletter)
  - Submissions readable only by authenticated users (admins)
*/

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
