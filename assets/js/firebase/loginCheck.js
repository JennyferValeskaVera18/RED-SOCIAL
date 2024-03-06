import { showMessage } from "./show-message.js";
const loggedInLinks = document.querySelectorAll(".logged-in")
const mainTaskContainer = document.getElementById("task-main-container");
const forms = document.querySelector("#forms-logout");

console.log(loggedInLinks)

export function loginCheck(user) {
    console.log("Función loginCheck llamada.");
    if (user) {
        console.log("Usuario autenticado.");
        loggedInLinks.forEach(link => link.style.display = "block");
        //por cada enlace, usamos su propiedad llmada styles, y display en none
        mainTaskContainer.style.display = "flex";
        // Ocultar el formulario de registro después del registro exitoso
        forms.style.display = "none";
        showMessage('Logged in', 'green');
    } else {
        console.log("Usuario no autenticado.");
        loggedInLinks.forEach(link => link.style.display = "none");
        mainTaskContainer.style.display = "none";
        forms.style.display = "flex";
        showMessage('Logged out', 'orange');
    }
}
