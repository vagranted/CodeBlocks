<template>
  <div class="navbar bg-primary text-white">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <router-link to="/" class="text-decoration-none">
          <div class="bg-white rounded px-2 py-1 me-4">
            <span class="fw-bold text-primary">CodeBlock</span>
          </div>
        </router-link>

        <div class="d-flex gap-3">
          <router-link to="/files" class="cursor-pointer text-white text-decoration-none">
            Файлы
          </router-link>
          <router-link to="/edits" class="cursor-pointer text-white text-decoration-none">
            Правки
          </router-link>
          <router-link to="/tutorials" class="cursor-pointer text-white text-decoration-none">
            Туториалы
          </router-link>
          <router-link to="/about" class="cursor-pointer text-white text-decoration-none">
            О нас
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
