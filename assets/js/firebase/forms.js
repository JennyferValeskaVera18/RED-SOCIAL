document.getElementById("register-tab").addEventListener("click", function() {
    document.getElementById("register").classList.add("show", "active");
    document.getElementById("login").classList.remove("show", "active");
  });
  
  document.getElementById("login-tab").addEventListener("click", function() {
    document.getElementById("login").classList.add("show", "active");
    document.getElementById("register").classList.remove("show", "active");
  });
  