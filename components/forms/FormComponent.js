import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { createUser, updateUser } from '../../api/remoteData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  image: '',
  instrument: '',
  yearsExperience: '',
  instructor: '',
  about: '',
  isInstructor: false,
};

const FormComponent = ({ instructor, obj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (instructor) {
      if (obj.firebaseKey) {
        updateUser(formInput).then(() => router.push(`/instructor/${obj.firebaseKey}`));
      } else {
        const payload = { ...formInput, uid: user.uid, isInstructor: true };
        createUser(payload).then((data) => {
          const [, fbkPlus] = data.url.split('users/');
          const [firebaseKey] = fbkPlus.split('.');
          router.push(`/instructor/${firebaseKey}`);
        });
      }
    } else if (obj.firebaseKey) {
      updateUser(formInput).then(() => router.push(`/student/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid, isInstructor: false };
      createUser(payload).then((data) => {
        const [, fbkPlus] = data.url.split('users/');
        const [firebaseKey] = fbkPlus.split('.');
        router.push(`/student/${firebaseKey}`);
      });
    }
  };
  return (
    <Form className="w-50 mx-auto text-white" onSubmit={handleSubmit}>
      <div className="text-center my-4 text-white">
        {instructor ? <h1>Instructor Signup</h1> : <h1>Student Sign Up</h1>}
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={formInput.name}
          placeholder="Name"
          name="name"
          onChange={handleChange}
          required
          autoFocus
        />
      </Form.Group>
      {instructor && (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          value={formInput.image}
          placeholder="photo URL"
          name="image"
          onChange={handleChange}
          required
        />
      </Form.Group>
      ) }

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Instrument</Form.Label>
        <Form.Control
          type="text"
          value={formInput.instrument}
          name="instrument"
          onChange={handleChange}
          required
        />
      </Form.Group>
      {instructor ? (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Years of Experience</Form.Label>
          <Form.Control
            type="text"
            value={formInput.yearsExperience}
            name="yearsExperience"
            onChange={handleChange}
          />
        </Form.Group>
      ) : (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Instructor</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      )}

      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>About</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={formInput.about}
          name="about"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;

FormComponent.propTypes = {
  instructor: PropTypes.bool.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};
FormComponent.defaultProps = {
  obj: initialState,
};
