<template>
  <div class="main">
    <div class="main_alert">
      <h3>Добро пожаловать в CodeBlock!</h3>
      <DragDrop lists="123"/>
    </div>
  </div>
</template>

<script setup>
import DragDrop from '@/components/DraganDrope.vue'
</script>

<style scoped>
h3{
  padding-top: 20px;
}
.main {
  width: 90%;
  height: 500px;
  background-color: #000000;
  margin: 50px auto;
  text-decoration: none;
  color: white;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main_button {
  background-color: #000000;
  color: white;
  border-color: black;
}
</style>
