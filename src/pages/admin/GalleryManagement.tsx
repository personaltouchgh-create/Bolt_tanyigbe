import { useEffect, useState, FormEvent } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';

interface GalleryImage {
  id: string;
  title: string;
  alt_text: string;
  image_url: string;
  thumbnail_url: string | null;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
}

interface Tag {
  id: string;
  name: string;
}

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    alt_text: '',
    image_url: '',
    thumbnail_url: '',
    selectedCategories: [] as string[],
    selectedTags: [] as string[],
  });
  const [submitting, setSubmitting] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [imagesResult, categoriesResult, tagsResult] = await Promise.all([
      supabase.from('gallery_images').select('*').order('created_at', { ascending: false }),
      supabase.from('gallery_categories').select('*').order('name'),
      supabase.from('gallery_tags').select('*').order('name'),
    ]);

    if (imagesResult.data) setImages(imagesResult.data);
    if (categoriesResult.data) setCategories(categoriesResult.data);
    if (tagsResult.data) setTags(tagsResult.data);

    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const imageData = {
      title: formData.title,
      alt_text: formData.alt_text,
      image_url: formData.image_url,
      thumbnail_url: formData.thumbnail_url || null,
      uploaded_by: user?.id,
    };

    if (editingImage) {
      const { data: updatedImage, error } = await supabase
        .from('gallery_images')
        .update(imageData)
        .eq('id', editingImage.id)
        .select()
        .single();

      if (error) {
        alert('Error updating image: ' + error.message);
      } else if (updatedImage) {
        await updateImageRelationships(updatedImage.id);
        fetchData();
        closeModal();
      }
    } else {
      const { data: newImage, error } = await supabase
        .from('gallery_images')
        .insert(imageData)
        .select()
        .single();

      if (error) {
        alert('Error creating image: ' + error.message);
      } else if (newImage) {
        await updateImageRelationships(newImage.id);
        fetchData();
        closeModal();
      }
    }

    setSubmitting(false);
  };

  const updateImageRelationships = async (imageId: string) => {
    await supabase.from('image_categories').delete().eq('image_id', imageId);
    await supabase.from('image_tags').delete().eq('image_id', imageId);

    if (formData.selectedCategories.length > 0) {
      const categoryLinks = formData.selectedCategories.map((catId) => ({
        image_id: imageId,
        category_id: catId,
      }));
      await supabase.from('image_categories').insert(categoryLinks);
    }

    if (formData.selectedTags.length > 0) {
      const tagLinks = formData.selectedTags.map((tagId) => ({
        image_id: imageId,
        tag_id: tagId,
      }));
      await supabase.from('image_tags').insert(tagLinks);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    const { error } = await supabase.from('gallery_images').delete().eq('id', id);

    if (error) {
      alert('Error deleting image: ' + error.message);
    } else {
      fetchData();
    }
  };

  const openModal = async (image?: GalleryImage) => {
    if (image) {
      setEditingImage(image);

      const [catResult, tagResult] = await Promise.all([
        supabase.from('image_categories').select('category_id').eq('image_id', image.id),
        supabase.from('image_tags').select('tag_id').eq('image_id', image.id),
      ]);

      setFormData({
        title: image.title,
        alt_text: image.alt_text,
        image_url: image.image_url,
        thumbnail_url: image.thumbnail_url || '',
        selectedCategories: catResult.data?.map((c) => c.category_id) || [],
        selectedTags: tagResult.data?.map((t) => t.tag_id) || [],
      });
    } else {
      setEditingImage(null);
      setFormData({
        title: '',
        alt_text: '',
        image_url: '',
        thumbnail_url: '',
        selectedCategories: [],
        selectedTags: [],
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingImage(null);
  };

  const toggleCategory = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter((id) => id !== categoryId)
        : [...prev.selectedCategories, categoryId],
    }));
  };

  const toggleTag = (tagId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tagId)
        ? prev.selectedTags.filter((id) => id !== tagId)
        : [...prev.selectedTags, tagId],
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gallery Images</h1>
          <p className="text-gray-600">Manage your image gallery</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Image
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={image.thumbnail_url || image.image_url}
                alt={image.alt_text}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{image.alt_text}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(image)}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 my-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingImage ? 'Edit Image' : 'Add Image'}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={formData.alt_text}
                  onChange={(e) => setFormData({ ...formData, alt_text: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="https://example.com/image.jpg or /image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thumbnail URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.thumbnail_url}
                  onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Optional smaller version"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        formData.selectedCategories.includes(category.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => toggleTag(tag.id)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        formData.selectedTags.includes(tag.id)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : editingImage ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
