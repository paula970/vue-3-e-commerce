<template>
  <div v-if="productsStore.loading">Cargando producto...</div>
  <div v-else-if="productsStore.error">{{ productsStore.error }}</div>
  <div v-else-if="currentProduct">
    <button @click="$router.push('/')">← Volver al catálogo</button>
    <h1>{{ currentProduct.title }}</h1>
    <img :src="currentProduct.image" :alt="currentProduct.title" style="max-width: 300px;" />
    <p>{{ currentProduct.description }}</p>
    <p><strong>Precio: ${{ currentProduct.price }}</strong></p>
  </div>
  <div v-else>
    Producto no encontrado
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products.js'

const route = useRoute()
const productsStore = useProductsStore()

const currentProduct = computed(() => {
  return productsStore.products.find(p => p.id === parseInt(route.params.id))
})

onMounted(() => {
  if (productsStore.products.length === 0) {
    productsStore.fetchProducts()
  }
})
</script>