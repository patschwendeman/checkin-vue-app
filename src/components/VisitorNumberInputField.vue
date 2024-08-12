<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <div class="VisitorNumberInputField">
    <input type="text" />
    <nav>
      <CustomButton text="CHECK IN" backgroundColor="black" color="white" route="/data" />
    </nav>
  </div>
</template>

<style scoped>
.VisitorNumberInputField {
  width: 100%;
  height: 200px;
  border: solid black 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px;
  gap: 33px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

input {
  width: 100%;
  height: 100px;
  border: none;
  font-size: 50px;
  font-weight: 500;
  line-height: 58px;
}
</style>
