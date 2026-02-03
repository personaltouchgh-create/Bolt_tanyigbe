# Database Setup Instructions

## Quick Start

Your Supabase database is ready to be initialized with the community website schema.

### Step 1: Access Supabase Dashboard

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project: `wsohhifdbjmflmpdzpxp`

### Step 2: Run the Initialization Script

1. Click on **SQL Editor** in the left sidebar
2. Click **New Query**
3. Open the file `scripts/init-database.sql` from this project
4. Copy all the contents
5. Paste into the Supabase SQL Editor
6. Click **Run** or press `Ctrl+Enter`

### Step 3: Verify Installation

After running the script, verify the tables were created:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
```

You should see these 8 tables:
- `contact_submissions`
- `donations`
- `volunteers`
- `events`
- `news_articles`
- `newsletter_subscriptions`
- `gallery_images`
- `diaspora_registrations`

## Database Schema Overview

### Core Tables

#### 1. Contact Submissions
Stores contact form submissions from visitors
- Public can submit
- Admins can view and manage

#### 2. Donations
Tracks donation records and pledges
- Public can submit donations
- Supports multiple donation types
- Anonymous donations supported

#### 3. Volunteers
Stores volunteer applications
- Public can apply
- Admins manage applications
- Tracks skills and availability

#### 4. Events
Community events and activities
- Admins create and manage
- Public can view published events
- Categories: cultural, development, education, health, community

#### 5. News Articles
Community news and updates
- Admins create and publish
- Public can view published articles
- SEO-friendly slugs

#### 6. Newsletter Subscriptions
Email newsletter subscribers
- Public can subscribe
- Admins manage subscriptions

#### 7. Gallery Images
Community photo gallery
- Admins upload and manage
- Public can view all images
- Categories: culture, development, events, tourism

#### 8. Diaspora Registrations
Network of Tanyigbe members abroad
- Public can register
- Tracks location and profession
- Enables community connections

## Security

All tables have Row Level Security (RLS) enabled with appropriate policies:

- **Public Access**: Can submit forms, view published content
- **Authenticated Access**: Can manage all content, view all submissions
- **Data Protection**: Sensitive submissions only visible to authenticated users

## Next Steps

After database setup:

1. Create an admin account using the signup page
2. Access the admin dashboard at `/admin`
3. Start adding content (events, news, gallery images)
4. Test form submissions (contact, donations, volunteers)

## Troubleshooting

If you encounter any errors:

1. Check that you're logged into the correct Supabase project
2. Ensure you have the necessary permissions
3. The script uses `IF NOT EXISTS` so it's safe to run multiple times
4. Check the Supabase logs for detailed error messages

## Support

For issues or questions, please refer to:
- Supabase Documentation: [https://supabase.com/docs](https://supabase.com/docs)
- Project README: `README.md`
