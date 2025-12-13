import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  featured_image: string | null;
  category: string;
  published_at: string;
  view_count: number;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'History', name: 'History' },
    { id: 'Culture', name: 'Culture' },
    { id: 'Traditional Governance', name: 'Traditional Governance' },
    { id: 'Tourism', name: 'Tourism' },
    { id: 'Development', name: 'Development' },
  ];

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query;

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#E2A201] to-[#4C7000]">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Community Blog</h1>
          <p className="text-xl md:text-2xl">Stories, News & Updates from Tanyigbe</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#E2A201] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#E2A201]"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-50 rounded-lg p-12 max-w-2xl mx-auto">
                <Tag size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">No Posts Yet</h3>
                <p className="text-gray-600">
                  {selectedCategory === 'all'
                    ? 'Check back soon for updates from the Tanyigbe community!'
                    : `No posts in the ${categories.find((c) => c.id === selectedCategory)?.name} category yet.`}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#E2A201] to-[#4C7000] flex items-center justify-center">
                        <span className="text-white text-4xl font-serif font-bold">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#E2A201] text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 hover:text-[#E2A201] transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye size={16} className="mr-1" />
                        <span>{post.view_count}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#E2A201] font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-serif text-[#E2A201] mb-2">Stay Connected</p>
            <p className="text-lg text-gray-300">
              Follow us on social media for the latest updates and stories from our community
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
