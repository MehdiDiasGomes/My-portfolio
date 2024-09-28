<template>
    <div class="flex justify-start items-start">
        <div class="flex flex-col gap-5">
            <div class="flex gap-3 items-center">
                <img src="../../public/img/Mehdi-profil.jpeg" class="w-12 h-12 object-cover rounded-full"
                    alt="Photo de profil Mehdi">
                <h1 class="text-h1 text-white">Mehdi DIAS GOMES</h1>
            </div>
            <div>
                <h3 ref="typewriterEl" class="text-h3 text-gray-300">
                    Développeur <span class="font-extrabold text-[#E5484D]">web</span> full-stack
                </h3>
            </div>
            <div>
                <socialCards />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
//@ts-ignore
import Typewriter from 'typewriter-effect/dist/core';
//@ts-ignore
import socialCards from '../components/socialCards.vue';

const typewriterEl = ref(null); // Référence pour l'élément h3

onMounted(() => {
    const typewriter = new Typewriter(typewriterEl.value, {
        loop: false,
        delay: 50,
        html: true
    });

    typewriter
        .typeString('Développeur <span class="font-extrabold text-[#E5484D]">web</span> full-stack') 
        .start();
});
</script>