import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL LESSONS
const getAllLessons = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/lessons.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(Object.values(data));
    })
    .catch(reject);
});

// GET Single Lesson
const getLesson = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/lessons/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

// Create Lesson
const createLesson = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/lessons.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { lessonId: data.name };
      fetch(`${dbUrl}/lessons/${setcode.lessonId}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

// Create Assignment
const createAssignment = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/assignments.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { assignmentId: data.name };
      fetch(`${dbUrl}/assignments/${data.name}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

// GET Student Assignments
const getStudentAssignments = (studentFBK) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/assignments.json?orderBy="studentId"&equalTo="${studentFBK}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET Student Assignments
const getAssignmentIdByName = (assignmentName) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/lessons.json?orderBy="lessonName"&equalTo="${assignmentName}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE Assignment
const deleteAssignment = (assignmentId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/assignments/${assignmentId}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllLessons,
  createLesson,
  getLesson,
  createAssignment,
  getStudentAssignments,
  getAssignmentIdByName,
  deleteAssignment,
};
