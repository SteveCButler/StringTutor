import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateLessonForm = () => {
  const [text, setText] = useState('');

  return (

    <>
      <div className="d-flex">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            console.warn('CKEditor', { event, editor, data });
            setText(data);
          }}
        />
      </div>
      <div>
        <h2>Content</h2>
        <p>{text}</p>
      </div>
    </>

  );
};

export default CreateLessonForm;
