import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYpsvnEZ6b-V39gy9r4SdiHc9IbLOZ_hs",
  authDomain: "urbandrop-71c39.firebaseapp.com",
  projectId: "urbandrop-71c39",
  storageBucket: "urbandrop-71c39.firebasestorage.app",
  messagingSenderId: "840514210166",
  appId: "1:840514210166:web:c24a74c6fdd67316975257",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);