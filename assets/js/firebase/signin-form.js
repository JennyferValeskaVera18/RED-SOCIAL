import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show-message.js";

// Traemos el form necesario
const signinForm = document.getElementById("signin-form");

signinForm.addEventListener('submit', async (e) => {
    // Para prevenir que la página se recargue
    e.preventDefault();

    // Accedemos a los elementos con notación de corchete
    const email = signinForm['email-signin'].value;
    const password = signinForm['password-signin'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);

        // Almacenar el estado de autenticación en el almacenamiento local
        localStorage.setItem('user_authenticated', 'true');

        // Redirigir al usuario a segundo.html
        window.location.href = 'segundo.html';
    }
    catch (error) {
        console.log(error);
        if(error.code === "auth/wrong-password") {
            showMessage("Wrong password", "red"); // Coloco los argumentos de las variables de la función
        }
        else if (error.code === "auth/user-not-found") {
            showMessage("User not found", "red");
        }
        else {
            showMessage("Something went wrong", "red");
        }
    }
});
