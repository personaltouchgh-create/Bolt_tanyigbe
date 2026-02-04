/*
  # Add RLS Policies for Gallery Categories and Tags

  1. New Policies
    - Allow anyone to view gallery categories and tags
    - Allow gallery editors to create, update, and delete categories
    - Allow gallery editors to create, update, and delete tags
    - Allow super_admin users full access to all operations

  2. Security
    - All modification policies check for proper authentication
    - Policies verify user has appropriate role permissions
    - Super admin role has full access to all operations
*/

-- Gallery Categories policies
CREATE POLICY "Anyone can view gallery categories"
  ON gallery_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Gallery editors can create categories"
  ON gallery_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_gallery')::boolean = true
      )
    )
  );

CREATE POLICY "Gallery editors can update categories"
  ON gallery_categories
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_gallery')::boolean = true
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
        OR (r.permissions->>'can_manage_gallery')::boolean = true
      )
    )
  );

CREATE POLICY "Gallery editors can delete categories"
  ON gallery_categories
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_gallery')::boolean = true
      )
    )
  );

-- Gallery Tags policies
CREATE POLICY "Anyone can view gallery tags"
  ON gallery_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Gallery editors can create tags"
  ON gallery_tags
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_gallery')::boolean = true
      )
    )
  );

CREATE POLICY "Gallery editors can update tags"
  ON gallery_tags
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_gallery')::boolean = true
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
        OR (r.permissions->>'can_manage_gallery')::boolean = true
      )
    )
  );

CREATE POLICY "Gallery editors can delete tags"
  ON gallery_tags
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_gallery')::boolean = true
      )
    )
  );
