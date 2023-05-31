// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';

const Profile = () => {
  // const [userObj, setUserObj] = useState({});
  const { user } = useAuth();
  // const instructor = true;

  // useEffect(() => {
  //   getUserByUID(firebaseKey).then(setUserObj);
  //   console.warn('UserObj: ', userObj);
  // }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="text-white ms-5 my-3 ">{user}</h1>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>

    </>

  );
};

export default Profile;
