/*
  # Optimize RLS Policies and Remove Unused Indexes

  ## Changes Made

  ### 1. Optimize RLS Policies for Performance
    - Update events table policy to use (SELECT auth.role()) instead of auth.role()
    - Update news_articles table policy to use (SELECT auth.role()) instead of auth.role()
    - This prevents re-evaluation of auth functions for each row, improving query performance at scale

  ### 2. Remove Unused Foreign Key Indexes
    - Remove idx_blog_attachments_uploaded_by
    - Remove idx_gallery_categories_created_by
    - Remove idx_gallery_tags_created_by
    - Remove idx_image_categories_created_by
    - Remove idx_image_tags_created_by
    - These indexes are not being used by any queries and only slow down write operations

  ## Performance Impact
    - RLS policies will execute significantly faster on large datasets
    - Write operations will be faster without maintaining unused indexes
    - Query planner will have fewer indexes to consider

  ## Security
    - No security regression - policies maintain the same access control logic
    - Improved performance makes the application more responsive
*/

-- 1. Optimize RLS policy on events table
DROP POLICY IF EXISTS "Users can view published events or all if authenticated" ON events;

CREATE POLICY "Users can view published events or all if authenticated"
  ON events FOR SELECT
  USING (
    is_published = true 
    OR 
    (SELECT auth.role()) = 'authenticated'
  );

-- 2. Optimize RLS policy on news_articles table
DROP POLICY IF EXISTS "Users can view published articles or all if authenticated" ON news_articles;

CREATE POLICY "Users can view published articles or all if authenticated"
  ON news_articles FOR SELECT
  USING (
    is_published = true 
    OR 
    (SELECT auth.role()) = 'authenticated'
  );

-- 3. Remove unused foreign key indexes
DROP INDEX IF EXISTS idx_blog_attachments_uploaded_by;
DROP INDEX IF EXISTS idx_gallery_categories_created_by;
DROP INDEX IF EXISTS idx_gallery_tags_created_by;
DROP INDEX IF EXISTS idx_image_categories_created_by;
DROP INDEX IF EXISTS idx_image_tags_created_by;