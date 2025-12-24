# Content Management System (CMS) Documentation

## Overview

A complete CMS has been integrated into your Tanyigbe community website, allowing admin users to manage gallery images and blog posts through an intuitive dashboard.

## Features

### Gallery Management
- Upload and manage image assets
- Organize images with categories and tags
- Add titles and alt text for accessibility
- Support for thumbnails
- Full CRUD operations

### Blog/Publications Engine
- Create and edit blog posts with HTML content
- Draft and published workflow
- Featured images support
- Excerpt management
- File attachments (PDFs)
- SEO-friendly slugs

### Taxonomy System
- Manage categories for organizing images
- Create tags for flexible image tagging
- Full CRUD operations for both

## Getting Started

### 1. Create Your First Admin User

To create the first admin user, use Supabase's authentication:

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Click "Add User" and create a new user with email/password
4. The system will automatically create an admin profile when the user signs up through the app

Alternatively, you can sign up directly through the application:

```
Visit: /admin/login
Click "Sign Up" (if you add a signup option)
Or use Supabase's auth UI
```

### 2. Access the Admin Dashboard

Once you have an admin user:

1. Navigate to `/admin/login`
2. Enter your email and password
3. You'll be redirected to `/admin/dashboard`

## Admin Dashboard Sections

### Dashboard (`/admin/dashboard`)
- Overview of all content
- Quick stats (images, posts, categories, tags)
- Quick action links

### Gallery Images (`/admin/gallery`)
- View all uploaded images in a grid
- Add new images by providing URLs
- Edit image metadata (title, alt text, categories, tags)
- Delete images

**Adding Images:**
- Click "Add Image"
- Enter title and alt text
- Provide image URL (can be from `/public` folder or external)
- Optionally add thumbnail URL
- Select categories (at least one recommended)
- Select tags (optional)

### Categories (`/admin/categories`)
- Manage gallery categories
- Create, edit, and delete categories
- Auto-generate SEO-friendly slugs

**Default Categories:**
- Community
- Culture
- Festivals
- Developments
- Tourism

### Tags (`/admin/tags`)
- Manage gallery tags
- Create, edit, and delete tags
- Auto-generate SEO-friendly slugs

### Blog Posts (`/admin/posts`)
- View all blog posts (drafts and published)
- Toggle publish status
- Edit existing posts
- Delete posts

**Creating/Editing Posts:**
1. Click "New Post" or edit an existing post
2. Enter post title (slug auto-generates)
3. Add excerpt for previews
4. Enter featured image URL
5. Write content in HTML format
6. Save as draft or publish immediately

**Workflow:**
- Posts start as "draft" status
- Click "Publish" to make posts live
- Click the eye icon to toggle publish status
- Published posts show on the public blog

## Database Schema

### Tables Created

1. **admin_profiles** - Admin user profiles
2. **gallery_categories** - Image categories
3. **gallery_tags** - Image tags
4. **gallery_images** - Image metadata (enhanced existing table)
5. **image_categories** - Many-to-many: images to categories
6. **image_tags** - Many-to-many: images to tags
7. **blog_posts** - Blog content (enhanced existing table)
8. **blog_attachments** - PDF/file attachments for posts

### Security

All tables are protected with Row Level Security (RLS):
- Only authenticated admin users can access CMS data
- Full CRUD permissions for authenticated users
- Public users cannot access admin functionality

## Content Guidelines

### Images
- Use descriptive titles
- Always provide alt text for accessibility
- Assign at least one category
- Use tags for better organization
- Supported formats: JPG, PNG, WebP

### Blog Posts
- Write clear, engaging titles
- Provide excerpts for better previews
- Use semantic HTML in content
- Add featured images for visual appeal
- Use draft status while writing

## HTML Content Tips

The blog editor accepts HTML. Here are some useful tags:

```html
<h2>Section Heading</h2>
<p>Paragraph text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<ul>
  <li>List item</li>
</ul>
<a href="url">Link text</a>
<img src="url" alt="description" />
```

## Integrating with Public Pages

The existing Gallery and Blog pages can be updated to pull data from the CMS instead of using hardcoded content. The database structure is ready for this integration.

## Troubleshooting

### Can't log in?
- Verify your email and password in Supabase
- Check that your user has an entry in `admin_profiles`

### Images not showing?
- Verify the image URL is accessible
- Check browser console for errors
- Ensure images are in the `/public` folder or hosted externally

### Posts not appearing?
- Check post status (must be "published")
- Verify `published_at` date is set
- Check browser console for errors

## Support

For technical issues:
1. Check browser console for errors
2. Verify database connections in Supabase
3. Review RLS policies if access is denied
4. Check that authentication is working

## Future Enhancements

Potential improvements:
- Rich text WYSIWYG editor (TinyMCE, CKEditor)
- Direct file upload to Supabase Storage
- Image optimization and resizing
- Bulk operations
- User roles and permissions
- Content scheduling
- SEO metadata management
- Analytics integration
