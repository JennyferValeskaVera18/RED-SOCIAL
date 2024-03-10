import { showMessage } from "./show_message.js";

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const mainTaskContainer = document.getElementById("task-main-container");

export const loginCheck = user => {
    // Si el usuario existe, redirigir ya se maneja en main.js
    if (user) {
        return;
    }

    // Si no hay usuario, manejar visibilidad y mensajes
    loggedInLinks.forEach(link => link.style.display = 'none');
    loggedOutLinks.forEach(link => link.style.display = 'block');
    mainTaskContainer.style.display = "none";
    showMessage('Logged out', 'orange');
};
