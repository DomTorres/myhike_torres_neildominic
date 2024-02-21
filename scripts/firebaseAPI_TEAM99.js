//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCiaQqKsXVrw6I7sgLm6C1_7g6ejMmxO_8",
    authDomain: "comp1800-d033a.firebaseapp.com",
    projectId: "comp1800-d033a",
    storageBucket: "comp1800-d033a.appspot.com",
    messagingSenderId: "146897106396",
    appId: "1:146897106396:web:86f382efbab3852ed4cb19"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
