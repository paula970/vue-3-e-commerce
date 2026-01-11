// src/services/productService.js
import apiClient from '@/api/axios.js';

/**
 * Obtiene todos los productos de la API.
 * @returns {Promise<Array>} Un array de objetos de producto.
 */
export const getProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

/**
 * Obtiene un solo producto por su ID.
 * @param {number} id El ID del producto.
 * @returns {Promise<Object>} Un objeto de producto.
 */
export const getProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};