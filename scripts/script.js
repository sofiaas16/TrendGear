document.addEventListener('DOMContentLoaded', () => {
    const botonAgregar = document.getElementById('addBtn');
    const inputNombre = document.getElementById('clientName');
    const inputEmail = document.getElementById('clientEmail');
    const inputProducto = document.getElementById('clientProduct');
    const inputPrecio = document.getElementById('clientPrice');
    const inputPago = document.getElementById('clientPayment');
    const inputEnvio = document.getElementById('clientShipping');
    const inputFecha = document.getElementById('purchaseDate');
    const clientList = document.getElementById('clientList');

    const emptyStateTemplate = document.getElementById('emptyStateTemplate');
    const clientItemTemplate = document.getElementById('clientItemTemplate');

    const API_URL = 'https://693881bb4618a71d77d08318.mockapi.io/api/tienda-ficticia/products';

    inputFecha.valueAsDate = new Date();


});