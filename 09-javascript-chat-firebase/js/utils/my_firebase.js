// Import the functions you need from the SDKs you need
import { ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM2h63-Fha3M2i33hzfkQI4hfnP984wGs",
  authDomain: "alx-stacjonarny2022.firebaseapp.com",
  projectId: "alx-stacjonarny2022",
  storageBucket: "alx-stacjonarny2022.appspot.com",
  messagingSenderId: "823693600476",
  appId: "1:823693600476:web:f59863e2cebb3ca5d73619",
  databaseURL: "https://alx-stacjonarny2022-default-rtdb.europe-west1.firebasedatabase.app",

};


//https://alx-stacjonarny2022-default-rtdb.europe-west1.firebasedatabase.app/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

const messagesRef = ref(database, '/messages');


onValue(messagesRef, (data) => {
  console.log(data);
})