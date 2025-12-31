/*
  # Fix Database Indexes and Performance Issues

  ## Overview
  This migration addresses performance and security issues by optimizing database indexes.

  ## Changes Made

  ### 1. Add Missing Foreign Key Indexes
  Foreign keys without indexes can cause slow queries and table locks. Adding indexes for:
  - `blog_attachments.post_id` - Improves attachment lookups by post
  - `blog_posts.author_id` - Improves author's posts queries
  - `image_categories.category_id` - Improves category-based image filtering
  - `image_tags.tag_id` - Improves tag-based image filtering

  ### 2. Remove Unused Indexes
  Unused indexes waste storage and slow down write operations:
  - `idx_gallery_categories_created_by` - Not being utilized by queries
  - `idx_gallery_tags_created_by` - Not being utilized by queries

  ## Performance Impact
  - Faster foreign key constraint checks
  - Improved query performance for joins and lookups
  - Reduced storage overhead from unused indexes
  - Better write performance (fewer indexes to maintain)

  ## Security Notes
  - Properly indexed foreign keys reduce lock contention
  - Improves overall database responsiveness
*/

-- Add missing foreign key indexes for optimal query performance

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

-- Remove unused indexes that waste storage and slow down writes

-- Drop unused index on gallery_categories
DROP INDEX IF EXISTS idx_gallery_categories_created_by;

-- Drop unused index on gallery_tags
DROP INDEX IF EXISTS idx_gallery_tags_created_by;