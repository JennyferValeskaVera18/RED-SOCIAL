// logout.js
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            // Mostrar la pestaña de registro y la pestaña de inicio de sesión
            document.getElementById("register").classList.add("show", "active");
            document.getElementById("login").classList.remove("show", "active");
        });
    }
});
