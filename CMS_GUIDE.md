# CMS User Guide

## Overview

The Tanyigbe Community Website now features a comprehensive Content Management System (CMS) with role-based permissions, allowing administrators to manage content efficiently and securely.

## Features

### 1. Role-Based Access Control

The CMS includes five default roles with specific permissions:

#### Super Admin
- Full system access
- Can manage roles and assign permissions
- Can create, edit, and publish all content
- Can edit pages, manage gallery, and create blogs

#### Blog Editor
- Can create, edit, publish, and delete blog posts
- Cannot manage gallery or edit pages

#### Gallery Editor
- Can upload and manage gallery images
- Cannot create blogs or edit pages

#### Page Editor
- Can edit page content using the drag-and-drop visual editor
- Cannot manage blogs or gallery

#### Content Manager
- Combined permissions for blogs, gallery, and pages
- Can create and edit all content types
- Ideal for full-time content managers

### 2. Drag-and-Drop Page Editor

The visual page editor allows authorized users to edit page content without coding:

#### Features:
- **Visual editing**: See changes in real-time
- **Drag-and-drop blocks**: Add text, images, videos, and more
- **Pre-built layouts**: Choose from column layouts and sections
- **Responsive design**: Preview and edit for different screen sizes
- **Version control**: Each save creates a new version
- **Auto-publish**: Changes go live immediately after saving

#### How to Use:
1. Navigate to **Admin → Page Editor**
2. Select the page you want to edit
3. Use the toolbar to:
   - Add new blocks (text, images, buttons, etc.)
   - Drag elements to rearrange them
   - Click on elements to edit their properties
   - Style elements using the style panel
4. Click **Save Changes** when done

### 3. Blog Management

Create and publish blog posts with rich content:

#### Features:
- **Rich text editor**: Format text, add links, and embed media
- **Featured images**: Add eye-catching visuals
- **Categories and tags**: Organize content
- **Draft/Published status**: Control visibility
- **SEO fields**: Optimize for search engines

#### How to Use:
1. Navigate to **Admin → Blog Posts**
2. Click **New Post**
3. Fill in:
   - Title
   - Slug (URL-friendly version)
   - Excerpt (brief summary)
   - Content (main article)
   - Featured image URL
4. Set status to Draft or Published
5. Click **Save**

#### Permissions Required:
- `can_create_blogs`: Create new posts
- `can_edit_blogs`: Edit existing posts
- `can_publish_blogs`: Publish/unpublish posts
- `can_delete_blogs`: Delete posts

### 4. Gallery Management

Upload and organize images:

#### Features:
- **Image uploads**: Add images with titles and descriptions
- **Categories**: Organize by themes
- **Tags**: Add flexible labels
- **Alt text**: Improve accessibility and SEO
- **Thumbnails**: Optimize loading times

#### How to Use:
1. Navigate to **Admin → Gallery Images**
2. Click **Add Image**
3. Enter:
   - Title
   - Alt text (for accessibility)
   - Image URL (or upload)
   - Thumbnail URL (optional)
   - Select categories and tags
4. Click **Create**

#### Permissions Required:
- `can_upload_gallery`: Upload new images
- `can_manage_gallery`: Edit and delete images

### 5. Role Management (Super Admin Only)

Assign roles to users to control their permissions:

#### How to Assign Roles:
1. Navigate to **Admin → Role Management**
2. In the "Assign Role to User" section:
   - Select a user from the dropdown
   - Select a role from the dropdown
   - Click **Assign Role**
3. View all user-role assignments in the table below
4. Click the trash icon to remove a role from a user

#### Available Roles:
Each role is displayed with its permissions. Super admins can see:
- Role name
- Role description
- All permissions granted by the role

## Getting Started

### For First-Time Administrators

1. **Sign Up**: Create an account at `/admin/signup`
2. **Request Role Assignment**: Contact an existing super admin to assign you a role
3. **Log In**: Access the admin panel at `/admin/login`
4. **Explore**: Based on your assigned role, explore the features available to you

### For Super Admins

1. **Assign Roles**: Go to Role Management and assign appropriate roles to new users
2. **Monitor Content**: Check the Dashboard for content statistics
3. **Manage Permissions**: Create new roles or modify existing ones as needed

## Dashboard

The dashboard provides:
- **Your Roles**: View all roles assigned to you
- **Quick Actions**: Shortcuts based on your permissions
- **Content Statistics**: See total images, posts, categories, and tags

## Security Notes

- All tables use Row Level Security (RLS) policies
- Users can only access content they have permissions for
- Role assignments are audit-trailed with `assigned_by` field
- Passwords are securely hashed by Supabase Auth
- Enable password breach detection in Supabase Dashboard for enhanced security

## Technical Details

### Database Schema

The CMS uses the following main tables:
- `roles`: Role definitions with permissions JSON
- `user_roles`: User-role assignments
- `pages`: Page metadata
- `page_content`: Versioned page content (HTML, CSS, JSON)
- `page_blocks`: Reusable content blocks
- `blog_posts`: Blog articles
- `gallery_images`: Image metadata
- `gallery_categories`: Image categories
- `gallery_tags`: Image tags

### Permissions List

```json
{
  "can_manage_roles": "Manage roles and permissions",
  "can_manage_users": "Manage user accounts",
  "can_create_blogs": "Create blog posts",
  "can_edit_blogs": "Edit blog posts",
  "can_publish_blogs": "Publish/unpublish posts",
  "can_delete_blogs": "Delete blog posts",
  "can_upload_gallery": "Upload gallery images",
  "can_manage_gallery": "Edit/delete gallery images",
  "can_edit_pages": "Edit page content",
  "can_manage_pages": "Manage page metadata"
}
```

## Troubleshooting

### I can't see certain menu items
- Check with your super admin to confirm your assigned roles
- Some features require specific permissions

### Changes aren't saving
- Ensure you have the required permissions
- Check your internet connection
- Try logging out and back in

### I need additional permissions
- Contact your super admin
- Request the specific role or permission you need

## Support

For technical support or feature requests, contact your system administrator.
