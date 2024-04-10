import { NextRequest,NextResponse } from 'next/server';
//import type { NextApiRequest, NextApiResponse } from 'next'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
// route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAdditionalUserInfo } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
//firebase init
// TODO: Add SDKs for Firebase products that you want to use
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
//const analytics = getAnalytics(app);
//const db2 = getDatabase();

// 创建 Firestore 实例
const db = getFirestore(app);

export async function handler(req: Request, res: NextApiResponse) {
  try {
    //const snapshot = await db2..collection().get();
    //const data = snapshot.docs.map(doc => doc.data());
    const data = await req.json();
    res.status(200).json({ data });
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    res.status(500).json({ error: 'Error accessing Firestore' });
  }
}
//import firebase from firebase;
//

//handler
//const db = firebase.firebase();
//
////httpmethod test success
//export async function GET(req:NextApiRequest)
//{
//    //const data = await req;
//    //var data = NextRequest.arguments('id');
//    return NextResponse.json(req.body);
//}
//
export async function POST(request:Request)
{
    const data = await request.json();
    db.app.name("member");
    return NextResponse.json({
        data
    });
}