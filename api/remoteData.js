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

export {
  getUsers,
  getInstructor,
};
