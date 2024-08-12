<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import VisitorNumberInputField from '../components/VisitorNumberInputField.vue'
</script>

<template>
  <MainHeader headline="Checki-In" backgroundColor="#e9eaeb" />
  <div class="content">
    <div class="visitorNumber-container">
      <p>Geben Sie ihre Buchnummer, Ihre E-Mail Adresse oder Ihren Nachnamen ein</p>
      <VisitorNumberInputField />
    </div>
  </div>
</template>

<style>
.visitorNumber-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  gap: 50px;
}
</style>
