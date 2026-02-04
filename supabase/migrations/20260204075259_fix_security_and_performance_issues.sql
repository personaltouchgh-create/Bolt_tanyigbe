/*
  # Fix Security and Performance Issues

  ## Changes Made

  ### 1. Add Missing Indexes for Foreign Keys
    - Add index on `blog_attachments.uploaded_by`
    - Add index on `gallery_categories.created_by`
    - Add index on `gallery_tags.created_by`
    - Add index on `image_categories.created_by`
    - Add index on `image_tags.created_by`

  ### 2. Remove Unused Indexes
    - Remove unused indexes from various tables that haven't been used
    - These indexes consume storage and slow down write operations without providing benefit

  ### 3. Fix Multiple Permissive Policies
    - Consolidate duplicate SELECT policies on `events` table
    - Consolidate duplicate SELECT policies on `news_articles` table

  ## Security Improvements
    - Better query performance through proper indexing
    - Cleaner policy structure to reduce confusion
    - Reduced attack surface by removing unused indexes

  ## Note on Password Protection
    The leaked password protection feature must be enabled through the Supabase Dashboard
    under Authentication > Settings > Enable "Password breach detection"
*/

-- 1. Add missing indexes for foreign keys
CREATE INDEX IF NOT EXISTS idx_blog_attachments_uploaded_by 
ON blog_attachments(uploaded_by);

CREATE INDEX IF NOT EXISTS idx_gallery_categories_created_by 
ON gallery_categories(created_by);

CREATE INDEX IF NOT EXISTS idx_gallery_tags_created_by 
ON gallery_tags(created_by);

CREATE INDEX IF NOT EXISTS idx_image_categories_created_by 
ON image_categories(created_by);

CREATE INDEX IF NOT EXISTS idx_image_tags_created_by 
ON image_tags(created_by);

-- 2. Remove unused indexes
DROP INDEX IF EXISTS idx_blog_attachments_post;
DROP INDEX IF EXISTS idx_contact_submissions_status;
DROP INDEX IF EXISTS idx_contact_submissions_created_at;
DROP INDEX IF EXISTS idx_donations_payment_status;
DROP INDEX IF EXISTS idx_donations_donation_type;
DROP INDEX IF EXISTS idx_donations_created_at;
DROP INDEX IF EXISTS idx_volunteers_status;
DROP INDEX IF EXISTS idx_volunteers_created_at;
DROP INDEX IF EXISTS idx_events_event_date;
DROP INDEX IF EXISTS idx_events_is_published;
DROP INDEX IF EXISTS idx_events_category;
DROP INDEX IF EXISTS idx_news_articles_slug;
DROP INDEX IF EXISTS idx_news_articles_is_published;
DROP INDEX IF EXISTS idx_news_articles_published_at;
DROP INDEX IF EXISTS idx_newsletter_subscriptions_email;
DROP INDEX IF EXISTS idx_newsletter_subscriptions_status;
DROP INDEX IF EXISTS idx_gallery_images_category;
DROP INDEX IF EXISTS idx_gallery_images_is_featured;
DROP INDEX IF EXISTS idx_diaspora_registrations_email;
DROP INDEX IF EXISTS idx_diaspora_registrations_country;

-- 3. Fix multiple permissive policies on events table
DROP POLICY IF EXISTS "Anyone can view published events" ON events;
DROP POLICY IF EXISTS "Authenticated users can view all events" ON events;

CREATE POLICY "Users can view published events or all if authenticated"
  ON events FOR SELECT
  USING (
    is_published = true 
    OR 
    (auth.role() = 'authenticated')
  );

-- 4. Fix multiple permissive policies on news_articles table
DROP POLICY IF EXISTS "Anyone can view published articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can view all articles" ON news_articles;

CREATE POLICY "Users can view published articles or all if authenticated"
  ON news_articles FOR SELECT
  USING (
    is_published = true 
    OR 
    (auth.role() = 'authenticated')
  );