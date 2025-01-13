<script setup lang="ts">
import NavPage from '@/components/NavPage.vue'

console.log('Order')
</script>
<template>
  <div class="order">
    <NavPage />
    <h1>Orderstatus</h1>
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
