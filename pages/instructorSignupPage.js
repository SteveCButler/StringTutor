import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import FormComponent from '../components/forms/FormComponent';
import { signIn } from '../utils/auth';
import { getUserByUID } from '../api/remoteData';

const InstructorSignupPage = ({ user }) => {
  const [show, setShow] = useState(false);

  const instructor = true;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const verifyUserExists = () => {
    getUserByUID(user.uid).then((userExists) => {
      if (userExists.length > 0) {
        handleShow();
      }
    });
  };

  if (Object.keys(user).length === 0) {
    signIn();
    verifyUserExists();
  } else {
    verifyUserExists();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Verified</Modal.Title>
        </Modal.Header>
        <Modal.Body>You already have an account!</Modal.Body>
        <Modal.Footer>
          <Link passHref href="/profile">
            <Button variant="secondary" onClick={handleClose}>
              OK
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <title>Instructor Sign Up</title>
      <FormComponent show instructor={instructor} />
    </>
  );
};

export default InstructorSignupPage;

InstructorSignupPage.propTypes = {
  user: PropTypes.shape(),
};
InstructorSignupPage.defaultProps = {
  user: {},
};
