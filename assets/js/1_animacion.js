document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    // Función para mostrar una sección por su ID
    function showSection(sectionId) {
      sections.forEach(section => (section.style.display = section.id === sectionId ? 'block' : 'none'));
    }

    // Mostrar la sección predeterminada al cargar la página
    showSection(window.location.hash.substring(1) || 'seccion1');

    // Manejar clics en los enlaces del Navbar
    document.querySelectorAll('.navbar-nav a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        showSection(this.getAttribute('href').substring(1));
      });
    });
  });