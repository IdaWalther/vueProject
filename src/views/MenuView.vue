<script setup lang="ts">
import NavPage from '../components/NavPage.vue'
import { onMounted, ref } from 'vue'
import '../assets/main.css'
import { useCartStore } from '../stores/store.ts'

const coffeeList = ref([] as Coffee[])
const cartStore = useCartStore()

interface Coffee {
  id: number
  title: string
  desc: string
  longer_desc: string
  price: number
  rating: number
  image: string
}

const getCoffee = async () => {
  try {
    const response = await fetch('https://santosnr6.github.io/Data/airbeanproducts.json')
    const data = await response.json()
    coffeeList.value = data.menu
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getCoffee()
})

// function addToBasket(coffee: Coffee) {
//   console.log('clicked on coffe', coffee.title, coffee.price)
// }
</script>

<template>
  <div class="menuPage">
    <NavPage />
    <h1 class="menuPage-title">Menu</h1>
    <article v-for="coffee in coffeeList" :key="coffee.id" class="coffeeMenu">
      <button class="addBtn" @click="cartStore.addToCart(coffee)">
        <img src="../../public/plus.png" alt="add button" />
      </button>
      <p>
        <strong>{{ coffee.title }}<br /></strong>
        {{ coffee.desc }}
        <!--<img :src="coffee.image" :alt="coffee.title" />-->
      </p>
      <p class="strong">{{ coffee.price }}</p>
    </article>
  </div>
</template>

<style>
.menuPage {
  background-color: var(--airbean-pink);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menuPage-title {
  text-align: center;
}
.coffeeMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.4rem 1rem;
}

.addBtn {
  background-color: var(--airbean-brown);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 1rem;
  padding: 0.4rem;
}

.strong {
  font-weight: bold;
}
</style>
