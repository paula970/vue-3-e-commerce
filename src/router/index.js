// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductListView from '@/views/ProductListView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';

const routes = [
  // Ruta de redirección: si alguien accede a '/', será redirigido a '/products'
  {
    path: '/',
    redirect: '/products'
  },
  // Vista principal: mostrará el listado de todos los productos
  {
    path: '/products',
    name: 'products-list',
    component: ProductListView
  },
  // Vista de detalle: mostrará los detalles de un solo producto
  {
    path: '/products/:id',
    name: 'product-detail',
    component: ProductDetailView,
    props: true // Esto permite que el ID de la ruta se pase como prop al componente
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;