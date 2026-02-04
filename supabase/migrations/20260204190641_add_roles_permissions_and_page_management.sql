/*
  # Add Roles, Permissions, and Page Content Management

  ## Overview
  This migration creates a comprehensive role-based permission system and page content
  management capabilities for the CMS. It enables granular control over who can create
  blogs, manage galleries, and edit page content using a drag-and-drop editor.

  ## New Tables Created

  ### 1. Roles (`roles`)
  System roles with specific permissions
  - `id` (uuid, primary key)
  - `name` (text, unique) - Role name (e.g., 'super_admin', 'blog_editor')
  - `description` (text)
  - `permissions` (jsonb) - JSON object defining what this role can do
  - `created_at` (timestamptz)

  ### 2. User Roles (`user_roles`)
  Junction table linking users to their roles
  - `user_id` (uuid, FK to auth.users)
  - `role_id` (uuid, FK to roles)
  - `assigned_at` (timestamptz)
  - `assigned_by` (uuid, FK to auth.users)

  ### 3. Pages (`pages`)
  Stores metadata for all pages in the site
  - `id` (uuid, primary key)
  - `title` (text) - Page title
  - `slug` (text, unique) - URL-friendly identifier
  - `route` (text, unique) - React Router path
  - `description` (text)
  - `is_editable` (boolean) - Whether page content can be edited via CMS
  - `meta_title` (text) - SEO title
  - `meta_description` (text) - SEO description
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. Page Content (`page_content`)
  Stores the actual content for each page
  - `id` (uuid, primary key)
  - `page_id` (uuid, FK to pages)
  - `version` (integer) - Version number for content history
  - `content_json` (jsonb) - GrapesJS JSON structure
  - `content_html` (text) - Rendered HTML
  - `content_css` (text) - Associated CSS styles
  - `is_published` (boolean) - Whether this version is live
  - `created_by` (uuid, FK to auth.users)
  - `created_at` (timestamptz)

  ### 5. Page Blocks (`page_blocks`)
  Reusable content blocks that can be used across pages
  - `id` (uuid, primary key)
  - `name` (text) - Block name for identification
  - `description` (text)
  - `block_json` (jsonb) - GrapesJS block structure
  - `block_html` (text) - Rendered HTML
  - `block_css` (text) - Associated CSS
  - `category` (text) - Block category (header, footer, hero, etc.)
  - `thumbnail_url` (text) - Preview image
  - `created_by` (uuid, FK to auth.users)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Table Modifications

  ### Existing `admin_profiles` table
  - Add `is_active` column (boolean) - Whether admin account is active
  - Remove hardcoded role, will use user_roles instead

  ### Existing `blog_attachments` table
  - Add `uploaded_by` column (FK to auth.users)

  ## Security
  - Enable RLS on all new tables
  - Role-based policies for granular access control
  - Only super_admins can manage roles
  - Users with appropriate permissions can manage their assigned content areas

  ## Default Roles Created
  1. **super_admin**: Full system access, can manage everything
  2. **blog_editor**: Can create, edit, and publish blog posts
  3. **gallery_editor**: Can upload and manage gallery images
  4. **page_editor**: Can edit page content using the drag-and-drop editor
  5. **content_manager**: Blog + Gallery + Page editing permissions
*/

-- ============================================
-- CREATE NEW TABLES
-- ============================================

-- Create roles table
CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  permissions jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create user_roles junction table
CREATE TABLE IF NOT EXISTS user_roles (
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id uuid REFERENCES roles(id) ON DELETE CASCADE,
  assigned_at timestamptz DEFAULT now(),
  assigned_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  PRIMARY KEY (user_id, role_id)
);

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  route text UNIQUE NOT NULL,
  description text,
  is_editable boolean DEFAULT true,
  meta_title text,
  meta_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page_content table
CREATE TABLE IF NOT EXISTS page_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  version integer DEFAULT 1,
  content_json jsonb DEFAULT '{}'::jsonb,
  content_html text DEFAULT '',
  content_css text DEFAULT '',
  is_published boolean DEFAULT false,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

