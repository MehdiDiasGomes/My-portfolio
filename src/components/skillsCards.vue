<template>
    <div>
        <ul class="flex flex-wrap max-sm:justify-centerk gap-5">
            <li v-for="(s, index) in _skills" :key="index" class="flex items-center max-sm:w-44 w-56">
                <a target="_blank"
                    class="flex w-full duration-200 hover:border-[#E5484D] p-3 border border-gray-500 rounded-xl text-white items-center gap-3"
                    :href="s.link">
                    <img class="w-8" :src="`/img/skills/${s.img}.png`"
                        :alt="`Image ${s.name}`">
                    <span class="flex flex-col">
                        {{ s.name }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import skills from '../constants/skills.js'
import { ref, onMounted } from 'vue';

const _skills = ref([]);

onMounted(() => {
    _skills.value = skills;
});
</script>
