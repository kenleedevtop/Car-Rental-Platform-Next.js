import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import styles directly

const DynamicReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const RichTextEditor = ({ ...props }) => {
  const { name, value, onChange } = props;

  const handleEditorChange = (html: any) => {
    onChange((data: any) => ({ ...data, [name]: html }));
  };

  return (
    <div {...props}>
      <DynamicReactQuill
        value={value}
        onChange={handleEditorChange}
        modules={{
          toolbar: [[{ header: '1' }]],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
