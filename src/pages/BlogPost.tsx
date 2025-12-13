import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Eye, ArrowLeft, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  featured_image: string | null;
  category: string;
  published_at: string;
  view_count: number;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostData[]>([]);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPost(data);
        incrementViewCount(data.id);
        fetchRelatedPosts(data.category, data.id);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const incrementViewCount = async (postId: string) => {
    try {
      const { data: currentPost } = await supabase
        .from('blog_posts')
        .select('view_count')
        .eq('id', postId)
        .maybeSingle();

      if (currentPost) {
        await supabase
          .from('blog_posts')
          .update({ view_count: (currentPost.view_count || 0) + 1 })
          .eq('id', postId);
      }
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  const fetchRelatedPosts = async (category: string, currentPostId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('category', category)
        .eq('published', true)
        .neq('id', currentPostId)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setRelatedPosts(data || []);
    } catch (error) {
      console.error('Error fetching related posts:', error);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#E2A201]"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center text-[#E2A201] font-semibold hover:underline"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-[#E2A201] font-semibold hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {post.featured_image && (
            <div className="relative h-96 bg-gray-200 overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block bg-[#E2A201] text-white px-4 py-1 rounded-full text-sm font-semibold capitalize mb-4">
                {post.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <User size={18} className="mr-2 text-[#E2A201]" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-[#E2A201]" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center">
                <Eye size={18} className="mr-2 text-[#E2A201]" />
                <span>{post.view_count} views</span>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Tag size={20} className="text-[#E2A201]" />
                  <span className="text-sm text-gray-600">Tagged in:</span>
                  <Link
                    to={`/blog?category=${post.category}`}
                    className="text-sm font-semibold text-[#E2A201] hover:underline capitalize"
                  >
                    {post.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {relatedPost.featured_image ? (
                    <img
                      src={relatedPost.featured_image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#E2A201] to-[#4C7000] flex items-center justify-center">
                      <span className="text-white text-4xl font-serif font-bold">
                        {relatedPost.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#E2A201] text-white px-3 py-1 rounded-full text-xs font-semibold capitalize mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 hover:text-[#E2A201] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formatDate(relatedPost.published_at)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Don't miss out on the latest news and stories from Tanyigbe
          </p>
          <Link
            to="/blog"
            className="inline-block bg-[#E2A201] text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}
