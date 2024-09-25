document.addEventListener('DOMContentLoaded', function() {
    // Función para cambiar el color de fondo de los botones al pasar el ratón
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ffcc00'; // Cambia el color al pasar el ratón
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Vuelve al color original al quitar el ratón
        });
    });

    // Función para mostrar información adicional al hacer clic en las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const description = this.querySelector('.card__description');
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});
