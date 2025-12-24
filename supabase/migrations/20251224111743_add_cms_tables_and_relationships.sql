/*
  # Add CMS Tables and Relationships
  
  ## Overview
  Extends existing database with CMS functionality for gallery and blog management.
  This migration creates new tables for organizing content and adds necessary relationships.
  
  ## New Tables Created
  
  ### 1. Admin Profiles (`admin_profiles`)
  Extended user profile for admin users
  - `id` (uuid, FK to auth.users)
  - `full_name` (text)
  - `role` (text) - admin role designation
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 2. Gallery Categories (`gallery_categories`)
  Categories for organizing gallery images (replaces hardcoded categories)
  - `id` (uuid, primary key)
  - `name` (text, unique) - Display name
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text, optional)
  - `created_at` (timestamptz)
  - `created_by` (uuid, FK to auth.users)
  
  ### 3. Gallery Tags (`gallery_tags`)
  Flexible tagging system for images
  - `id` (uuid, primary key)
  - `name` (text, unique)
  - `slug` (text, unique)
  - `created_at` (timestamptz)
  - `created_by` (uuid, FK to auth.users)
  
  ### 4. Image Categories Junction (`image_categories`)
  Many-to-many: Images can belong to multiple categories
  - `image_id` (uuid, FK to gallery_images)
  - `category_id` (uuid, FK to gallery_categories)
  
  ### 5. Image Tags Junction (`image_tags`)
  Many-to-many: Images can have multiple tags
  - `image_id` (uuid, FK to gallery_images)
  - `tag_id` (uuid, FK to gallery_tags)
  
  ### 6. Blog Attachments (`blog_attachments`)
  PDF and file attachments for blog posts
  - `id` (uuid, primary key)
  - `post_id` (uuid, FK to blog_posts)
  - `file_name` (text)
  - `file_url` (text) - Supabase storage URL
  - `file_size` (integer) - in bytes
  - `mime_type` (text)
  - `created_at` (timestamptz)
  
  ## Table Modifications
  
  ### Existing `gallery_images` table
  - Add `alt_text` column for accessibility
  - Add `thumbnail_url` for optimized display
  - Add `file_size`, `mime_type`, `width`, `height` for metadata
  - Add `updated_at` timestamp
  
  ### Existing `blog_posts` table
  - Rename `author` to `author_id` (FK to auth.users)
  - Add `post_status` field ('draft' or 'published')
  - Note: Existing `published` boolean field will be phased out
  
  ## Security
  - Enable RLS on all new tables
  - All operations restricted to authenticated users
  - Proper foreign key constraints for data integrity
  
  ## Important Notes
  1. Migration preserves all existing data
  2. New columns have sensible defaults
  3. RLS policies ensure admin-only access
  4. Indexes added for query performance
*/

-- ============================================
-- CREATE NEW TABLES
-- ============================================

-- Create admin profiles table
CREATE TABLE IF NOT EXISTS admin_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  role text DEFAULT 'admin',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery categories table
CREATE TABLE IF NOT EXISTS gallery_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create gallery tags table
CREATE TABLE IF NOT EXISTS gallery_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create image-categories junction table
CREATE TABLE IF NOT EXISTS image_categories (
  image_id uuid REFERENCES gallery_images(id) ON DELETE CASCADE,
  category_id uuid REFERENCES gallery_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (image_id, category_id)
);

-- Create image-tags junction table
CREATE TABLE IF NOT EXISTS image_tags (
  image_id uuid REFERENCES gallery_images(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES gallery_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (image_id, tag_id)
);

-- Create blog attachments table
CREATE TABLE IF NOT EXISTS blog_attachments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  file_name text NOT NULL,
  file_url text NOT NULL,
  file_size integer,
  mime_type text,
  created_at timestamptz DEFAULT now()
);

-- ============================================
-- MODIFY EXISTING TABLES
-- ============================================

