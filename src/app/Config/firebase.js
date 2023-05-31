import firebase from 'firebase/app';
//import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD8bm12RM3STBjgOUw2hV4rF2mRn4s6cuo",
  authDomain: "labsoft-a4-3e038.firebaseapp.com",
  projectId: "labsoft-a4-3e038",
  storageBucket: "labsoft-a4-3e038.appspot.com",
  messagingSenderId: "743590837616",
  appId: "1:743590837616:web:2d10025f463724821863b5",
  measurementId: "G-8Z3E1WJ9EW"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
