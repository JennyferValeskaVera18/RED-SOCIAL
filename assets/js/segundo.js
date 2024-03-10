// segundo.js
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase/firebase.js";
import { setUpTasks } from "./firebase/setup_tasks.js";
import "./firebase/logout.js"; 

// Espera a que el estado de autenticación cambie
onAuthStateChanged(auth, user => {
    if (user) {
        // Si hay un usuario autenticado, configura la visualización de tareas
        setUpTasks(user);
    } else {
        // Si no hay un usuario autenticado, redirige a la página de inicio de sesión
        window.location.href = "index.html";
    }
});
