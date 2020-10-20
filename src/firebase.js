import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7Od1cbwTfwDWR9-WGXz4tgV8iowbZTgw",
  authDomain: "todoappreactfirebase-cb28a.firebaseapp.com",
  databaseURL: "https://todoappreactfirebase-cb28a.firebaseio.com",
  projectId: "todoappreactfirebase-cb28a",
  storageBucket: "todoappreactfirebase-cb28a.appspot.com",
  messagingSenderId: "705641140906",
  appId: "1:705641140906:web:1524b52d3ab906fbdff6d3",
  measurementId: "G-97B2EDLDZD"
});

const db = firebaseApp.firestore();

export default db;