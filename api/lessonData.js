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

export {
  getAllLessons,
  createLesson,
  getLesson,
};
