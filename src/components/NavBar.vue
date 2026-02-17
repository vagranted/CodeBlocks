<script setup></script>
<template>
  <header class="navbar navbar-expand-lg navbar-black bg-black">
    <div class="container mr-auto">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="`/`">CodeBlock</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="`/files`">Файлы</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/edits`">Правки</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/tutorials`">Туториалы</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="`/about`">О нас </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
