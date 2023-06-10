/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import { getUserByUID, deleteUser } from '../api/remoteData';
import { signOut } from '../utils/auth';
import StudentList from '../components/StudentList';
import StudentAssignments from '../components/StudentAssignments';
import AssignmentTracker from '../components/AssignmentTracker';

const Profile = () => {
  const [userObj, setUserObj] = useState([]);
  const { user } = useAuth();
  let verifyInstructor = false;

  const getUser = async () => {
    const response = await getUserByUID(user.uid);
    setUserObj(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  const firebaseKey = userObj[0]?.firebaseKey;
  verifyInstructor = userObj[0]?.isInstructor;

  let displayComponent = null;
  if (verifyInstructor) {
    displayComponent = (
      <>
        <StudentList instructorId={firebaseKey} />
        <AssignmentTracker instructorId={firebaseKey} />
      </>
    );
  } else {
    displayComponent = <StudentAssignments />;
  }

  const deleteAndSignOut = () => {
    deleteUser(firebaseKey).then(signOut);
  };

  return (
    <>
      <div className="d-flex justify-content-between text-white ms-5">
        <div className="w-50">
          <div className="">
            {displayComponent}
          </div>
        </div>
        <div className="mt-3 me-5 d-flex flex-column gap-3 w-25 ">
          <div>
            <h1 className="text-white my-3 ">{userObj[0]?.name}</h1>
            <p>{userObj[0]?.instrument}</p>
          </div>
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
          {userObj[0]?.isInstructor
            ? (
              <>
                <Link href={`/instructor/edit/${firebaseKey}`} passHref>
                  <Button className="me-2 dark-button">
                    Edit Profile
                  </Button>
                </Link>
              </>
            )
            : (
              <>
                <Link href={`/student/edit/${firebaseKey}`} passHref>
                  <Button className="me-2 dark-button">
                    Edit Profile
                  </Button>
                </Link>
              </>
            )}
          <Link href="/" passHref>
            <Button className="me-2 dark-button" onClick={deleteAndSignOut}>Delete Account</Button>
          </Link>
        </div>
      </div>

    </>

  );
};

export default Profile;
