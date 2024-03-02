import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./show-message.js"; 

const signInForm = document.querySelector("#signin-form");

signInForm.addEventListener("submit", async e => {
    e.preventDefault()

    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        
        // Ocultar el formulario de registro después del registro exitoso
        const formContainer = signInForm.closest(".container");
        formContainer.style.display = "none";

        showMessage("Bienvenido/a " + "@" + credentials.user.email)
    } catch (error) {
        onsole.log(error);
        if(error.code === "auth/wrong-password") {
            showMessage("Wrong password", "red") //coloco los argumentos de las variables de la función
        }
        else if (error.code === "auth/user-not-found") {
            //alert("Weak password");
            showMessage("User not found", "red")
        }
        else {
            //alert("Something went wrong :( ");
            showMessage("Something went wrong", "red")
        }
    }


})