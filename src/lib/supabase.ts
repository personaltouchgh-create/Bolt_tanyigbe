import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'new' | 'in_progress' | 'resolved';
  created_at?: string;
};

export type Donation = {
  id?: string;
  donor_name: string;
  email: string;
  phone?: string;
  amount: number;
  currency?: string;
  donation_type?: 'education' | 'health' | 'infrastructure' | 'agriculture' | 'general';
  is_anonymous?: boolean;
  payment_status?: 'pending' | 'completed' | 'failed';
  notes?: string;
  created_at?: string;
};

export type Volunteer = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  skills?: string[];
  availability: string;
  areas_of_interest?: string[];
  experience?: string;
  status?: 'pending' | 'approved' | 'active' | 'inactive';
  created_at?: string;
};

export type Event = {
  id?: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  category?: 'cultural' | 'development' | 'education' | 'health' | 'community';
  image_url?: string;
  is_published?: boolean;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
};

export type NewsArticle = {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category?: 'general' | 'education' | 'health' | 'development' | 'culture';
  image_url?: string;
  author: string;
  is_published?: boolean;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type NewsletterSubscription = {
  id?: string;
  email: string;
  name?: string;
  status?: 'active' | 'unsubscribed';
  subscribed_at?: string;
  unsubscribed_at?: string;
};

export type GalleryImage = {
  id?: string;
  title: string;
  description?: string;
  image_url: string;
  category?: 'culture' | 'development' | 'events' | 'tourism';
  is_featured?: boolean;
  uploaded_by?: string;
  created_at?: string;
};

export type DiasporaRegistration = {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  division_of_origin: 'etoe' | 'gbogame' | 'avedome' | 'dugame';
  current_location: string;
  profession?: string;
  contribution_interests?: string;
  receive_updates?: boolean;
  status?: 'active' | 'inactive';
  created_at?: string;
  updated_at?: string;
};
