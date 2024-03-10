// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdzzFZitw1GRNl-2R6A9TNCFjn6k7HH7Y",
  authDomain: "primer-firebase-2024.firebaseapp.com",
  projectId: "primer-firebase-2024",
  storageBucket: "primer-firebase-2024.appspot.com",
  messagingSenderId: "954438129290",
  appId: "1:954438129290:web:8ab6f3f790aaaf1df7bf73",
  measurementId: "G-E8Q5HQGZ48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// Funciones del CRUD
export const createTask = (title, description, userName, date, time) => addDoc(collection(db, "tasks"), {title, description, userName, date, time});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const updateTask = (id,newFields ) => updateDoc(doc(db, "tasks" , id), newFields);

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));