-- Create page_blocks table
CREATE TABLE IF NOT EXISTS page_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  block_json jsonb DEFAULT '{}'::jsonb,
  block_html text DEFAULT '',
  block_css text DEFAULT '',
  category text DEFAULT 'general',
  thumbnail_url text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- ============================================
-- MODIFY EXISTING TABLES
-- ============================================

-- Add columns to admin_profiles if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'admin_profiles' AND column_name = 'is_active'
  ) THEN
    ALTER TABLE admin_profiles ADD COLUMN is_active boolean DEFAULT true;
  END IF;
END $$;

-- Add uploaded_by to blog_attachments
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'blog_attachments' AND column_name = 'uploaded_by'
  ) THEN
    ALTER TABLE blog_attachments ADD COLUMN uploaded_by uuid REFERENCES auth.users(id) ON DELETE SET NULL;
  END IF;
END $$;

-- ============================================
-- CREATE INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_user_roles_user ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON user_roles(role_id);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_route ON pages(route);
CREATE INDEX IF NOT EXISTS idx_pages_is_editable ON pages(is_editable);
CREATE INDEX IF NOT EXISTS idx_page_content_page ON page_content(page_id);
CREATE INDEX IF NOT EXISTS idx_page_content_is_published ON page_content(is_published);
CREATE INDEX IF NOT EXISTS idx_page_content_version ON page_content(page_id, version DESC);
CREATE INDEX IF NOT EXISTS idx_page_blocks_category ON page_blocks(category);
CREATE INDEX IF NOT EXISTS idx_page_blocks_created_by ON page_blocks(created_by);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_blocks ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES
-- ============================================

-- Roles Policies (only super_admins can manage roles)
CREATE POLICY "Anyone can view roles"
  ON roles FOR SELECT
  USING (true);

CREATE POLICY "Super admins can create roles"
  ON roles FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
    )
  );

CREATE POLICY "Super admins can update roles"
  ON roles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
    )
  );

CREATE POLICY "Super admins can delete roles"
  ON roles FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
    )
  );

-- User Roles Policies
CREATE POLICY "Users can view their own roles"
  ON user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR EXISTS (
    SELECT 1 FROM user_roles ur
    JOIN roles r ON ur.role_id = r.id
    WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
  ));

CREATE POLICY "Super admins can assign roles"
  ON user_roles FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
    )
  );

CREATE POLICY "Super admins can remove roles"
  ON user_roles FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'super_admin'
    )
  );

-- Pages Policies
CREATE POLICY "Anyone can view pages"
  ON pages FOR SELECT
  USING (true);

CREATE POLICY "Admins can create pages"
  ON pages FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_manage_pages' = 'true')
    )
  );

CREATE POLICY "Admins can update pages"
  ON pages FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_manage_pages' = 'true')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_manage_pages' = 'true')
    )
  );

-- Page Content Policies
CREATE POLICY "Anyone can view published content"
  ON page_content FOR SELECT
  USING (is_published = true OR EXISTS (
    SELECT 1 FROM user_roles ur
    JOIN roles r ON ur.role_id = r.id
    WHERE ur.user_id = auth.uid() 
    AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
  ));

CREATE POLICY "Page editors can create content"
  ON page_content FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  );

CREATE POLICY "Page editors can update content"
  ON page_content FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  );

CREATE POLICY "Page editors can delete content versions"
  ON page_content FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  );

-- Page Blocks Policies
CREATE POLICY "Anyone can view blocks"
  ON page_blocks FOR SELECT
  USING (true);

CREATE POLICY "Page editors can create blocks"
  ON page_blocks FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  );

CREATE POLICY "Page editors can update blocks"
  ON page_blocks FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  );

CREATE POLICY "Page editors can delete blocks"
  ON page_blocks FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() 
      AND (r.name = 'super_admin' OR r.permissions->>'can_edit_pages' = 'true')
    )
  );

-- ============================================
-- TRIGGERS
-- ============================================

