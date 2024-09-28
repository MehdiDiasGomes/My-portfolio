<template>
  <div class="min-h-screen flex flex-col">
    <!-- Contenu principal -->
    <div class="m-auto py-10 lg:py-14 px-4 max-w-3xl w-full flex-grow">
      <div class="flex flex-col gap-20">
        <Navbar />
        <RouterView />
      </div>
    </div>
    <Footer class="m-auto px-4 max-w-3xl w-full" />
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>
