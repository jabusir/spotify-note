import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQRg_USw63FTx2jltoiniSjDZ6GoOhaDg",
    authDomain: "spotify-note.firebaseapp.com",
    databaseURL: "https://spotify-note.firebaseio.com",
    projectId: "spotify-note",
    storageBucket: "",
    messagingSenderId: "400853381739",
    appId: "1:400853381739:web:f87038c5ef9c64a5"
  };

  firebase.initializeApp(config);

  const database = firebase.database()
  
  export { firebase, database as default }