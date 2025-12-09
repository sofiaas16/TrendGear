🛒 TrendGear - Sistema de Gestión de Compras

Sistema CRUD completo para la gestión de datos de clientes de TrendGear, una tienda en línea ficticia de dispositivos tecnológicos. Este proyecto busca implementar buenas prácticas de desarrollo web con separación total de responsabilidades entre los demás archivos (HTML, CSS, JS) y persistencia de datos mediante MockAPI.

🚀 Características
Gestión Completa de Compras

✅ Crear nuevos registros de compra con información detallada del cliente
✅ Visualizar las compras en una interfaz limpia y organizada
✅ Eliminar registros individuales de compras
✅ Campos personalizables: Producto y Método de Pago (escribir o seleccionar)

**Persistencia de Datos**

Todos los registros se almacenan en MockAPI
Los datos permanecen disponibles tras refrescar o cerrar el navegador
Sincronización automática con la API

**Experiencia de Usuario**

- Interfaz moderna
- Campos de entrada con validación
- Selector de fecha con valor predeterminado (fecha actual, pero también puede elegir otra fecha)
- Formato automático de precios en USD
- Estado vacío visual cuando no hay registros


🧩 Estructura del Proyecto
TrendGear/
│
├── index.html          # Estructura principal de la página (solo HTML)
├── styles/
│   └── style.css       # Estilos completos de la interfaz (solo CSS)
├── scripts/
│   └── script.js       # Lógica de la aplicación y conexión con MockAPI (solo JS)
├── snoopy.jpg          # Logo de la aplicación
└── README.md           # Documentación del proyecto

🛠️ Tecnologías Utilizadas

HTML5 - Estructura semántica con templates
CSS3 - Diseño moderno con gradientes y transiciones
JavaScript - Lógica asíncrona con Fetch API
MockAPI - Backend simulado para persistencia de datos

📦 Instalación y Uso
1. Clonar el repositorio
bashgit clone https://github.com/sofiaas16/TrendGear.git

### **2. Configurar MockAPI**

La aplicación usa MockAPI como backend. La URL actual es:
```
https://693881bb4618a71d77d08318.mockapi.io/api/tienda-ficticia/products
Estructura recomendada en MockAPI:
json{
  "id": "auto",
  "name": "String",
  "email": "String",
  "product": "String",
  "price": "Number",
  "payment": "String",
  "shipping": "String",
  "purchaseDate": "String"
}

🎯 Caso de Estudio: TrendGear
Contexto: TrendGear es una tienda en línea ficticia de dispositivos tecnológicos que utiliza técnicas de marketing y recopila información detallada sobre sus clientes, incluyendo:

- Qué productos compran
- Cómo realizan sus pagos
- Cuándo realizan sus compras
- Su método de envío preferido

Este sistema permite gestionar esa información de forma eficiente y organizada.
