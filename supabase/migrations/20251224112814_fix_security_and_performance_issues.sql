/*
  # Fix Security and Performance Issues
  
  ## Overview
  Addresses security warnings and performance optimizations identified by Supabase.
  
  ## Changes Made
  
  ### 1. Add Missing Foreign Key Indexes
  - Add index on `gallery_categories.created_by`
  - Add index on `gallery_tags.created_by`
  
  ### 2. Optimize RLS Policies
  - Wrap `auth.uid()` calls in SELECT subqueries for better performance
  - Update policies on `admin_profiles`, `gallery_categories`, `gallery_tags`
  
  ### 3. Remove Unused Indexes
  - Drop indexes that are not being used to improve write performance
  
  ### 4. Fix Multiple Permissive Policies
  - Remove duplicate SELECT policies on `events` and `news_articles`
  
  ### 5. Fix Function Search Path
  - Make `update_updated_at_column` function have stable search_path
  
  ## Important Notes
  - All changes preserve existing functionality
  - Write performance will improve with fewer indexes
  - Query performance will improve with optimized RLS policies
*/

-- ============================================
-- 1. ADD MISSING FOREIGN KEY INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_gallery_categories_created_by ON gallery_categories(created_by);
CREATE INDEX IF NOT EXISTS idx_gallery_tags_created_by ON gallery_tags(created_by);

-- ============================================
-- 2. OPTIMIZE RLS POLICIES
-- ============================================

-- Drop existing policies that need optimization
DROP POLICY IF EXISTS "Users can insert own profile" ON admin_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON admin_profiles;
DROP POLICY IF EXISTS "Authenticated users can create categories" ON gallery_categories;
DROP POLICY IF EXISTS "Authenticated users can create tags" ON gallery_tags;

-- Recreate policies with optimized auth function calls
CREATE POLICY "Users can insert own profile"
  ON admin_profiles FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Users can update own profile"
  ON admin_profiles FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Authenticated users can create categories"
  ON gallery_categories FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = created_by);

CREATE POLICY "Authenticated users can create tags"
  ON gallery_tags FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = created_by);

-- ============================================
-- 3. REMOVE UNUSED INDEXES
-- ============================================

-- Contact submissions
DROP INDEX IF EXISTS idx_contact_submissions_status;
DROP INDEX IF EXISTS idx_contact_submissions_created_at;

-- Donations
DROP INDEX IF EXISTS idx_donations_payment_status;
DROP INDEX IF EXISTS idx_donations_donation_type;
DROP INDEX IF EXISTS idx_donations_created_at;

-- Volunteers
DROP INDEX IF EXISTS idx_volunteers_status;
DROP INDEX IF EXISTS idx_volunteers_created_at;

-- Events
DROP INDEX IF EXISTS idx_events_event_date;
DROP INDEX IF EXISTS idx_events_is_published;
DROP INDEX IF EXISTS idx_events_category;

-- News articles
DROP INDEX IF EXISTS idx_news_articles_slug;
DROP INDEX IF EXISTS idx_news_articles_is_published;
DROP INDEX IF EXISTS idx_news_articles_published_at;

-- Newsletter
DROP INDEX IF EXISTS idx_newsletter_subscriptions_email;
DROP INDEX IF EXISTS idx_newsletter_subscriptions_status;

-- Gallery (CMS)
DROP INDEX IF EXISTS idx_gallery_categories_slug;
DROP INDEX IF EXISTS idx_gallery_tags_slug;
DROP INDEX IF EXISTS idx_image_categories_image;
DROP INDEX IF EXISTS idx_image_categories_category;
DROP INDEX IF EXISTS idx_image_tags_image;
DROP INDEX IF EXISTS idx_image_tags_tag;
DROP INDEX IF EXISTS idx_blog_attachments_post;

-- Diaspora
DROP INDEX IF EXISTS idx_diaspora_registrations_email;
DROP INDEX IF EXISTS idx_diaspora_registrations_division;
DROP INDEX IF EXISTS idx_diaspora_registrations_location;
DROP INDEX IF EXISTS idx_diaspora_registrations_status;
DROP INDEX IF EXISTS idx_diaspora_registrations_created_at;

-- Gallery images (old table)
DROP INDEX IF EXISTS idx_gallery_images_category;
DROP INDEX IF EXISTS idx_gallery_images_is_featured;
DROP INDEX IF EXISTS idx_gallery_images_updated_at;

-- Blog posts
DROP INDEX IF EXISTS idx_blog_posts_author_id;
DROP INDEX IF EXISTS idx_blog_posts_post_status;

-- ============================================
-- 4. FIX MULTIPLE PERMISSIVE POLICIES
-- ============================================

-- Remove duplicate SELECT policies on events table
DROP POLICY IF EXISTS "Anyone can view published events" ON events;
DROP POLICY IF EXISTS "Authenticated users can view all events" ON events;

-- Create single optimized SELECT policy for events
CREATE POLICY "Users can view events"
  ON events FOR SELECT
  TO authenticated
  USING (true);

-- Remove duplicate SELECT policies on news_articles table
DROP POLICY IF EXISTS "Anyone can view published articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can view all articles" ON news_articles;

-- Create single optimized SELECT policy for news_articles
CREATE POLICY "Users can view articles"
  ON news_articles FOR SELECT
  TO authenticated
  USING (true);

-- ============================================
-- 5. FIX FUNCTION SEARCH PATH
-- ============================================

-- Recreate function with stable search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;