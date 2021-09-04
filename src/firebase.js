import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAksm9dpHnygbfenqlATBLXoDdPr5tXs3M",
    authDomain: "fir-chat-6c473.firebaseapp.com",
    projectId: "fir-chat-6c473",
    storageBucket: "fir-chat-6c473.appspot.com",
    messagingSenderId: "1039719994656",
    appId: "1:1039719994656:web:5b48ff6afa17a4beb97345"
}).auth();