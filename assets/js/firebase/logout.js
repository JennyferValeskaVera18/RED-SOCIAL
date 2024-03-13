import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";

document.addEventListener("DOMContentLoaded", function() {
    // Tu código de logout aquí
    const logoutButton = document.getElementById('logout');
    
    logoutButton.addEventListener('click', async () => {
        try {
            await auth.signOut();
            showMessage('Logged out successfully', 'green');
            // Redirige a la página de inicio de sesión después de cerrar sesión
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            showMessage('Error al cerrar sesión', 'red');
        }
    });
});
/*//Funcion de firebase que eprmite cerrar sesiond e nuestro frontend
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import {auth} from "./firebase.js"

const logout = document.querySelector("#logout");
const registroFormulario = document.getElementsByClassName("container")[0]; // Accede al primer elemento de la lista

logout.addEventListener("click", async () => {

    if (registroFormulario) {
        registroFormulario.style.display = "block";
    }
});
*/