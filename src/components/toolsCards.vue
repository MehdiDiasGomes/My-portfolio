<template>
    <div>
        <ul class="flex flex-wrap gap-5">
            <li v-for="(t, index) in _tools" :key="index" class="flex items-center max-sm:w-full w-56">
                <a target="_blank"
                    class="flex w-full duration-200 hover:border-[#E5484D] p-3 border border-gray-500 rounded-xl text-white items-center gap-3"
                    :href="t.link">
                    <img class="w-8" :src="`../../public/img/tools/${t.img}.png`"
                        :alt="`Image ${t.name}`">
                    <span class="flex flex-col">
                        {{ t.name }}
                        <div class="text-gray-400">
                            {{ t.type }}
                        </div>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import tools from '../constants/tools.js'
import { ref, onMounted } from 'vue';

const _tools = ref([]);

onMounted(() => {
    _tools.value = tools;
});
</script>
