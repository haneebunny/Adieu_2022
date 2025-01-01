// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAShv3m6V_uBpjBk_A4cZUMlGzDoslk0I8",
  authDomain: "adieu2024-2d8cd.firebaseapp.com",
  projectId: "adieu2024-2d8cd",
  storageBucket: "adieu2024-2d8cd.firebasestorage.app",
  messagingSenderId: "552004255492",
  appId: "1:552004255492:web:13f03b79982d5862685a51",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
