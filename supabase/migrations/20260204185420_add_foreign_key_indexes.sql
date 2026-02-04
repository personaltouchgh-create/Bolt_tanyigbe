/*
  # Add Foreign Key Indexes for Optimal Query Performance

  ## Overview
  This migration adds indexes on foreign key columns to ensure optimal query performance
  when joining or filtering on these relationships.

  ## Changes Made

  ### 1. Foreign Key Indexes Added
    - `idx_blog_attachments_uploaded_by` on `blog_attachments(uploaded_by)`
    - `idx_gallery_categories_created_by` on `gallery_categories(created_by)`
    - `idx_gallery_tags_created_by` on `gallery_tags(created_by)`
    - `idx_image_categories_created_by` on `image_categories(created_by)`
    - `idx_image_tags_created_by` on `image_tags(created_by)`

  ## Why Foreign Key Indexes Matter

  Foreign keys without indexes can cause:
  - Slow JOIN operations between tables
  - Inefficient CASCADE DELETE operations
  - Lock contention during concurrent writes
  - Full table scans when filtering by the foreign key

  Even if these columns aren't heavily queried yet, having indexes ensures:
  - Future queries will perform well as data grows
  - Admin interfaces can efficiently query by creator
  - Database integrity operations (CASCADE) are fast
  - Query optimizer has more options for execution plans

  ## Performance Impact
    - Minimal storage overhead (indexes are small for UUID columns)
    - Slight overhead on INSERT/UPDATE operations
    - Significant performance gains on JOIN and foreign key operations
    - Better scalability as dataset grows
*/

-- Add indexes for foreign key columns that track user relationships

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