/*
  # Allow Super Admins to View All User Roles

  1. New Policy
    - Allow super_admins to view all user role assignments
    - This is needed for the role management page

  2. Security
    - Only super_admin role can view all user roles
    - Regular users can still only view their own roles
*/

-- Add policy for super admins to view all user roles
CREATE POLICY "Super admins can view all user roles"
  ON user_roles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND r.name = 'super_admin'
    )
  );
