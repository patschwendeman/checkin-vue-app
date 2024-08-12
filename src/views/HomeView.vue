<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import CustomButton from '../components/CustomButton.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <MainHeader headline="" backgroundColor="white" />
  <div class="content">
    <h1>Herzlich Willkommen bei Waldmann!</h1>
    <p>Checken Sie bitte hier ein oder aus.</p>
    <p>Sollten Sie Fragen haben, können Sie sich jederzeit am Empfang melden.</p>

    <nav>
      <CustomButton text="CHECK OUT" backgroundColor="white" color="black" route="/" />
      <CustomButton text="CHECK IN" backgroundColor="black" color="white" route="/auth" />
    </nav>
  </div>
</template>

<style scoped>
h1,
p {
  color: black;
}
</style>
