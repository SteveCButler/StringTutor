/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { deleteUser } from '../api/remoteData';
import { signOut } from '../utils/auth';
import StudentList from '../components/StudentList';
import StudentAssignments from '../components/StudentAssignments';
import AssignmentTracker from '../components/AssignmentTracker';
import { deleteStudentAndAssignments } from '../api/lessonData';

const Profile = ({ userObj }) => {
  const firebaseKey = userObj[0]?.firebaseKey;
  const verifyInstructor = userObj[0]?.isInstructor;

  let displayComponent = null;

  if (verifyInstructor) {
    displayComponent = (
      <>
        <div className="w-75 mx-auto">
          <StudentList instructorId={firebaseKey} />
          <AssignmentTracker key={firebaseKey} userObj={userObj[0]} />
        </div>
      </>
    );
  } else {
    displayComponent = (
      <div className="w-75 mx-auto">
        <StudentAssignments />
      </div>
    );
  }

  const deleteAndSignOut = () => {
    deleteUser(firebaseKey).then(signOut);
  };

  const deleteStudent = () => {
    if (window.confirm('Delete your account?')) {
      deleteStudentAndAssignments(firebaseKey).then(signOut);
    }
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
                <Link href="/" passHref>
                  <Button className="me-2 dark-button" onClick={deleteAndSignOut}>Delete Account</Button>
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
                <Link href="/" passHref>
                  <Button className="me-2 dark-button" onClick={deleteStudent}>Delete Account</Button>
                </Link>
              </>
            )}
        </div>
      </div>

    </>

  );
};

export default Profile;

Profile.propTypes = {
  userObj: PropTypes.shape().isRequired,
};
