<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import CustomButton from '../components/CustomButton.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <MainHeader headline="" backgroundColor="white" />
  <div class="content">
    <div class="home-container">
      <h1>Herzlich Willkommen bei Waldmann!</h1>
      <p>
        Checken Sie bitte hier ein oder aus.<br />
        Sollten Sie Fragen haben, können Sie sich jederzeit am Empfang melden.
      </p>
      <nav class="button-row">
        <CustomButton text="CHECK OUT" backgroundColor="white" color="black" route="/" />
        <CustomButton text="CHECK IN" backgroundColor="black" color="white" route="/auth" />
      </nav>
    </div>
  </div>
</template>

<style scoped>
h1,
p {
  color: black;
}
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 50px;
  text-align: center;
}
.button-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 33%;
}
</style>
