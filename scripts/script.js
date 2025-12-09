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

    document.querySelectorAll('.combo-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetId = this.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);
            
            document.querySelectorAll('.combo-dropdown').forEach(dd => {
                if (dd.id !== targetId) dd.classList.remove('show');
            });
            
            dropdown.classList.toggle('show');
        });
    });

    document.querySelectorAll('.combo-option').forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const dropdown = this.closest('.combo-dropdown');
            const wrapper = dropdown.closest('.combo-wrapper');
            const input = wrapper.querySelector('.combo-input');
            
            input.value = value;
            dropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.combo-wrapper')) {
            document.querySelectorAll('.combo-dropdown').forEach(dd => {
                dd.classList.remove('show');
            });
        }
    });

    async function fetchData() {
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    }

    function displayClients(clients) {
        clientList.innerHTML = '';

        if (clients.length === 0) {
            const emptyState = emptyStateTemplate.content.cloneNode(true);
            clientList.appendChild(emptyState);
            return;
        }

        clients.forEach(client => {
            const item = clientItemTemplate.content.cloneNode(true);
            
            item.querySelector('[data-field="name"]').textContent = client.name;
            item.querySelector('[data-field="price"]').textContent = client.price ? `$${parseFloat(client.price).toFixed(2)}` : '$0.00';
            item.querySelector('[data-field="email"]').textContent = client.email;
            item.querySelector('[data-field="product"]').textContent = client.product;
            item.querySelector('[data-field="payment"]').textContent = client.payment;
            item.querySelector('[data-field="shipping"]').textContent = client.shipping;
            item.querySelector('[data-field="purchaseDate"]').textContent = client.purchaseDate || 'Sin fecha';
            
            const deleteBtn = item.querySelector('[data-field="deleteBtn"]');
            deleteBtn.setAttribute('client-id', client.id);
            deleteBtn.addEventListener('click', deleteClient);

            clientList.appendChild(item);
        });
    }

    async function addClient() {
        const name = inputNombre.value.trim();
        const email = inputEmail.value.trim();
        const product = inputProducto.value.trim();
        const price = inputPrecio.value;
        const payment = inputPago.value.trim();
        const shipping = inputEnvio.value;
        const purchaseDate = inputFecha.value;

        if (!name || !email || !product || !price || !payment || !purchaseDate) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }

        const newClient = {
            name: name,
            email: email,
            product: product,
            price: parseFloat(price),
            payment: payment,
            shipping: shipping,
            purchaseDate: purchaseDate
        };

        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newClient)
        });

        inputNombre.value = '';
        inputEmail.value = '';
        inputProducto.value = '';
        inputPrecio.value = '';
        inputPago.value = '';
        inputFecha.valueAsDate = new Date();
        
        const data = await fetchData();
        displayClients(data);
    }

    async function deleteClient(evento) {
        const id = evento.target.getAttribute('client-id');
        
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        const data = await fetchData();
        displayClients(data);
    }

    botonAgregar.addEventListener('click', addClient);

    inputFecha.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addClient();
    });

    fetchData().then(data => {
        displayClients(data);
    });
});