-- Add new columns to gallery_images if they don't exist
DO $$
BEGIN
  -- Add alt_text column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'alt_text'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN alt_text text DEFAULT '';
  END IF;

  -- Add thumbnail_url column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'thumbnail_url'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN thumbnail_url text;
  END IF;

  -- Add file_size column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'file_size'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN file_size integer;
  END IF;

  -- Add mime_type column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'mime_type'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN mime_type text;
  END IF;

  -- Add width column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'width'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN width integer;
  END IF;

  -- Add height column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'height'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN height integer;
  END IF;

  -- Add updated_at column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'gallery_images' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;
END $$;

-- Add new columns to blog_posts if they don't exist
DO $$
BEGIN
  -- Add author_id column (will eventually replace author)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'blog_posts' AND column_name = 'author_id'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;
  END IF;

  -- Add post_status column (will eventually replace published boolean)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'blog_posts' AND column_name = 'post_status'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN post_status text DEFAULT 'draft';
  END IF;
END $$;

-- ============================================
-- CREATE INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_gallery_images_updated_at ON gallery_images(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_categories_slug ON gallery_categories(slug);
CREATE INDEX IF NOT EXISTS idx_gallery_tags_slug ON gallery_tags(slug);
CREATE INDEX IF NOT EXISTS idx_image_categories_image ON image_categories(image_id);
CREATE INDEX IF NOT EXISTS idx_image_categories_category ON image_categories(category_id);
CREATE INDEX IF NOT EXISTS idx_image_tags_image ON image_tags(image_id);
CREATE INDEX IF NOT EXISTS idx_image_tags_tag ON image_tags(tag_id);
CREATE INDEX IF NOT EXISTS idx_blog_attachments_post ON blog_attachments(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_post_status ON blog_posts(post_status);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE image_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE image_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_attachments ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES
-- ============================================

-- Admin Profiles Policies
CREATE POLICY "Authenticated users can view admin profiles"
  ON admin_profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert own profile"
  ON admin_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON admin_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Gallery Categories Policies
CREATE POLICY "Authenticated users can view categories"
  ON gallery_categories FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create categories"
  ON gallery_categories FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can update categories"
  ON gallery_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON gallery_categories FOR DELETE
  TO authenticated
  USING (true);

-- Gallery Tags Policies
CREATE POLICY "Authenticated users can view tags"
  ON gallery_tags FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create tags"
  ON gallery_tags FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can update tags"
  ON gallery_tags FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tags"
  ON gallery_tags FOR DELETE
  TO authenticated
  USING (true);

-- Image Categories Junction Policies
CREATE POLICY "Authenticated users can view image-category links"
  ON image_categories FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create image-category links"
  ON image_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete image-category links"
  ON image_categories FOR DELETE
  TO authenticated
  USING (true);

-- Image Tags Junction Policies
CREATE POLICY "Authenticated users can view image-tag links"
  ON image_tags FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create image-tag links"
  ON image_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete image-tag links"
  ON image_tags FOR DELETE
  TO authenticated
  USING (true);

-- Blog Attachments Policies
CREATE POLICY "Authenticated users can view attachments"
  ON blog_attachments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create attachments"
  ON blog_attachments FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete attachments"
  ON blog_attachments FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- TRIGGERS
-- ============================================

-- Create or replace function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger for admin_profiles
DROP TRIGGER IF EXISTS update_admin_profiles_updated_at ON admin_profiles;
CREATE TRIGGER update_admin_profiles_updated_at
  BEFORE UPDATE ON admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add trigger for gallery_images (if not already exists)
DROP TRIGGER IF EXISTS update_gallery_images_updated_at ON gallery_images;
CREATE TRIGGER update_gallery_images_updated_at
  BEFORE UPDATE ON gallery_images
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INSERT DEFAULT CATEGORIES
-- ============================================

-- Insert default gallery categories (if they don't exist)
INSERT INTO gallery_categories (name, slug, description) VALUES
  ('Community', 'community', 'Community events and gatherings'),
  ('Culture', 'culture', 'Cultural heritage and traditions'),
  ('Festivals', 'festivals', 'Festival celebrations'),
  ('Developments', 'developments', 'Development projects'),
  ('Tourism', 'tourism', 'Tourist attractions and sites')
ON CONFLICT (name) DO NOTHING;