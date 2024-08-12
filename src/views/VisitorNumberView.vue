<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import VisitorNumberInputField from '../components/VisitorNumberInputField.vue'
</script>

<template>
  <MainHeader headline="Checki-In" backgroundColor="grey" />
  <div class="content">
    <p>Geben Sie ihre Buchnummer, Ihre E-Mail Adresse oder Ihren Nachnamen ein</p>
    <VisitorNumberInputField />
  </div>
</template>

<style></style>
