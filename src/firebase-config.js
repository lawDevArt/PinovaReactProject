import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9LvyPqWi622VwPNVo88ntDGytHcZFDc8",
    authDomain: "pinova-54ed7.firebaseapp.com",
    databaseURL: "https://pinova-54ed7-default-rtdb.firebaseio.com",
    projectId: "pinova-54ed7",
    storageBucket: "pinova-54ed7.appspot.com",
    messagingSenderId: "390839039672",
    appId: "1:390839039672:web:0a9f80580f88feb0e7e64d",
    measurementId: "G-8L5MZVGPRY"
};


export const app = initializeApp(firebaseConfig);;