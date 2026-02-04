/*
  # Add DELETE Policy for Pages Table

  1. New Policy
    - Allow page managers to delete pages
    - Allow super_admin users to delete pages

  2. Security
    - Only users with can_manage_pages permission can delete pages
    - Super admin role has full access
*/

CREATE POLICY "Admins can delete pages"
  ON pages
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND (
        r.name = 'super_admin'
        OR (r.permissions->>'can_manage_pages')::boolean = true
      )
    )
  );
