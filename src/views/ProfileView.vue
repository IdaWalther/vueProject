<script setup lang="ts">
import NavPage from '@/components/NavPage.vue'

console.log('Profile')
</script>
<template>
  <div class="profil">
    <NavPage />
    <h1>Profil</h1>
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
