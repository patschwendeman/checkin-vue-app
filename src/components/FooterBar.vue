<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <nav class="footerBar">
    <CustomButton text="ZURÜCK" backgroundColor="white" color="black" route="/auth" />
    <CustomButton text="WEITER" backgroundColor="black" color="white" route="/auth" />
  </nav>
</template>

<style scoped>
.footerBar {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 33px;
}
</style>
