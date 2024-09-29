<template>
    <div class="flex gap-3 items-center">
      <a 
        v-for="(c, index) in _cards" 
        :key="index" 
        target="_blank"
        :href="c.link" 
        class="flex items-center text-[0.8rem] px-4 py-2 border border-[#E5484D] hover:bg-[#E5484D] duration-300 rounded-xl gap-2 text-white"
      >
        <component :is="c.icon" class="w-4" />{{ c.name }}
      </a>
    </div>
  </template>
  
  <script setup>
  import cards from '../constants/socialCards'
  import { ref, onMounted } from 'vue'
  
  const _cards = ref([])
  
  onMounted(() => {
    _cards.value = cards
  })
  </script>
  