import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";

document.addEventListener("DOMContentLoaded", () => {
    // Asegúrate de que el elemento exista antes de agregar el event listener
    const googleLoginButton = document.getElementById("google-login");

    if (googleLoginButton) {
        googleLoginButton.addEventListener('click', async () => {
            const provider = new GoogleAuthProvider();

            try {
                await signInWithPopup(auth, provider);
            } catch (error) {
                console.error(error);
                showMessage("Google login failed", "red");
            }
        });
    }
});
