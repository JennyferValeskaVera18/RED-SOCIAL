// loginCheck.js
export function loginCheck(user) {
    console.log("Función loginCheck llamada.");

    if (user) {
        console.log("Usuario autenticado.");

        // Verificar si el elemento existe antes de intentar acceder a su estilo
        const formContainer = document.querySelector(".container");
        if (formContainer) {
            formContainer.style.display = "none";
        }
    }
}
