import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show-message.js";

document.addEventListener("DOMContentLoaded", function() {
    const googleButton = document.querySelector("#google-login");

    if (googleButton) {
        googleButton.addEventListener("click", async () => {
            const provider = new GoogleAuthProvider();

            try {
                const credentials = await signInWithPopup(auth, provider);
                showMessage("Bienvenido/a " + "@" + credentials.user.displayName);
            } catch (error) {
                console.log(error);
            }
        });
    }
});
