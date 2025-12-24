import { useEffect, useState } from 'react';
import { Image, FileText, FolderOpen, Tags } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Stats {
  images: number;
  posts: number;
  categories: number;
  tags: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    images: 0,
    posts: 0,
    categories: 0,
    tags: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [imagesResult, postsResult, categoriesResult, tagsResult] = await Promise.all([
        supabase.from('gallery_images').select('id', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
        supabase.from('gallery_categories').select('id', { count: 'exact', head: true }),
        supabase.from('gallery_tags').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        images: imagesResult.count || 0,
        posts: postsResult.count || 0,
        categories: categoriesResult.count || 0,
        tags: tagsResult.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { name: 'Gallery Images', value: stats.images, icon: Image, color: 'bg-blue-500', href: '/admin/gallery' },
    { name: 'Blog Posts', value: stats.posts, icon: FileText, color: 'bg-green-500', href: '/admin/posts' },
    { name: 'Categories', value: stats.categories, icon: FolderOpen, color: 'bg-purple-500', href: '/admin/categories' },
    { name: 'Tags', value: stats.tags, icon: Tags, color: 'bg-orange-500', href: '/admin/tags' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your content management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card) => (
          <a
            key={card.name}
            href={card.href}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} rounded-lg p-3`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{card.value}</p>
            <p className="text-sm text-gray-600">{card.name}</p>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="/admin/gallery"
              className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <p className="font-medium text-gray-900">Upload New Images</p>
              <p className="text-sm text-gray-600">Add images to your gallery</p>
            </a>
            <a
              href="/admin/posts"
              className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <p className="font-medium text-gray-900">Create Blog Post</p>
              <p className="text-sm text-gray-600">Write and publish new content</p>
            </a>
            <a
              href="/admin/categories"
              className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <p className="font-medium text-gray-900">Manage Categories</p>
              <p className="text-sm text-gray-600">Organize your content</p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Info</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Total Images</span>
              <span className="font-semibold text-gray-900">{stats.images}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Total Posts</span>
              <span className="font-semibold text-gray-900">{stats.posts}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Categories</span>
              <span className="font-semibold text-gray-900">{stats.categories}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-600">Tags</span>
              <span className="font-semibold text-gray-900">{stats.tags}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
