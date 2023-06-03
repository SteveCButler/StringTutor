import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { createUser, getAllStudents } from '../../api/remoteData';
import { getAllLessons } from '../../api/lessonData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  lessonName: '',
  student: '',
  studentFBKey: '',
  lessonId: '',
};

const AssignLessonForm = () => {
  const [formInput, setFormInput] = useState(initialState);
  const [lessons, setLessons] = useState([]);
  const [students, setStudents] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  const getLessons = async () => {
    await getAllLessons().then((data) => {
      setLessons(data);
    });
  };

  const getStudents = () => {
    getAllStudents().then((data) => {
      setStudents(data);
    });
  };

  useEffect(() => {
    getLessons();
    getStudents();
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

    const payload = { ...formInput, uid: user.uid, isInstructor: true };
    createUser(payload).then((data) => {
      const [, fbkPlus] = data.url.split('users/');
      const [firebaseKey] = fbkPlus.split('.');
      router.push(`/instructor/${firebaseKey}`);
    });
  };

  return (
    <Form className="w-50 mx-auto text-white" onSubmit={handleSubmit}>
      <div className="text-center my-4 text-white">
        <h1>Assign Lesson</h1>
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lesson</Form.Label>
        <Form.Select
          aria-label="Lesson"
          name="lesson"
          onChange={handleChange}
          className="mb-3"
          value={formInput.lesson}
          required
        >
          <option value="">Select Lesson</option>
          {
            lessons.map((singleLesson) => (
              <option
                key={singleLesson.lessonId}
                value={singleLesson.lessonId}
              >
                {singleLesson.lessonName}
              </option>
            ))
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Student</Form.Label>
        <Form.Select
          aria-label="Instructor"
          name="instructor"
          onChange={handleChange}
          className="mb-3"
          value={formInput.student}
          required
        >
          <option value="">Select Student</option>
          {
            students.map((student) => (
              <option
                key={student.firebaseKey}
                value={student.firebaseKey}
              >
                {student.name}
              </option>
            ))
          }
        </Form.Select>
      </Form.Group>

      <Button className="mt-4 dark-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AssignLessonForm;