-- Add trigger for pages
DROP TRIGGER IF EXISTS update_pages_updated_at ON pages;
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add trigger for page_blocks
DROP TRIGGER IF EXISTS update_page_blocks_updated_at ON page_blocks;
CREATE TRIGGER update_page_blocks_updated_at
  BEFORE UPDATE ON page_blocks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INSERT DEFAULT ROLES
-- ============================================

-- Insert default roles with their permissions
INSERT INTO roles (name, description, permissions) VALUES
  (
    'super_admin',
    'Full system access with all permissions',
    '{"can_manage_roles": true, "can_manage_users": true, "can_create_blogs": true, "can_edit_blogs": true, "can_publish_blogs": true, "can_delete_blogs": true, "can_upload_gallery": true, "can_manage_gallery": true, "can_edit_pages": true, "can_manage_pages": true}'::jsonb
  ),
  (
    'blog_editor',
    'Can create, edit, and publish blog posts',
    '{"can_create_blogs": true, "can_edit_blogs": true, "can_publish_blogs": true, "can_delete_blogs": true}'::jsonb
  ),
  (
    'gallery_editor',
    'Can upload and manage gallery images',
    '{"can_upload_gallery": true, "can_manage_gallery": true}'::jsonb
  ),
  (
    'page_editor',
    'Can edit page content using the drag-and-drop editor',
    '{"can_edit_pages": true}'::jsonb
  ),
  (
    'content_manager',
    'Can manage blogs, gallery, and page content',
    '{"can_create_blogs": true, "can_edit_blogs": true, "can_publish_blogs": true, "can_delete_blogs": true, "can_upload_gallery": true, "can_manage_gallery": true, "can_edit_pages": true}'::jsonb
  )
ON CONFLICT (name) DO NOTHING;

-- ============================================
-- INSERT DEFAULT PAGES
-- ============================================

-- Insert all existing pages so they can be managed via CMS
INSERT INTO pages (title, slug, route, description, is_editable, meta_title, meta_description) VALUES
  ('Home', 'home', '/', 'Community homepage', true, 'Tanyigbe Community', 'Welcome to the Tanyigbe community website'),
  ('About', 'about', '/about', 'About our community', true, 'About Tanyigbe', 'Learn about the Tanyigbe community'),
  ('History', 'history', '/history', 'Community history', true, 'Our History', 'Discover the rich history of Tanyigbe'),
  ('Culture', 'culture', '/culture', 'Cultural heritage', true, 'Our Culture', 'Explore Tanyigbe cultural traditions'),
  ('Development', 'development', '/development', 'Development initiatives', true, 'Development Projects', 'Community development initiatives'),
  ('Diaspora', 'diaspora', '/diaspora', 'Diaspora information', true, 'Tanyigbe Diaspora', 'Connect with Tanyigbe diaspora community'),
  ('Gallery', 'gallery', '/gallery', 'Photo gallery', true, 'Photo Gallery', 'Browse our community photo gallery'),
  ('Blog', 'blog', '/blog', 'Community blog', false, 'Community Blog', 'Read the latest news and updates'),
  ('Contact', 'contact', '/contact', 'Contact information', true, 'Contact Us', 'Get in touch with us'),
  ('Tanyigbe Anyigbe', 'tanyigbe-anyigbe', '/divisions/tanyigbe-anyigbe', 'Tanyigbe Anyigbe division', true, 'Tanyigbe Anyigbe', 'Learn about Tanyigbe Anyigbe'),
  ('Tanyigbe Atidze', 'tanyigbe-atidze', '/divisions/tanyigbe-atidze', 'Tanyigbe Atidze division', true, 'Tanyigbe Atidze', 'Learn about Tanyigbe Atidze'),
  ('Tanyigbe Dzafe', 'tanyigbe-dzafe', '/divisions/tanyigbe-dzafe', 'Tanyigbe Dzafe division', true, 'Tanyigbe Dzafe', 'Learn about Tanyigbe Dzafe'),
  ('Tanyigbe Etoe', 'tanyigbe-etoe', '/divisions/tanyigbe-etoe', 'Tanyigbe Etoe division', true, 'Tanyigbe Etoe', 'Learn about Tanyigbe Etoe')
ON CONFLICT (slug) DO NOTHING;