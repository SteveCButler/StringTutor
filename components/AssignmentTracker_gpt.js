import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getStudentsByInstructor } from '../api/remoteData';
import { getStudentAssignments, deleteAssignment } from '../api/lessonData';

const AssignmentTracker = ({ instructorId }) => {
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);

  const getAssignmentList = async (student) => {
    const assignmentArray = await getStudentAssignments(student.firebaseKey);

    console.warn('AssignmentArray:', assignmentArray);
    const { lessonName, assignmentId } = assignmentArray[0];
    const isDuplicate = assignments.some((item) => item.assignmentId === assignmentId);
    if (!isDuplicate) {
      setAssignments((current) => [
        ...current,
        {
          lessonName,
          studentId: student.firebaseKey,
          studentName: student.name,
          assignmentId,
        },
      ]);
    }
  };

  const something = () => {
    students.map((student) => getAssignmentList(student));
  };

  const fetchAssignments = async () => {
    const studentList = await getStudentsByInstructor(instructorId);
    setStudents(studentList);
    something();
  };

  // useEffect(() => {
  //   fetchAssignments();
  // }, []);

  useEffect(() => {
    students.forEach((student) => {
      if (student.firebaseKey) {
        getAssignmentList(student);
        fetchAssignments();
      }
    });
  }, []);

  const removeAssignment = (assignmentId) => {
    console.warn('AssignmentId: ', assignmentId);
    deleteAssignment(assignmentId);
    setAssignments((current) => current.filter((assignment) => assignment.assignmentId !== assignmentId));
  };

  console.warn('Assignments: ', assignments);

  return (
    <>
      <h3 className="mt-5">AssignmentTracker</h3>
      <div className="bg-light rounded-2 p-3">
        <Table striped>
          <thead>
            <tr>
              <th>Lesson Name</th>
              <th>Student Name</th>
              <th>Assignment ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((lesson) => (
              <tr key={lesson.assignmentId}>
                <td>{lesson.lessonName}</td>
                <td>{lesson.studentName}</td>
                <td>{lesson.assignmentId}</td>
                <td>
                  <Button
                    className="bg-transparent dark-link border-0 fw-bold"
                    onClick={() => removeAssignment(lesson.assignmentId)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

AssignmentTracker.propTypes = {
  instructorId: PropTypes.string.isRequired,
};

export default AssignmentTracker;
