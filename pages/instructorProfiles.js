import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getAllInstructors } from '../api/remoteData';
import InstructorProfileCard from '../components/InstructorProfileCard';

const InstructorProfiles = () => {
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
        <div>
          <Link passHref href="/instructorSignupPage">
            <Button className="me-5 rounded-pill mt-3 dark-button">Instructor Sign Up</Button>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-4 w-75 mx-auto">
        {users.map((user) => <InstructorProfileCard key={user.firebaseKey} user={user} />)}
      </div>

    </>

  );
};

export default InstructorProfiles;
