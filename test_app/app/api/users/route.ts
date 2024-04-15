import { NextRequest,NextResponse } from 'next/server';
//import { NextApiRequest, NextApiResponse } from 'next';
//import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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
//const app = initializeApp(firebaseConfig);
//get db instance
//const firestore = getFirestore(app);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//httpmethod test success
export async function GET(req:NextRequest)
{
    var data= req.nextUrl.searchParams.get("id")?.toString()
    const result = ((await db.collection("member").doc(data).get()));
    //log query here
    //return NextResponse.json({data});
    if(!result.exists){
        return NextResponse.json("000 - not existed in list");
    }
    else{
        return NextResponse.json(result.data());
    }
}

export async function POST(req:Request)
{
    const data = await req.json();
    const dbtest = db.collection("member").doc(data.name).set(
        {
            name : data.name,
            birth:data.birth,
            phone:data.phone
    });
    //log query here
    return NextResponse.json({
        dbtest
    });
}