document.addEventListener("DOMContentLoaded", function() {
  // Event listeners y manipulación del DOM
  const registerTab = document.getElementById("register-tab");
  const loginTab = document.getElementById("login-tab");
  const logoutButton = document.getElementById("logout");

  if (registerTab && loginTab && logoutButton) {
      registerTab.addEventListener("click", function() {
          document.getElementById("register").classList.add("show", "active");
          document.getElementById("login").classList.remove("show", "active");
      });

      loginTab.addEventListener("click", function() {
          document.getElementById("login").classList.add("show", "active");
          document.getElementById("register").classList.remove("show", "active");
      });

      logoutButton.addEventListener("click", function() {
          // Tu código para cerrar sesión o manipulación del DOM
          // ...

          // Asegurarse de que ambas pestañas estén visibles
          document.getElementById("register").classList.remove("fade");
          document.getElementById("login").classList.remove("fade");
      });
  }
});
