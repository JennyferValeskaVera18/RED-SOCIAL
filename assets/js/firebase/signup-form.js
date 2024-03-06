//Ponemos el método que espera 3 parámeetros
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show-message.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    console.log(email, password);

    try {
        const userDatos = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userDatos);

        showMessage("Bienvenido/a " + "@" + userDatos.user.email)
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Correo ya en uso", "linear-gradient(to left, #e46161, #dc2f2f, #ff0000");
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Correo inválido', "linear-gradient(to left, #e46161, #dc2f2f, #ff0000");
        } else if (error.code === 'auth/weak-password') {
            showMessage('Contraseña debil', "linear-gradient(to left, #e46161, #dc2f2f, #ff0000");
        } else {
            showMessage('Ups! Algo salió mal', "linear-gradient(to left, #e46161, #dc2f2f, #ff0000");
        }
    }
});
