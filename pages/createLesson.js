/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const [text, setText] = useState('');
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <>

      <div className="w-75 mx-auto">
        <Head>
          <title>Ckeditor 5</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Ckeditor5 Nextjs</h1>
        {
          editorLoaded ? (
            <CKEditor
              className="mt-3 wrap-ckeditor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.warn({ event, editor, data });
                setText(data);
              }}
            />
          )
            : 'loading...'
        }

      </div>
      <div>
        <h1>Content</h1>
        <p>{JSON.stringify(text)}</p>
      </div>
    </>
  );
}
