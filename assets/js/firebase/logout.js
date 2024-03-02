//Funcion de firebase que eprmite cerrar sesiond e nuestro frontend
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import {auth} from "./firebase.js"

const logout = document.querySelector("#logout");
const registroFormulario = document.getElementsByClassName("container")[0]; // Accede al primer elemento de la lista

logout.addEventListener("click", async () => {
    await signOut(auth);
    console.log("Usuario cerró sesión");

    // Después de hacer logout, muestra el formulario de registro
    if (registroFormulario) {
        registroFormulario.style.display = "block";
    }
});
