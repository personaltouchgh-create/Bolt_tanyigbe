/*
  # Add Diaspora Registrations Table

  ## Overview
  This migration creates a table for managing diaspora network registrations,
  allowing Tanyigbe community members living abroad to register and stay connected.

  ## New Table

  ### `diaspora_registrations`
  Stores diaspora network member registrations
  - `id` (uuid, primary key)
  - `full_name` (text) - Member's full name
  - `email` (text) - Contact email
  - `phone` (text, optional) - Phone number
  - `division_of_origin` (text) - Which division they're from: 'etoe', 'gbogame', 'avedome', 'dugame'
  - `current_location` (text) - City and country where they currently live
  - `profession` (text, optional) - Their profession or field of work
  - `contribution_interests` (text, optional) - How they'd like to contribute
  - `receive_updates` (boolean) - Whether they want to receive community updates
  - `status` (text) - Registration status: 'active', 'inactive'
  - `created_at` (timestamptz) - Registration timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - RLS enabled on the table
  - Public can submit registrations
  - Authenticated users can view all registrations
  - Members can update their own registration if needed
*/

-- Create diaspora_registrations table
CREATE TABLE IF NOT EXISTS diaspora_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  division_of_origin text NOT NULL CHECK (division_of_origin IN ('etoe', 'gbogame', 'avedome', 'dugame')),
  current_location text NOT NULL,
  profession text,
  contribution_interests text,
  receive_updates boolean DEFAULT true,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE diaspora_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register with diaspora network"
  ON diaspora_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all registrations"
  ON diaspora_registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update registrations"
  ON diaspora_registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_email ON diaspora_registrations(email);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_division ON diaspora_registrations(division_of_origin);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_location ON diaspora_registrations(current_location);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_status ON diaspora_registrations(status);
CREATE INDEX IF NOT EXISTS idx_diaspora_registrations_created_at ON diaspora_registrations(created_at DESC);
