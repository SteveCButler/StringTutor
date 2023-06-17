import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getAllInstructors } from '../api/remoteData';
import InstructorProfileCard from '../components/InstructorProfileCard';

const InstructorProfiles = ({ user }) => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    getAllInstructors().then(setUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <title>Instructor Profiles</title>
      <div className="d-flex justify-content-between w-75 mx-auto">
        <h1 className="text-white my-3 ">InstructorProfiles</h1>
        { Object.keys(user).length === 0 ? (
          <div>
            <Link passHref href="/instructorSignupPage">
              <Button className="me-5 rounded-pill mt-3 dark-button">Instructor Sign Up</Button>
            </Link>
          </div>
        ) : null }
      </div>
      <div className="d-flex flex-wrap gap-4 w-75 mx-auto">
        {users.map((userItem) => <InstructorProfileCard key={userItem.firebaseKey} user={userItem} />)}
      </div>

    </>

  );
};

export default InstructorProfiles;

InstructorProfiles.propTypes = {
  user: PropTypes.shape(),
};
InstructorProfiles.defaultProps = {
  user: {},
};
