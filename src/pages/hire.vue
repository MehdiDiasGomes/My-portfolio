<template>
    <form ref="form" @submit.prevent="sendEmail" class="flex flex-col gap-5 w-full">
        <h2 class="text-white text-h2">Looking for a <span class="text-[#E5484D] font-extrabold">passionate
                developer?</span> Feel free to get in touch!</h2>
        <div class="flex sm:flex-row max-sm:flex-col items-center gap-5">
            <input v-model="name" type="text" placeholder="Your name" name="name"
                class="w-full uppercase h-12 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]">
            <input v-model="firstname" type="text" placeholder="Your first name" name="firstname"
                class="w-full h-12 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]">
        </div>
        <div>
            <input v-model="email" type="email" placeholder="your@mail.com" name="email"
                class="w-full h-12 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]">
        </div>
        <div>
            <textarea v-model="textarea" name="textarea" id="textarea" placeholder="Your message"
                class="resize-y w-full h-48 p-3 border text-white border-[#E5484D] bg-[#1E1E1E] rounded-xl focus:outline-none focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]"></textarea>
        </div>
        <button type="submit"
            class="relative group overflow-hidden bg-[#1E1E1E] text-white font-bold py-2 px-6 rounded-xl border border-[#E5484D] transition duration-500 ease-in-out focus:outline-none">
            <span class="relative z-10">Send message</span>
            <div
                class="absolute inset-0 bg-[#E5484D] w-full h-full transform translate-x-[-100%] group-hover:translate-x-0 transition duration-500 ease-in-out">
            </div>
        </button>
    </form>
</template>

<script setup lang="js">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const form = ref(null);
const name = ref('');
const firstname = ref('');
const email = ref('');
const textarea = ref('');

const checkData = () => {
    if (!name.value || !firstname.value || !email.value || !textarea.value) {
        alert('Please fill all the fields');
        return false;
    }

    return true;
}

const sendEmail = () => {
    if (!checkData()) return;
    emailjs
        .sendForm('service_7cwu2gi', 'template_kd5ndzf', form.value, {
            publicKey: '4U1La-wWYO81095y-',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
}
</script>
