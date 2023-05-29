import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getUsers } from '../api/remoteData';
import InstructorProfileCard from '../components/InstructorProfileCard';

const InstructorProfiles = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    getUsers().then(setUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="text-white ms-5 my-3 ">InstructorProfiles</h1>
        <div>
          <Link passHref href="/instructorSignupPage">
            <Button className="me-5 rounded-pill mt-3 dark-button">Instructor Sign Up</Button>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-4 w-75 mx-auto">
        {users.map((user) => user.isInstructor && <InstructorProfileCard key={user.firebaseKey} user={user} />)}
      </div>

    </>

  );
};

export default InstructorProfiles;
