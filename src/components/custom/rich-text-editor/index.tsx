import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import styles directly

const DynamicReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const RichTextEditor = ({ ...props }) => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html: any) => {
    setEditorHtml(html);
  };

  return (
    <div {...props}>
      <DynamicReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={{
          toolbar: [[{ header: '1' }]],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
