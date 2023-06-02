import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users.json`, {
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

// GET Instructor
const getInstructor = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${firebaseKey}.json`, {
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

// GET All Instructors
const getAllInstructors = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users.json?orderBy="isInstructor"&equalTo=true`, {
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

// UPDATE Instructor
const updateInstructor = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUserByUID = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`, {
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

// GET Student
const getStudent = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${firebaseKey}.json`, {
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

// Get Students by Instructor
const getStudentsByInstructor = (instructorId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users.json?orderBy="instructor"&equalTo="${instructorId}"`, {
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

// Create User
const createUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { firebaseKey: data.name };
      fetch(`${dbUrl}/users/${setcode.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

// UPDATE User
const updateUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE User
const deleteUser = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

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
      fetch(`${dbUrl}/lessons/${setcode.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

export {
  getUsers,
  getInstructor,
  getStudent,
  createUser,
  updateUser,
  deleteUser,
  getLesson,
  getUserByUID,
  createLesson,
  updateInstructor,
  getAllInstructors,
  getStudentsByInstructor,
};
