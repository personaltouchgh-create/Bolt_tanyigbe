/*
  # Add SELECT Policy for Blog Attachments

  1. New Policy
    - Allow anyone to view blog attachments

  2. Security
    - Public read access for attachments
*/

CREATE POLICY "Anyone can view blog attachments"
  ON blog_attachments
  FOR SELECT
  TO public
  USING (true);
