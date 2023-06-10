/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { getStudentsByInstructor } from '../api/remoteData';
import { getStudentAssignments } from '../api/lessonData';

const AssignmentTracker = ({ instructorId }) => {
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    getStudentsByInstructor(instructorId).then((students) => students.map((student) => getStudentAssignments(student.firebaseKey).then(setAssignment)));
  }, []);

  return (
    <>
      <h3 className="mt-5">AssignmentTracker</h3>
      <div className="bg-light rounded-2 p-3">
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {assignment.map((lesson) => (
              <tr key={lesson.firebaseKey}>
                <td>{lesson.lessonName}</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AssignmentTracker;

AssignmentTracker.propTypes = {
  instructorId: PropTypes.string.isRequired,
};
