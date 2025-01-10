<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { NInput, NSpace, NProgress, NButton } from 'naive-ui'

defineComponent({
  components: {
    NInput,
    NSpace,
    NProgress,
    NButton,
  },
})

const title = ref('')
const text = ref('')
const percentageRef = ref(0)

const add = () => {
  percentageRef.value += 5
  if (percentageRef.value > 100) {
    percentageRef.value = 0
  }
}
</script>

<template>
  <h1>Naive UI</h1>
  <n-space vertical>
    <n-input v-model:value="title" type="text" placeholder="Basic Input" />
    <n-input v-model:value="text" type="textarea" placeholder="Basic Textarea" />
  </n-space>

  <h2>{{ title }}</h2>
  <p>{{ text }}</p>

  <n-progress type="circle" :percentage="percentageRef" />
  <n-button @click="add"> Add 5% </n-button>
</template>
