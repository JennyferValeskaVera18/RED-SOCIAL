// segundo.js
import { initLogout } from "./firebase/logout.js";

document.addEventListener("DOMContentLoaded", () => {
  // Llama a la función de inicialización de logout
  initLogout();

  // Escucha el evento de logout y maneja la redirección
  document.addEventListener('userLogout', () => {
    window.location.href = 'index.html'; // Ajusta la ruta según tu estructura de archivos
  });
});
