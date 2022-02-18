// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6cQNR9-zG87dtD34ZnyNI3EujMmW8mD0',
  authDomain: 'twitter-clone-ffe05.firebaseapp.com',
  projectId: 'twitter-clone-ffe05',
  storageBucket: 'twitter-clone-ffe05.appspot.com',
  messagingSenderId: '1040269817062',
  appId: '1:1040269817062:web:718ba4df0cea2657737727',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
