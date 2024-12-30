// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
