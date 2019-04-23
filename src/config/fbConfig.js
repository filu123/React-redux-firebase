import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAem-KrjTeDL1LOfFRKEC9DzbS3EXQIVbM",
    authDomain: "fir-app-e763c.firebaseapp.com",
    databaseURL: "https://fir-app-e763c.firebaseio.com",
    projectId: "fir-app-e763c",
    storageBucket: "fir-app-e763c.appspot.com",
    messagingSenderId: "809696346465"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;