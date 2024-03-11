//Funcion de firebase que eprmite cerrar sesiond e nuestro frontend
import {auth} from "./firebase.js"
import { showMessage } from "./show-message.js";

const loggedInLinks = document.querySelectorAll(".logged-in")
const mainTaskContainer = document.getElementById("task-main-container");
const forms = document.querySelector("#forms-logout");


console.log(loggedInLinks)

export function loginCheck(user) {
    console.log("Función loginCheck llamada.");
    const navbar = document.querySelector('.navbar-nav');
    if (user) {
        console.log("Usuario autenticado.");
        loggedInLinks.forEach(link => link.style.display = "block");
        //por cada enlace, usamos su propiedad llmada styles, y display en none
        mainTaskContainer.style.display = "flex";
        // Ocultar el formulario de registro después del registro exitoso
        forms.style.display = "none";
        showMessage('Haz iniciados sesión', 'green');
        const defaultProfilePhotoURL = "https://i.pinimg.com/564x/0d/42/90/0d42905fc5e9d14fa032d8ea0282bf68.jpg";
        const pfp = user.photoURL ? user.photoURL : defaultProfilePhotoURL ;
        const userName = user.displayName ? user.displayName : "Usuario Anónimo";

        navbar.innerHTML = `
            <li class="nav-item logged-in">
                <a class="nav-link" href="index.html">
                    <img src="${pfp}" alt="Foto de Perfil" class="profile-photo rounded-circle me-2">
                    ${userName}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link logged-in" href="perfil.html">Home</a>
            </li>
            <li class="nav-item logged-in">
                <a class="nav-link" id="logout" href="#">Cerrar Sesión</a>
            </li>
        `;

        // Agregar evento al botón de logout
        const logoutBtn = navbar.querySelector('#logout');
        logoutBtn.addEventListener('click', async () => {
            await auth.signOut();
        });
    } else {
        console.log("Usuario no autenticado.");
        loggedInLinks.forEach(link => link.style.display = "none");
        mainTaskContainer.style.display = "none";
        forms.style.display = "flex";
        showMessage('Haz cerrado sesión', 'orange');

        navbar.innerHTML = '';
    }
}
