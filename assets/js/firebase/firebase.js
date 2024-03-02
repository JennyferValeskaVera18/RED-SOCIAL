// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"

import {
    getFirestore, //tare la conexion con firestore 
    collection,//forma de crear una coleccion de datos para guardar
    doc,
    addDoc, //Para añadior doumento a la cole cción
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"; 

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBfyen0GUZXk_uQ9Fvh2-47UwO4yEcHGxs",
authDomain: "red-social-21672.firebaseapp.com",
projectId: "red-social-21672",
storageBucket: "red-social-21672.appspot.com",
messagingSenderId: "485975935410",
appId: "1:485975935410:web:3b7a7f3c0948b5951a3cab"
};
  

 // Initialize Firebase: ara inicializar tu aplicación Firebase con la configuración proporcionada.
 export const app = initializeApp(firebaseConfig);
 //para inicializar la autenticación
 export const auth = getAuth(app);
 //Conexion a la base de datos coleection,AUTENTICAR la base de datos Firestore respectivamente.
 export const db = getFirestore(app);
 
// Funciones del CRUD
//Para añadir un documento a la colección "tasks".
export const createTask = (title, description, userName, date, time) => addDoc(collection(db, "tasks"), {title, description, userName, date, time});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const updateTask = (id,newFields ) => updateDoc(doc(db, "tasks" , id), newFields);

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));
  //Lo exporto como Una constante que ya se puede utilizar para autenticar usuarios 
  //export const increment = increment;
 


 /*
 //Conexion a la base de datos coleection,AUTENTICAR la base de datos Firestore respectivamente.
 export const db = getFirestore(app);
 
 // Funciones del CRUD
 //Para añadir un documento a la colección "tasks".
 export const createTask = (title, description, userName, date, time) => addDoc(collection(db, "tasks"), {title, description, userName, date, time});
 
 export const getTask = id => getDoc(doc(db, "tasks", id));
 
 export const updateTask = (id,newFields ) => updateDoc(doc(db, "tasks" , id), newFields);
 
 export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);
 
 export const deleteTask = id => deleteDoc(doc(db, "tasks", id));
  //Lo exporto como Una constante que ya se puede utilizar para autenticar usuarios 
*/

/*
// Importa la instancia de Firebase y el método de actualización de documentos
import { db } from "./firebaseConfig.js";

// Función para dar "like" a una tarea
export function likeTask(taskId) {
    // Obtén una referencia al documento de la tarea en la base de datos
    const taskRef = db.collection("tasks").doc(taskId);

    // Incrementa el contador de likes utilizando el método de actualización de documentos de Firebase
    return taskRef.update({
        likes: firebase.firestore.FieldValue.increment(1)
    });
}
*/