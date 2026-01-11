// src/stores/products.js
import { defineStore } from 'pinia';
import { getProducts, getProductById } from '@/services/productService.js';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  actions: {
    /**
     * Carga los productos desde el servicio y actualiza el estado.
     */
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        this.products = await getProducts();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    
    /**
     * Busca un producto en el estado local por su ID o lo obtiene si no existe.
     * @param {number} id El ID del producto.
     * @returns {Promise<Object>} El objeto de producto.
     */
    
    async fetchProductById(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await getProductById(id);
        return response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});