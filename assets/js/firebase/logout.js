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
