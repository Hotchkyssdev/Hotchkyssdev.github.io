document.addEventListener('DOMContentLoaded', function() {
    // Función para cambiar el color de fondo de los botones al hacer clic
    function cambiarColorBoton(event) {
        event.target.style.backgroundColor = 'blue'; // Cambia el color de fondo del botón al azul
    }

    // Añadir evento click a todos los botones con la clase 'btn'
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', cambiarColorBoton);
    });

    // Función para mostrar/ocultar imágenes al hacer clic
    function toggleImagen(event) {
        const imagen = event.target;
        imagen.classList.toggle('visible'); // Toggle la clase 'visible' para mostrar/ocultar la imagen
    }

    // Añadir evento click a todas las imágenes con la clase 'foto'
    document.querySelectorAll('.foto').forEach(image => {
        image.addEventListener('click', toggleImagen);
    });
    
    // Añadir evento click a todos los botones con la clase 'btn' dentro de elementos <a>
    document.querySelectorAll('a .btn').forEach(enlace => {
        enlace.addEventListener('click', confirmarDescarga);
    });

    // Función para cambiar el color de fondo al pasar el mouse sobre las tarjetas
    function cambiarColorTarjeta(event) {
        const tarjeta = event.target.closest('.card, .card2');
        if (tarjeta) {
            tarjeta.style.backgroundColor = 'lightgray'; // Cambia el color de fondo de la tarjeta al pasar el mouse
        }
    }

    // Función para restaurar el color de fondo de las tarjetas al quitar el mouse
    function restaurarColorTarjeta(event) {
        const tarjeta = event.target.closest('.card, .card2');
        if (tarjeta) {
            tarjeta.style.backgroundColor = ''; // Restaura el color de fondo de la tarjeta al quitar el mouse
        }
    }

    // Añadir eventos mouseenter y mouseleave a todas las tarjetas con las clases 'card' y 'card2'
    document.querySelectorAll('.card, .card2').forEach(card => {
        card.addEventListener('mouseenter', cambiarColorTarjeta);
        card.addEventListener('mouseleave', restaurarColorTarjeta);
    });

    // Función para cambiar el tamaño de fuente al hacer doble clic en los párrafos
    function cambiarTamañoFuente(event) {
        const parrafo = event.target.closest('p');
        if (parrafo) {
            const tamañoActual = parseFloat(window.getComputedStyle(parrafo).fontSize);
            parrafo.style.fontSize = (tamañoActual < 16 ? tamañoActual * 1.2 + 'px' : '14px');
        }
    }

    // Añadir evento doble clic a todos los párrafos
    document.querySelectorAll('p').forEach(parrafo => {
        parrafo.addEventListener('dblclick', cambiarTamañoFuente);
    });

});
