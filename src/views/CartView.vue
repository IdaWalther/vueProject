<script setup lang="ts">
import NavPage from '@/components/NavPage.vue'
import { useCartStore } from '../stores/store.ts'

const cartStore = useCartStore()

console.log('Cart')
</script>
<template>
  <div class="cart">
    <NavPage />
    <h1>CartView</h1>
    <ul>
      <li v-for="items in cartStore.coffee" :key="items.id">
        {{ items.title }}
        {{ items.price }}
      </li>
    </ul>
    <p>Totaltpris: {{ cartStore.price }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
