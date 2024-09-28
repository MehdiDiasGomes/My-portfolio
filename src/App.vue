<template>
  <div class="m-auto py-10 lg:py-14 px-4 max-w-3xl w-full relative">
    <div class="flex flex-col gap-20">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import Home from './pages/home.vue';
</script>
