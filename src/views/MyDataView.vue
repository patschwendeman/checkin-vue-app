<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import FooterBar from '../components/FooterBar.vue'
import CustomButton from '../components/CustomButton.vue'
</script>

<template>
  <MainHeader headline="Checki-In" backgroundColor="#e9eaeb" />
  <div class="content">
    <h1>This is my data page</h1>
  </div>
  <FooterBar />
</template>

<style scoped>
.footerBar {
  display: flex;
  width: 100%;
  height: 136px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
}
</style>
