import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show-message.js";

document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.querySelector("#signin-form");

    if (signinForm) {
        signinForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = signinForm["login-email"].value;
            const password = signinForm["login-password"].value;

            try {
                const credentials = await signInWithEmailAndPassword(auth, email, password);
                console.log(credentials);

                showMessage("Bienvenido/a " + "@" + credentials.user.email);
                window.location.href = "../home.html";  // Ajusta la ruta según la estructura de tu proyecto
            } catch (error) {
                console.log(error);

                console.log(error);
                if (error.code === "auth/wrong-password") {
                    showMessage("Wrong password", "red");
                } else if (error.code === "auth/user-not-found") {
                    showMessage("User not found", "red");
                } else {
                    showMessage("Something went wrong", "red");
                }
            }
        });
    }
});
