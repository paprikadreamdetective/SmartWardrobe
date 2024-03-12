import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/auth';
import {v4 as uuidv4} from 'uuid'

declare module 'uuid';


const config = {
    apiKey: "AIzaSyCJ0Ji7aHr9ZvSWlqsY4bwvHLQagHECePY",
    authDomain: "db-wardrobe.firebaseapp.com",
    projectId: "db-wardrobe",
    storageBucket: "db-wardrobe.appspot.com",
    messagingSenderId: "869858330350",
    appId: "1:869858330350:web:12babf09f7702f538d95ff"
}
/*
const config = {
    apiKey: "AIzaSyAlx44qZnFE6GktM2YVVz5bFOgvopeneS0",
    authDomain: "dbwardrobe-29702.firebaseapp.com",
    projectId: "dbwardrobe-29702",
    storageBucket: "dbwardrobe-29702.appspot.com",
    messagingSenderId: "72353489510",
    appId: "1:72353489510:web:f1deab2579fc3c6f0b03a7",
  };*/

const fb = firebase.initializeApp(config)

export const storage = getStorage(fb);

export const db = fb.firestore();

export async function uploadFile(file:any){
    const storageRef = ref(storage, uuidv4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}


firebase.auth()

export async function loginUser(username:string, password:string){

    const email = `${username}`

    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)

        console.log(res)
        return true
    }catch(error){
        console.log(error)
        return false
    }
}

