import { useEffect, useRef, useState } from 'react';
import grapesjs, { Editor } from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import webpagePlugin from 'grapesjs-preset-webpage';
import basicBlocksPlugin from 'grapesjs-blocks-basic';

interface PageEditorProps {
  initialHtml?: string;
  initialCss?: string;
  initialJson?: any;
  onSave: (data: { html: string; css: string; json: any }) => Promise<void>;
  onCancel: () => void;
}

export default function PageEditor({
  initialHtml = '',
  initialCss = '',
  initialJson,
  onSave,
  onCancel,
}: PageEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!editorRef.current) return;

    const editorInstance = grapesjs.init({
      container: editorRef.current,
      height: '100vh',
      width: 'auto',
      storageManager: false,
      plugins: [webpagePlugin, basicBlocksPlugin],
      pluginsOpts: {
        [webpagePlugin]: {
          blocksBasicOpts: {
            blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
            flexGrid: true,
          },
          blocks: ['link-block', 'quote', 'text-basic'],
          modalImportTitle: 'Import Template',
          modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
          modalImportContent: function(editor) {
            return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
          },
        },
      },
      canvas: {
        styles: [
          'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
        ],
      },
    });

    if (initialJson && Object.keys(initialJson).length > 0) {
      editorInstance.loadProjectData(initialJson);
    } else if (initialHtml) {
      editorInstance.setComponents(initialHtml);
      if (initialCss) {
        editorInstance.setStyle(initialCss);
      }
    }

    setEditor(editorInstance);

    return () => {
      editorInstance.destroy();
    };
  }, []);

  const handleSave = async () => {
    if (!editor) return;

    setSaving(true);
    try {
      const html = editor.getHtml();
      const css = editor.getCss();
      const json = editor.getProjectData();

      await onSave({ html, css, json });
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving page content');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Page Editor</h2>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
            disabled={saving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:opacity-50"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
      <div ref={editorRef} className="flex-1"></div>
    </div>
  );
}
