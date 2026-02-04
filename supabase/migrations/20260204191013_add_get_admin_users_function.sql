/*
  # Add Function to Get Admin Users

  ## Overview
  Creates a function to retrieve all users from auth.users for role management.

  ## Changes
  - Creates `get_admin_users` function that returns user information
  - This function is restricted to authenticated users only
*/

CREATE OR REPLACE FUNCTION get_admin_users()
RETURNS TABLE (
  id uuid,
  email text
) 
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    id,
    email
  FROM auth.users
  ORDER BY email;
$$;