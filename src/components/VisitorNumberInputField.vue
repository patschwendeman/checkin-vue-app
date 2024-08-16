<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './CustomButton.vue'

let inputValue = ref('')
let isDisabled = ref(true)

function shouldDisableButton(value: string): boolean {
  return value.trim() === ''
}

function updateButtonState(event: Event) {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
  isDisabled.value = shouldDisableButton(inputValue.value)
}
</script>

<template>
  <div class="VisitorNumberInputField">
    <input type="text" :value="inputValue" @input="updateButtonState" />
    <nav>
      <CustomButton
        :isDisabled="isDisabled"
        text="CHECK IN"
        backgroundColor="black"
        color="white"
        route="/data"
      />
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
