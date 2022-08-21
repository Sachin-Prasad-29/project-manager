// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy932HxEBOL1RnRwsTbPq8pZk7RB9htV0",
  authDomain: "project-manager-vue-29.firebaseapp.com",
  projectId: "project-manager-vue-29",
  storageBucket: "project-manager-vue-29.appspot.com",
  messagingSenderId: "880380366319",
  appId: "1:880380366319:web:61a1fe6501e2c4ba5c7a1a",
  measurementId: "G-YC23HRP9ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// Get a list of cities from your database
// async function getProjects(db) {
//   const citiesCol = collection(db, 'projects');
//   const citySnapshot = await getDocs(citiesCol);
//   console.log(citySnapshot);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }


