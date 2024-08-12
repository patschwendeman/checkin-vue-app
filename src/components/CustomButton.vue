<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{
  text: string
  backgroundColor: string
  color: string
  route?: string
  onClick?: () => void
}>()

const router = useRouter()

function handleClick(route: string | undefined, onClick: any) {
  if (route) {
    router.push(route)
  } else if (onClick) {
    onClick()
  }
}
</script>

<template>
  <button
    :style="{ backgroundColor: backgroundColor, color: color }"
    @click="handleClick(route, onClick)"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 193px;
  height: 61px;
  border-style: solid;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  border-color: black;
}
</style>
