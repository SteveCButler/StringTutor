/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
// import parse from 'html-react-parser';
import { getUserByUID } from '../api/remoteData';
import { getStudentAssignments } from '../api/lessonData';
import { useAuth } from '../utils/context/authContext';
import AssignmentComponent from './AssignmentComponent';

const StudentAssignments = () => {
  // const [lesson, setLesson] = useState('');
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();

  const getAssignments = async (fbKey) => {
    const result = await getStudentAssignments(fbKey);
    setAssignments(result);
  };

  useEffect(() => {
    getUserByUID(user.uid).then((data) => {
      const fbKey = data[0]?.firebaseKey;
      getAssignments(fbKey);
    });
  }, []);

  // const handleLesson = useCallback((lessonId) => {
  //   getLesson({ lessonId }).then((data) => {
  //     console.warn('DATA: ', data.content);
  //     const lessonContent = parse(`${data.content}`);
  //     setLesson(lessonContent);
  //   });
  // }, [lesson]);

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
            {
              assignments.map((assignment) => <AssignmentComponent key={assignment.lessonId} assignment={assignment} />)

            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentAssignments;
