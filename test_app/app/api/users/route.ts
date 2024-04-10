import { NextRequest,NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, getDocs } from "firebase/firestore";
//firebase import
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
//firebase init
const app = initializeApp(firebaseConfig);
//get db instance
const db = getFirestore(app);

//httpmethod test success
export async function GET(req:NextRequest)
{
    //const data = await req;
    //var data = NextRequest.arguments('id');
    const data = req.nextUrl.searchParams.get("id")
    return NextResponse.json({data});
}

export async function POST(req:Request)
{
    const data = await req.json();
    //const Firestore = require('@google-cloud/firestore');
    //const db2 = new Firestore({
    //    projectId: 'nextjsdata-a0e12',
    //    keyFilename: firebaseConfig,
    //  });
    //  const db2test = db2.collection('member').doc('user');
    var hhh = db.toJSON();
    return NextResponse.json({
        hhh
    });
}