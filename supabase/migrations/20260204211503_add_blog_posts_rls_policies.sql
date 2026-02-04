/*
  # Add RLS Policies for Blog Posts Management

  1. New Policies
    - Allow authenticated users with blog permissions to view all posts (including drafts)
    - Allow blog editors to create new posts
    - Allow blog editors to update posts
    - Allow blog editors to delete posts
    - Allow super_admin users full access to all operations

  2. Security
    - All policies check for proper authentication
    - Policies verify user has appropriate role permissions
    - Super admin role has full access to all operations
*/

-- Drop the existing restrictive SELECT policy and create new ones
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;

-- Allow anyone to view published posts
CREATE POLICY "Anyone can view published posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

-- Allow authenticated users with permissions to view all posts (including drafts)
CREATE POLICY "Blog editors can view all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_edit_blogs')::boolean = true
        OR (r.permissions->>'can_create_blogs')::boolean = true
      )
    )
  );

-- Allow blog editors to create posts
CREATE POLICY "Blog editors can create posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_create_blogs')::boolean = true
      )
    )
  );

-- Allow blog editors to update posts
CREATE POLICY "Blog editors can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_edit_blogs')::boolean = true
      )
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_edit_blogs')::boolean = true
      )
    )
  );

-- Allow blog editors to delete posts
CREATE POLICY "Blog editors can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_delete_blogs')::boolean = true
      )
    )
  );
