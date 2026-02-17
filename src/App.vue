<template>
  <div class="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 0;
}

. {
  background-color: #131313;
  width: 100%;
  min-height: 100%;
}
</style>
