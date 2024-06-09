// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDffI6QJzlASSBUPa14_RqZ_H8HOxoKTDQ",
  authDomain: "chew-crud.firebaseapp.com",
  projectId: "chew-crud",
  storageBucket: "chew-crud.appspot.com",
  messagingSenderId: "339739151201",
  appId: "1:339739151201:web:3ea58ef42f12899cc4d320",
  measurementId: "G-TSKWY0R8QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db: