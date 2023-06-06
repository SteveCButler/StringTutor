/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Head from 'next/head';
import { createLesson } from '../api/lessonData';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, content: textBody };
    console.warn('PAYLOAD: ', payload);
    createLesson(payload).then(() => router.push('/profile'));
  };

  return (
    <>

      <div className="w-75 mx-auto">
        <Head>
          <title>Create Lesson</title>
        </Head>
        <h1 className="text-white mt-3">Create Lesson</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-white fs-5 mt-3">Lesson Name</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              value={formInput.name}
              placeholder="Give your lesson a name"
              name="name"
              onChange={handleChange}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-white fs-5 mt-2">Instrument</Form.Label>
            <Form.Control
              className="mb-4"
              type="text"
              value={formInput.instrument}
              placeholder="Lesson Instrument (enter Theory if not instrument specific)"
              name="instrument"
              onChange={handleChange}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label className="text-white fs-5 mt-3">Instrument</Form.Label> */}
            <Form.Control
              className="mb-4"
              type="hidden"
              value={formInput.content}
              name="content"
              onChange={handleChange}
              required
            />
            {
              editorLoaded ? (
                <CKEditor
                  className="wrap-ckeditor ck-editor__editable"
                  editor={ClassicEditor}
                  value={textBody}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setTextBody(data);
                  }}
                />
              )
                : 'loading...'
            }
          </Form.Group>

          <Button className="dark-button" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </>
  );
}
