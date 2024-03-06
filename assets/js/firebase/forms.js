document.getElementById("register-tab").addEventListener("click", function() {
    document.getElementById("register").classList.add("show", "active");
    document.getElementById("login").classList.remove("show", "active");
  });
  
  document.getElementById("login-tab").addEventListener("click", function() {
    document.getElementById("login").classList.add("show", "active");
    document.getElementById("register").classList.remove("show", "active");
  });

  document.getElementById("logout").addEventListener("click", function() {
    // Mostrar la pestaña de registro y la pestaña de inicio de sesión
    document.getElementById("register").classList.add("show", "active");
    document.getElementById("login").classList.add("show", "active");

    // Asegurarse de que ambas pestañas estén visibles
    document.getElementById("register").classList.remove("fade");
    document.getElementById("login").classList.remove("fade");
});
