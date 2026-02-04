import { useEffect, useState } from 'react';
import { FileEdit, Eye, Clock, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { usePermissions } from '../../hooks/usePermissions';
import PageEditor from '../../components/PageEditor';

interface Page {
  id: string;
  title: string;
  slug: string;
  route: string;
  description: string;
  is_editable: boolean;
  updated_at: string;
}

interface PageContent {
  id: string;
  page_id: string;
  version: number;
  content_html: string;
  content_css: string;
  content_json: any;
  is_published: boolean;
  created_at: string;
}

export default function PageManagement() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { hasPermission, isSuperAdmin, loading: permissionsLoading } = usePermissions();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('is_editable', true)
      .order('title');

    if (!error && data) {
      setPages(data);
    }
    setLoading(false);
  };

  const fetchPageContent = async (pageId: string) => {
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('page_id', pageId)
      .eq('is_published', true)
      .order('version', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!error) {
      setPageContent(data);
    }
  };

  const handleEditPage = async (page: Page) => {
    setSelectedPage(page);
    await fetchPageContent(page.id);
    setShowEditor(true);
  };

  const handleSaveContent = async (data: { html: string; css: string; json: any }) => {
    if (!selectedPage || !user) return;

    const currentVersion = pageContent?.version || 0;

    const { error: insertError } = await supabase.from('page_content').insert({
      page_id: selectedPage.id,
      version: currentVersion + 1,
      content_html: data.html,
      content_css: data.css,
      content_json: data.json,
      is_published: true,
      created_by: user.id,
    });

    if (insertError) {
      throw insertError;
    }

    if (pageContent) {
      await supabase
        .from('page_content')
        .update({ is_published: false })
        .eq('id', pageContent.id);
    }

    setShowEditor(false);
    setSelectedPage(null);
    setPageContent(null);
    fetchPages();
  };

  const handleCancelEdit = () => {
    setShowEditor(false);
    setSelectedPage(null);
    setPageContent(null);
  };

  if (loading || permissionsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!hasPermission('can_edit_pages') && !isSuperAdmin) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You do not have permission to edit pages.</p>
          <p className="text-gray-500 text-sm mt-2">Contact an administrator to request page editing access.</p>
        </div>
      </div>
    );
  }

  if (showEditor && selectedPage) {
    return (
      <PageEditor
        initialHtml={pageContent?.content_html}
        initialCss={pageContent?.content_css}
        initialJson={pageContent?.content_json}
        onSave={handleSaveContent}
        onCancel={handleCancelEdit}
      />
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Management</h1>
        <p className="text-gray-600">
          Edit page content using the drag-and-drop visual editor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-500">{page.route}</p>
                </div>
                <FileEdit className="w-5 h-5 text-gray-400" />
              </div>

              {page.description && (
                <p className="text-sm text-gray-600 mb-4">{page.description}</p>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Updated {new Date(page.updated_at).toLocaleDateString()}
                </span>
                <button
                  onClick={() => handleEditPage(page)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                >
                  Edit Page
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {pages.length === 0 && (
        <div className="text-center py-12">
          <FileEdit className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Pages Available</h3>
          <p className="text-gray-600">No editable pages found in the system.</p>
        </div>
      )}
    </div>
  );
}
