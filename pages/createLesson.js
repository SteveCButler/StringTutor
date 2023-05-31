/* eslint-disable global-require */
import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Head from 'next/head';
import createLesson from '../api/remoteData';

const initialState = {
  assignedTo: '',
  assignmentId: '',
  instrument: '',
  content: '',
  lessonId: '',
  lessonName: '',
};

export default function CreateLesson() {
  const [textBody, setTextBody] = useState('');
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const payload = { ...formInput, content: textBody };
    createLesson(payload).then(() => router.push('/profile'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formInput, textBody]);

  return (
    <>

      <div className="w-75 mx-auto">
        <Head>
          <title>Create Lesson</title>
        </Head>
        <h1 className="text-white">Create Lesson</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-white fs-5 mt-3">Lesson Name</Form.Label>
            <Form.Control
              className="mb-4"
              type="text"
              value={formInput.name}
              placeholder="enter lesson name"
              name="name"
              onChange={handleChange}
              required
              autoFocus
            />
          </Form.Group>
          {
          editorLoaded ? (
            <CKEditor
              className="mt-3 wrap-ckeditor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.warn({ event, editor, data });
                setTextBody(data);
              }}
            />
          )
            : 'loading...'
        }
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <h1>Content</h1>
        <p>{JSON.stringify(textBody)}</p>
      </div>
    </>
  );
}
