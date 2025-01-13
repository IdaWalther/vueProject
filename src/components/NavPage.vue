<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/store.ts'

const cartStore = useCartStore()
</script>

<template>
  <nav>
    <RouterLink to="/menu">Meny</RouterLink>
    <RouterLink to="/coffee">Vårt Kaffe</RouterLink>
    <RouterLink to="/profile">Min Profil</RouterLink>
    <RouterLink to="/order">Orderstatus</RouterLink>
    <RouterLink to="/cart">
      <span class="basket">
        <button class="bagBtn">
          <img src="../../public/bag.svg" />
        </button>
        <span class="basketNumber">{{ cartStore.number }}</span>
      </span>
    </RouterLink>
  </nav>
</template>

<style>
nav {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.bagBtn {
  background-color: var(--airbean-brown);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.basket {
  position: relative;
}

.basketNumber {
  position: absolute;
  top: -27px;
  right: -10px;
  background-color: var(--airbean-orange);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
}
</style>
