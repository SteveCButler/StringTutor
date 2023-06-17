import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import FormComponent from '../components/forms/FormComponent';
import { signIn } from '../utils/auth';
import { getUserByUID } from '../api/remoteData';

const StudentSignupPage = ({ user }) => {
  const [show, setShow] = useState(false);
  const [existingUser, setExistingUser] = useState(false);

  const instructor = false;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const verifyUserExists = () => {
    getUserByUID(user.uid).then((userExists) => {
      if (userExists.length > 0) {
        setExistingUser(true);
        handleShow();
      }
    });
  };

  if (Object.keys(user).length === 0) {
    signIn();
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
      {!existingUser && (
        <>
          <title>Student Sign Up</title>
          <FormComponent show instructor={instructor} />
        </>
      )}

    </>
  );
};

export default StudentSignupPage;

StudentSignupPage.propTypes = {
  user: PropTypes.shape(),
};
StudentSignupPage.defaultProps = {
  user: {},
};
