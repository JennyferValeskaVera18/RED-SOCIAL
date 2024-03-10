import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase/firebase.js";
import { loginCheck } from "./firebase/login_check.js";

import './firebase/signup_form.js';
import './firebase/signin_form.js';
import './firebase/google_login.js';
import './firebase/logout.js';

onAuthStateChanged(auth, async (user) => {
    // Si ha ingresado
    if (user) {
        // Redirigir a segundo.html
        window.location.href = "segundo.html";
    } else {
        // Si ha salido
        loginCheck(user);
    }
});


// Animación de ingresar
const sign_in_btn = document.querySelector("#signin-btn");
const sign_up_btn = document.querySelector("#signup-btn");
const container = document.querySelector(".main-container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
