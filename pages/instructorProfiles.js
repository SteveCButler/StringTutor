import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
      <h1 className="text-white ms-5 my-3">InstructorProfiles</h1>
      <div className="d-flex flex-wrap gap-4 w-75 mx-auto">
        {users.map((user) => user.isInstructor && <InstructorProfileCard key={uuidv4()} user={user} />)}
      </div>

    </>

  );
};

export default InstructorProfiles;
