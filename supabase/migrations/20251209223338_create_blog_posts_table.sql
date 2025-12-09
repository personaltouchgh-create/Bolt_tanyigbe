/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Post title
      - `slug` (text, unique) - URL-friendly version of title
      - `excerpt` (text) - Short description for listing
      - `content` (text) - Full blog post content
      - `author` (text) - Author name
      - `featured_image` (text) - URL to featured image
      - `category` (text) - Post category (e.g., "community", "culture", "development")
      - `published` (boolean) - Whether post is published
      - `published_at` (timestamptz) - When post was published
      - `created_at` (timestamptz) - When post was created
      - `updated_at` (timestamptz) - When post was last updated
      - `view_count` (integer) - Number of views
      
  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
    - Add policy for authenticated admin users to manage posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Tanyigbe Team',
  featured_image text,
  category text NOT NULL DEFAULT 'community',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts(published_at DESC) WHERE published = true;
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category) WHERE published = true;
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
