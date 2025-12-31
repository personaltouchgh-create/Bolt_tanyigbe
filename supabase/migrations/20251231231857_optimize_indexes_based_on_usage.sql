/*
  # Optimize Database Indexes Based on Usage Patterns

  ## Overview
  This migration adjusts indexes based on actual query patterns, adding indexes for
  frequently accessed foreign keys and removing unused indexes.

  ## Changes Made

  ### 1. Add Missing Foreign Key Indexes
  Adding indexes for foreign keys that are actively queried:
  - `gallery_categories.created_by` - Improves lookups of categories by creator
  - `gallery_tags.created_by` - Improves lookups of tags by creator

  ### 2. Remove Unused Indexes
  These indexes were created but are not being utilized by actual queries:
  - `idx_image_categories_category_id` - No queries using this pattern
  - `idx_image_tags_tag_id` - No queries using this pattern
  - `idx_blog_attachments_post_id` - No queries using this pattern
  - `idx_blog_posts_author_id` - No queries using this pattern

  ## Performance Impact
  - Adds indexes only where query patterns show they're needed
  - Removes unused indexes to improve write performance
  - Reduces storage overhead
  - Optimizes maintenance operations

  ## Notes
  - Indexes are valuable only if queries use them
  - Unused indexes slow down INSERT, UPDATE, and DELETE operations
  - Database will automatically use indexes when query patterns match
*/

-- Add indexes for foreign keys that are actually being queried

-- Index for gallery_categories.created_by foreign key
CREATE INDEX IF NOT EXISTS idx_gallery_categories_created_by 
  ON gallery_categories(created_by);

-- Index for gallery_tags.created_by foreign key
CREATE INDEX IF NOT EXISTS idx_gallery_tags_created_by 
  ON gallery_tags(created_by);

-- Remove indexes that are not being used by any queries

-- Drop unused index on image_categories
DROP INDEX IF EXISTS idx_image_categories_category_id;

-- Drop unused index on image_tags
DROP INDEX IF EXISTS idx_image_tags_tag_id;

-- Drop unused index on blog_attachments
DROP INDEX IF EXISTS idx_blog_attachments_post_id;

-- Drop unused index on blog_posts
DROP INDEX IF EXISTS idx_blog_posts_author_id;