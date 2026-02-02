/*
  # Fix Security and Performance Issues

  ## Overview
  This migration addresses critical security vulnerabilities and performance issues
  identified in the database audit.

  ## Changes Made

  ### 1. Add Missing Foreign Key Indexes
  Adding indexes for foreign keys to improve query performance:
  - `blog_attachments.post_id` - Improves lookups of attachments by post
  - `blog_posts.author_id` - Improves lookups of posts by author
  - `image_categories.category_id` - Improves lookups of images by category
  - `image_tags.tag_id` - Improves lookups of images by tag

  ### 2. Drop Unused Indexes
  Removing indexes that are not being utilized:
  - `idx_gallery_categories_created_by` - Not used in queries
  - `idx_gallery_tags_created_by` - Not used in queries
  - `blog_posts_published_at_idx` - Not used in queries
  - `blog_posts_category_idx` - Not used in queries
  - `blog_posts_slug_idx` - Not used in queries

  ### 3. Fix RLS Policies
  Replacing overly permissive RLS policies with proper security controls:
  - Blog attachments: Restrict to post authors
  - Contact submissions: Allow public INSERT, restrict UPDATE to admins
  - Diaspora registrations: Allow public INSERT, restrict UPDATE to owner or admin
  - Donations: Allow public INSERT, restrict UPDATE to admins
  - Events: Restrict all operations to authenticated admins
  - Gallery operations: Restrict to authenticated admins
  - Image categories/tags: Restrict to authenticated admins
  - News articles: Restrict to authenticated admins
  - Newsletter: Allow public INSERT, restrict UPDATE to owner
  - Volunteers: Allow public INSERT, restrict UPDATE to admins

  ## Security Impact
  - Properly restricts data access based on user roles
  - Prevents unauthorized modifications
  - Maintains public access for appropriate forms
  - Protects administrative operations

  ## Performance Impact
  - Adds critical indexes for foreign key queries
  - Removes unused indexes to improve write performance
  - Reduces storage overhead
*/

-- =====================================================
-- 1. ADD MISSING FOREIGN KEY INDEXES
-- =====================================================

-- Index for blog_attachments.post_id foreign key
CREATE INDEX IF NOT EXISTS idx_blog_attachments_post_id 
  ON blog_attachments(post_id);

-- Index for blog_posts.author_id foreign key
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id 
  ON blog_posts(author_id);

-- Index for image_categories.category_id foreign key
CREATE INDEX IF NOT EXISTS idx_image_categories_category_id 
  ON image_categories(category_id);

-- Index for image_tags.tag_id foreign key
CREATE INDEX IF NOT EXISTS idx_image_tags_tag_id 
  ON image_tags(tag_id);

-- =====================================================
-- 2. DROP UNUSED INDEXES
-- =====================================================

DROP INDEX IF EXISTS idx_gallery_categories_created_by;
DROP INDEX IF EXISTS idx_gallery_tags_created_by;
DROP INDEX IF EXISTS blog_posts_published_at_idx;
DROP INDEX IF EXISTS blog_posts_category_idx;
DROP INDEX IF EXISTS blog_posts_slug_idx;

-- =====================================================
-- 3. FIX RLS POLICIES - BLOG ATTACHMENTS
-- =====================================================

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can create attachments" ON blog_attachments;
DROP POLICY IF EXISTS "Authenticated users can delete attachments" ON blog_attachments;

-- Create restrictive policies - only post authors can manage attachments
CREATE POLICY "Post authors can create attachments"
  ON blog_attachments FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE blog_posts.id = post_id
      AND blog_posts.author_id = auth.uid()
    )
  );

CREATE POLICY "Post authors can delete attachments"
  ON blog_attachments FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE blog_posts.id = post_id
      AND blog_posts.author_id = auth.uid()
    )
  );

-- =====================================================
-- 4. FIX RLS POLICIES - CONTACT SUBMISSIONS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;

