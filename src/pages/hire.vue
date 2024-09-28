<template>
    <div class="flex flex-col gap-5 w-full">
        <div class="flex sm:flex-row max-sm:flex-col items-center gap-5">
            <input type="text" placeholder="Your name"
                class="w-full h-12 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]">
            <input type="text" placeholder="Your first name"
                class="w-full h-12 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]">
        </div>
        <div>
            <input type="text" placeholder="your@mail.com"
                class="w-full h-12 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]">
        </div>
        <div>
            <textarea name="textarea" id="textarea" placeholder="Your message"
                class="resize-y w-full h-48 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]"></textarea>
        </div>
        <button
            class="relative group overflow-hidden bg-[#1E1E1E] text-white font-bold py-2 px-6 rounded-xl border border-[#E5484D] transition duration-500 ease-in-out focus:outline-none">
            <span class="relative z-10">Send message</span>
            <div
                class="absolute inset-0 bg-[#E5484D] w-full h-full transform translate-x-[-100%] group-hover:translate-x-0 transition duration-500 ease-in-out">
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">

</script>
