import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Coffee {
  id: number
  title: string
  desc: string
  longer_desc: string
  price: number
  rating: number
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const number = ref(0)
  const coffee = ref([] as Coffee[])
  const price = ref(0)
  //const calculatePrice = computed(() => number.value * 2)
  function addToCart(newCoffee: Coffee) {
    number.value++
    const existingCoffee = coffee.value.find((coffeeItem) => coffeeItem.id === newCoffee.id)
    if (existingCoffee) {
      existingCoffee.quantity++
      price.value += newCoffee.price
    } else {
      newCoffee.quantity = 1
      coffee.value.push(newCoffee)
      price.value += newCoffee.price
    }
  }

  return { number, coffee, price, addToCart }
})
