// login_check.js
export function loginCheck(user) {
    const loggedOutElements = document.querySelectorAll('.logged-out');
    const loggedInElements = document.querySelectorAll('.logged-in');

    // Verificar si el usuario está autenticado
    if (user) {
        // Mostrar elementos de "logged-in" y ocultar elementos de "logged-out"
        loggedInElements.forEach(element => {
            if (element.style) {
                element.style.display = 'block';
            }
        });

        loggedOutElements.forEach(element => {
            if (element.style) {
                element.style.display = 'none';
            }
        });
    } else {
        // Mostrar elementos de "logged-out" y ocultar elementos de "logged-in"
        loggedOutElements.forEach(element => {
            if (element.style) {
                element.style.display = 'block';
            }
        });

        loggedInElements.forEach(element => {
            if (element.style) {
                element.style.display = 'none';
            }
        });
    }
}
