<template>
    <nav class="text-white flex justify-between mt-10">
        <div>
            <img src="../../public/img/Logo.png" alt="Logo" class="h-8 w-8" />
        </div>
        <div class="flex gap-4 items-center">
            <RouterLink class="hover:text-[#E5484D] duration-200" to="/">Home</RouterLink>
            <RouterLink class="hover:text-[#E5484D] duration-200" to="/projects">Tools</RouterLink>
            <RouterLink class="hover:text-[#E5484D] duration-200" to="/hire">Hire me</RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { SquareMenu } from 'lucide-vue-next';
import { Github } from 'lucide-vue-next';
import { Linkedin } from 'lucide-vue-next';

</script>