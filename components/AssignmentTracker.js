/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getStudentsByInstructor } from '../api/remoteData';
import { getStudentAssignments, deleteAssignment } from '../api/lessonData';

const AssignmentTracker = ({ userObj }) => {
  const [assignments, setAssignments] = useState([]);
  const onUpdate = () => {
    getStudentsByInstructor(userObj?.firebaseKey).then((data) => Promise.all(data.map((item) => getStudentAssignments(item.firebaseKey).then((response) => {
      response.map((lesson) => (
        setAssignments((current) => ([...current,
          {
            lessonName: lesson.lessonName,
            studentId: lesson.studentId,
            studentName: lesson.studentName,
            assignmentId: lesson.assignmentId,
          }]
        ))
      ));
    }))));
  };

  useEffect(() => {
    getStudentsByInstructor(userObj?.firebaseKey).then((data) => Promise.all(data.map((item) => getStudentAssignments(item.firebaseKey).then((response) => {
      response.map((lesson) => (
        setAssignments((current) => ([...current,
          {
            lessonName: lesson.lessonName,
            studentId: lesson.studentId,
            studentName: lesson.studentName,
            assignmentId: lesson.assignmentId,
          }]
        ))
      ));
    }))));
  }, []);

  const removeAssignment = (assignmentId) => {
    deleteAssignment(assignmentId);
    setAssignments([]);
    onUpdate();
  };

  return (
    <>
      <h3 className="mt-5 mb-3">AssignmentTracker</h3>
      <div className="bg-light rounded-2 p-3">
        <Table striped>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Lesson Name</th>
            </tr>
          </thead>
          <tbody>
            {assignments?.map((lesson) => (
              <tr key={lesson.assignmentId}>
                <td>{lesson.studentName}</td>
                <td>{lesson.lessonName}</td>
                <td>
                  <Button className="bg-transparent dark-link border-0 fw-bold" onClick={() => removeAssignment(lesson.assignmentId)}>Remove</Button>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
      {/* <div className="bg-light rounded-2 p-3">
        <Table striped>
          <thead>
            <tr>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.firebaseKey}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div> */}
    </>
  );
};

export default AssignmentTracker;

AssignmentTracker.propTypes = {
  userObj: PropTypes.shape().isRequired,
};
