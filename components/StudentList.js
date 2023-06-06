/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { getStudentsByInstructor } from '../api/remoteData';

const StudentList = ({ instructorId }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudentsByInstructor(instructorId).then((data) => {
      setStudents(data);
    });
  }, [instructorId]);

  return (
    <div>
      <h3 className="mt-4">StudentList</h3>
      <div className="bg-light rounded-2 p-3">
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.firebaseKey}>
                <td>{student.name}</td>
                <td>{student.about}</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentList;

StudentList.propTypes = {
  instructorId: PropTypes.string.isRequired,
};
