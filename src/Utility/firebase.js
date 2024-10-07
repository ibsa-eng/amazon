// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCvb5bf_Xm0bqcXr0tO8FaToV6-UwpQj3g",
//   authDomain: "clone-81748.firebaseapp.com",
//   projectId: "clone-81748",
//   storageBucket: "clone-81748.appspot.com",
//   messagingSenderId: "685569383250",
//   appId: "1:685569383250:web:c248b4d19b5b5958a8388b",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvb5bf_Xm0bqcXr0tO8FaToV6-UwpQj3g",
  authDomain: "clone-81748.firebaseapp.com",
  projectId: "clone-81748",
  storageBucket: "clone-81748.appspot.com",
  messagingSenderId: "685569383250",
  appId: "1:685569383250:web:c248b4d19b5b5958a8388b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
