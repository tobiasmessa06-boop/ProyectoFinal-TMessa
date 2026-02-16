# 🛒 Proyecto Final - Patagonia Go Play – Web App de E-commerce con React

Este proyecto es una **aplicación web de e-commerce** desarrollada como trabajo final del curso de React de CODERHOUSE ( Comision 88100 ).  
Permite visualizar un catálogo de productos, ver el detalle de cada uno, agregarlos a un carrito de compras y finalizar una compra, guardando la orden en **Firebase Firestore**.

La aplicación está construida como una **Single Page Application (SPA)**, lo que significa que la navegación es rápida y no recarga la página.

---

## 🚀 Tecnologías utilizadas

- **React** (con Vite)
- **React Router DOM** (navegación)
- **Context API** (estado global del carrito)
- **Firebase / Firestore** (base de datos)
- **CSS** (estilos)
- **JavaScript (ES6+)**

---

## 📦 Funcionalidades principales

### 🏪 Catálogo de productos
- Listado dinámico de productos obtenidos desde Firestore.
- Visualización individual de cada producto.
- Navegación sin recarga de página.

### 🔍 Detalle de producto
- Información detallada del producto seleccionado.
- Selector de cantidad mediante el componente **ItemCount**.
- Validación de stock y cantidad mínima.

### 🛒 Carrito de compras
- Agregar productos al carrito.
- Visualizar productos agregados, cantidades y subtotales.
- Eliminar productos o vaciar el carrito completo.
- Visualización del total de productos en el **CartWidget**.

### 💳 Checkout
- Formulario para ingresar los datos del comprador.
- Generación de una orden de compra.
- Guardado de la orden en **Firestore**.
- Muestra del **ID de la orden** al finalizar la compra.

### ⚙️ Experiencia de usuario
- Renderizado condicional (carrito vacío, loaders, etc.).
- Flujo de compra claro y ordenado.

---
## 🧠 Estructura del proyecto
src/
│
├── components/
│ ├── NavBar/
│ ├── ItemListContainer/
│ ├── ItemDetailContainer/
│ ├── ItemCount/
│ ├── Cart/
│ ├── Checkout/
│
├── context/
│ └── CartContext.jsx
│
├── service/
│ └── firebase.jsx
│
├── data/
│ └── products.js
│
├── App.jsx
├── main.jsx

---

## 🌐 Navegación (React Router)

La aplicación cuenta con las siguientes rutas:

- `/` → Catálogo de productos
- `/item/:id` → Detalle de producto
- `/cart` → Carrito de compras
- `/checkout` → Finalizar compra
- `*` → Página no encontrada

---

## 🔥 Firebase / Firestore

- Los productos se obtienen desde una colección en Firestore.
- Al confirmar una compra, se genera un documento con:
  - Datos del comprador
  - Productos comprados
  - Total
  - Fecha
- Firestore devuelve un **ID de orden**, que se muestra al usuario.

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio: ```bash git clone https://github.com/tobiasmessa06-boop/ProyectoFinal-TMessa.git
2. Ingresar a la carpeta del proyecto: cd pgp-react
3. Instalar dependencias: npm install
4. Ejecutar el proyecto: npm run dev
5. Abrir el navegador en: http://localhost:xxxx ( Manteniendo control y haciendo click en el link se abre directo )

AUTOR: TOBIAS A.MESSA

