import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);

export default app;