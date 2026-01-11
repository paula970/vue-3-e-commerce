<template>
  <div v-if="productsStore.loading">Cargando productos...</div>
  <div v-else-if="productsStore.error">{{ productsStore.error }}</div>
  <div v-else>
    <h1>Catálogo de Productos</h1>
    <div class="products-grid">
      <div 
        v-for="product in productsStore.products" 
        :key="product.id"
        class="product-card"
        @click="goToProduct(product.id)"
      >
        <img :src="product.image" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products.js'

const router = useRouter()
const productsStore = useProductsStore()

const goToProduct = (productId) => {
  router.push(`/product/${productId}`)
}

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #e74c3c;
}
</style>