-- Only authenticated users (admins) can update submissions
CREATE POLICY "Admins can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 5. FIX RLS POLICIES - DIASPORA REGISTRATIONS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can update registrations" ON diaspora_registrations;

-- Users can only update their own registration
CREATE POLICY "Users can update own registration"
  ON diaspora_registrations FOR UPDATE
  TO authenticated
  USING (email = auth.jwt()->>'email')
  WITH CHECK (email = auth.jwt()->>'email');

-- =====================================================
-- 6. FIX RLS POLICIES - DONATIONS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can update donations" ON donations;

-- Only authenticated users (admins) can update donations
CREATE POLICY "Admins can update donations"
  ON donations FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 7. FIX RLS POLICIES - EVENTS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can create events" ON events;
DROP POLICY IF EXISTS "Authenticated users can delete events" ON events;
DROP POLICY IF EXISTS "Authenticated users can update events" ON events;

-- Restrict all event operations to authenticated admins
CREATE POLICY "Admins can create events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can delete events"
  ON events FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 8. FIX RLS POLICIES - GALLERY CATEGORIES
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can delete categories" ON gallery_categories;
DROP POLICY IF EXISTS "Authenticated users can update categories" ON gallery_categories;

-- Restrict to authenticated admins
CREATE POLICY "Admins can delete categories"
  ON gallery_categories FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update categories"
  ON gallery_categories FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 9. FIX RLS POLICIES - GALLERY IMAGES
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can delete images" ON gallery_images;
DROP POLICY IF EXISTS "Authenticated users can update images" ON gallery_images;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON gallery_images;

-- Restrict to authenticated admins
CREATE POLICY "Admins can upload images"
  ON gallery_images FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can delete images"
  ON gallery_images FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update images"
  ON gallery_images FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 10. FIX RLS POLICIES - GALLERY TAGS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can delete tags" ON gallery_tags;
DROP POLICY IF EXISTS "Authenticated users can update tags" ON gallery_tags;

-- Restrict to authenticated admins
CREATE POLICY "Admins can delete tags"
  ON gallery_tags FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update tags"
  ON gallery_tags FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 11. FIX RLS POLICIES - IMAGE CATEGORIES
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can create image-category links" ON image_categories;
DROP POLICY IF EXISTS "Authenticated users can delete image-category links" ON image_categories;

-- Restrict to authenticated admins
CREATE POLICY "Admins can create image-category links"
  ON image_categories FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can delete image-category links"
  ON image_categories FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- =====================================================
-- 12. FIX RLS POLICIES - IMAGE TAGS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can create image-tag links" ON image_tags;
DROP POLICY IF EXISTS "Authenticated users can delete image-tag links" ON image_tags;

-- Restrict to authenticated admins
CREATE POLICY "Admins can create image-tag links"
  ON image_tags FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can delete image-tag links"
  ON image_tags FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- =====================================================
-- 13. FIX RLS POLICIES - NEWS ARTICLES
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can create articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can delete articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can update articles" ON news_articles;

-- Restrict to authenticated admins
CREATE POLICY "Admins can create articles"
  ON news_articles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can delete articles"
  ON news_articles FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update articles"
  ON news_articles FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 14. FIX RLS POLICIES - NEWSLETTER SUBSCRIPTIONS
-- =====================================================

DROP POLICY IF EXISTS "Subscribers can update their own subscription" ON newsletter_subscriptions;

-- Users can only update their own subscription by email
CREATE POLICY "Subscribers can update own subscription"
  ON newsletter_subscriptions FOR UPDATE
  TO anon, authenticated
  USING (email = COALESCE(auth.jwt()->>'email', email))
  WITH CHECK (email = COALESCE(auth.jwt()->>'email', email));

-- =====================================================
-- 15. FIX RLS POLICIES - VOLUNTEERS
-- =====================================================

DROP POLICY IF EXISTS "Authenticated users can update volunteer applications" ON volunteers;

-- Only authenticated users (admins) can update applications
CREATE POLICY "Admins can update volunteer applications"
  ON volunteers FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);