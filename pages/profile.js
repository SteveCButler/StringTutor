import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import { getUserByUID } from '../api/remoteData';

const Profile = () => {
  const [userObj, setUserObj] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getUserByUID(user.uid).then(setUserObj);
  }, [user.uid]);

  return (
    <>
      <div className="d-flex justify-content-between text-white ms-5">
        <div className="w-50">
          <h1 className="text-white my-3 ">{userObj[0]?.name}</h1>
          <div className="">
            <p>{userObj[0]?.about}</p>
          </div>
        </div>
        <div className="mt-5 me-5 d-flex flex-column  gap-3 w-25 ">
          {userObj[0]?.isInstructor && (
            <>
              <Link passHref href="/createLesson">
                <Button className="me-2 dark-button">Create Lesson</Button>
              </Link>
              <Link passHref href="/assignLesson">
                <Button className="me-2 dark-button">Assign Lesson</Button>
              </Link>
            </>
          )}

          <Button className="me-2 dark-button">Edit Profile</Button>
          <Button className="me-2 dark-button">Delete Account</Button>
        </div>
      </div>

    </>

  );
};

export default Profile;
