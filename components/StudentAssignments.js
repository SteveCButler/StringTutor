/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getUserByUID } from '../api/remoteData';
import { getStudentAssignments } from '../api/lessonData';
import { useAuth } from '../utils/context/authContext';

const StudentAssignments = () => {
  const [student, setStudent] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();

  const getAssignments = async () => {
    console.warn('studentFBK: ', student);
    const result = await getStudentAssignments(student.firebaseKey);
    setAssignments(result);
  };

  useEffect(() => {
    getUserByUID(user.uid).then((data) => {
      setStudent(data);
    });
    getAssignments();
  }, []);
  // console.warn(`Assignment: ${assignments}`);

  return (
    <div>
      <h3 className="mt-4">Assingments</h3>
      <div className="bg-light rounded-2 p-3">
        <Table striped>
          <thead>
            <tr>
              <th>Lesson</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              console.warn('ASSIGNMENT: ', assignment)
            ))}

          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentAssignments;
