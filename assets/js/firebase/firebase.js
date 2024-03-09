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
const firebaseConfig = {
apiKey: "AIzaSyBfyen0GUZXk_uQ9Fvh2-47UwO4yEcHGxs",
authDomain: "red-social-21672.firebaseapp.com",
projectId: "red-social-21672",
storageBucket: "red-social-21672.appspot.com",
messagingSenderId: "485975935410",
appId: "1:485975935410:web:3b7a7f3c0948b5951a3cab"
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