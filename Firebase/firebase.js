// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEe_Z93TaU8fD-yeFonb_J3a1p_8xb3Q",
  authDomain: "nextjs-test-01-4d3d4.firebaseapp.com",
  projectId: "nextjs-test-01-4d3d4",
  storageBucket: "nextjs-test-01-4d3d4.appspot.com",
  messagingSenderId: "135907609913",
  appId: "1:135907609913:web:07b949562aff9fea516ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);