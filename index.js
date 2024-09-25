document.addEventListener('DOMContentLoaded', function() {
    const enlacesIdioma = document.querySelectorAll('.enlace');

    // Función para resaltar el idioma seleccionado al pasar el mouse
    enlacesIdioma.forEach(enlace => {
        enlace.addEventListener('mouseenter', function() {
            enlace.style.textDecoration = 'underline'; // Subrayar enlace al pasar el mouse
        });

        enlace.addEventListener('mouseleave', function() {
            enlace.style.textDecoration = 'none'; // Quitar subrayado al quitar el mouse
        });
    });
});

// Función para mostrar el año actual en el footer
document.addEventListener('DOMContentLoaded', function() {
    const footerAnio = document.querySelector('.aqua');
    const anioActual = new Date().getFullYear();
    footerAnio.textContent += ` - ${anioActual}`;
});
