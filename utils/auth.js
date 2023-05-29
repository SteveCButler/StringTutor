import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = (isInstructor) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  if (isInstructor) {
    console.warn('Instructor');
  }
};

const signOut = () => {
  firebase.auth().signOut();
};

export { signIn, signOut };
