<template>
    <footer class="">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/img/Logo.png" class="h-8" alt="Mehdi Logo" />
                </a>
                <ul
                    class="flex flex-wrap items-center gap-4 text-white mb-6 text-sm font-medium">
                    <li>
                        <RouterLink class="hover:text-[#E5484D] duration-200" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="hover:text-[#E5484D] duration-200" to="/tools">Tools</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="hover:text-[#E5484D] duration-200" to="/hire">Hire me</RouterLink>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                    href="https://flowbite.com/" class="hover:underline">Mehdi DIAS GOMES™</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>

<script setup>

</script>