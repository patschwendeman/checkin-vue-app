<script setup lang="ts">
defineProps<{
  headline: string
  backgroundColor: string
}>()
</script>

<template>
  <div class="header" :style="{ backgroundColor: backgroundColor }">
    <div></div>
    <p>{{ headline }}</p>
    <img src="/src/assets/logo.svg" alt="" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 136px;
  padding: 33px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}

p {
  text-align: center;
  font-size: 30px;
  color: black;
  font-weight: 600;
}

img {
  height: 100%;
}
</style>
