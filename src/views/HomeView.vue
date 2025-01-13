<script setup lang="ts">
console.log('Airbean')
</script>

<template>
  <main class="start-wrapper">
    <RouterLink to="/menu">
      <img src="../../public/Logo.svg" />
      <h1>AirBean</h1>
      <p>DRONEDELIVERED COFFEE</p>
    </RouterLink>
  </main>
</template>

<style>
.start-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  text-align: center;
}

.start-wrapper a {
  color: white;
  text-decoration: none;
}
</style>
