import { boot } from 'quasar/wrappers';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBnqn2jrIHLdmqbxPHUcGjUI58UIfOvjEU',
  authDomain: 'wang-vue3-firebase-app-7226f.firebaseapp.com',
  projectId: 'wang-vue3-firebase-app-7226f',
  storageBucket: 'wang-vue3-firebase-app-7226f.appspot.com',
  messagingSenderId: '802578618949',
  appId: '1:802578618949:web:72a49b5beca678e5fc612c',
  measurementId: 'G-XGLF54DEF1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
