// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1oPm-llME7_pjf78SVohp1iFbpFceuDA",
  authDomain: "nextjsdata-a0e12.firebaseapp.com",
  databaseURL: "https://nextjsdata-a0e12-default-rtdb.firebaseio.com",
  projectId: "nextjsdata-a0e12",
  storageBucket: "nextjsdata-a0e12.appspot.com",
  messagingSenderId: "642910355161",
  appId: "1:642910355161:web:9fd4e3bbce9ae7a75748c8",
  measurementId: "G-RTJEBRPSR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
