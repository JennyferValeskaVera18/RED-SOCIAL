// main.js

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from "./firebase/firebase.js";
import { loginCheck } from "./firebase/loginCheck.js";

import "./firebase/signup-form.js";
import "./firebase/logout.js";
import "./firebase/forms.js";
import "./firebase/googleLogin.js";
import "./firebase/signin-form.js";

// Importa la función setUpTasks directamente desde su ubicación
import setUpTasks from "./firebase/funciones.js";

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
        setUpTasks(user); // Llama directamente a la función
    } else {
        loginCheck(user);
    }
});

// Agregar el event listener después de cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Redirigir a la página principal cuando se hace clic en el botón de salir
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});

// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Redirigir a la página principal cuando se hace clic en el botón de salir
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            // Redirigir a la página principal (cambia "index.html" si es necesario)
            window.location.href = "index.html";
        });
    }
});

