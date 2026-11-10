
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCWy00UW_P1FeAPvI91l1T0rSJING8MwEs",
  authDomain: "blog-app-emc-186ea.firebaseapp.com",
  projectId: "blog-app-emc-186ea",
  storageBucket: "blog-app-emc-186ea.firebasestorage.app",
  messagingSenderId: "183236506309",
  appId: "1:183236506309:web:da3f0710046d8bca3836ac",
  measurementId: "G-8VS95KLJHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth