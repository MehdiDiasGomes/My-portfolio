<template>
    <div class="flex justify-start mt-28 items-start">
        <div class="flex flex-col gap-5">
            <div class="flex gap-3 justify-center items-center">
                <img src="../../public/img/Mehdi-profil.jpeg" class="w-20 h-20 object-cover rounded-full"
                    alt="Photo de profil Mehdi">
                <h1 class="text-h1 text-white">Mehdi DIAS GOMES</h1>
            </div>
            <div>
                <h3 ref="typewriterEl" class="text-h3 text-gray-300">
                    Développeur <span class="font-extrabold text-[#E5484D]">web</span> full-stack
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
//@ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

const typewriterEl = ref(null); // Référence pour l'élément h3

onMounted(() => {
  const typewriter = new Typewriter(typewriterEl.value, {
    loop: false, 
    delay: 50, 
  });

  typewriter
    .typeString("Développeur web full-stack") 
    .start(); 
});
</script>