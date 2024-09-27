<template>
  <div class="flex flex-col justify-center items-center">
    <div class="md:1/2 sm:w-[80%] h-screen">
      <Navbar />
      <home />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import home from './pages/home.vue';
import Navbar from './components/Navbar.vue';
</script>