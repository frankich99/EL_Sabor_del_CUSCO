// El Sabor del Cusco - Script interactivo simple
// Autor: Frank (frankich99)

document.addEventListener('DOMContentLoaded', () => {
    const selectPlato = document.getElementById('plato');
    const orderForm = document.querySelector('.order-form');

    // Precios referenciales de cada plato
    const precios = {
        'chiri-uchu': 38,
        'lechon': 32,
        'kapchi': 24,
        'trucha': 26,
        'choclo': 12,
        'caldo': 20,
        'rocoto': 22,
        'cabeza': 18
    };

    // Al cambiar la opción de plato, mostrar notificación amigable
    if (selectPlato) {
        selectPlato.addEventListener('change', (e) => {
            const platoSeleccionado = e.target.value;
            if (precios[platoSeleccionado]) {
                console.log(`Plato seleccionado: ${platoSeleccionado} - Precio: S/ ${precios[platoSeleccionado]}.00`);
            }
        });
    }

    // Manejar envío del formulario
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const plato = selectPlato.options[selectPlato.selectedIndex].text;
            const direccion = document.getElementById('direccion').value;

            alert(`¡Muchas gracias, ${nombre}!\nTu pedido de "${plato}" será enviado pronto a: ${direccion}.\n¡Buen provecho con el sabor del Cusco!`);
            orderForm.reset();
        });
    }
});
