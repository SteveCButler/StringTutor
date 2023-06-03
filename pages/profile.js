import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import { getUserByUID, deleteUser } from '../api/remoteData';
import { signOut } from '../utils/auth';
import StudentList from '../components/StudentList';

const Profile = () => {
  const [userObj, setUserObj] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getUserByUID(user.uid).then(setUserObj);
  }, [user.uid]);

  const firebaseKey = userObj[0]?.firebaseKey;
  console.warn('FIREBASE KEY: ', firebaseKey);

  const deleteAndSignOut = () => {
    deleteUser(firebaseKey).then(signOut);
  };

  return (
    <>
      <div className="d-flex justify-content-between text-white ms-5">
        <div className="w-50">
          <h1 className="text-white my-3 ">{userObj[0]?.name}</h1>
          <div className="">
            <p>{userObj[0]?.instrument}</p>
            {userObj[0]?.isInstructor && <StudentList instructorId={firebaseKey} />}
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

          {/* DYNAMIC LINK TO EDIT THE MEMBER DETAILS  */}
          <Link href={`/instructor/edit/${firebaseKey}`} passHref>
            <Button className="me-2 dark-button">
              Edit Profile
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button className="me-2 dark-button" onClick={deleteAndSignOut}>Delete Account</Button>
          </Link>

        </div>
      </div>

    </>

  );
};

export default Profile;
