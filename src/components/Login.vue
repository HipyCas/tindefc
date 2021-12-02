<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div
      class="
        flex flex-col
        items-center
        justify-evenly
        h-[300px]
        sm:w-[600px]
        w-screen
        sm:shadow-2xl
        rounded-xl
      "
    >
      <img :src="tindefc" alt="Tindefc" class="h-20" />
      <form
        class="flex flex-col gap-2 items-stretch w-full p-5"
        @submit.prevent="handleLogin"
      >
        <input
          class="
            w-full
            rounded
            border-t-0 border-l-0 border-r-0 border-b-2 border-[#3eb1c8]
            focus:outline-none
            focus:ring-4
            focus:ring-[#3eb1c8]
            focus:ring-opacity-50
            focus:border-b-0
            focus:mb-0.5
          "
          type="email"
          placeholder="Your email"
          v-model="email"
        />
        <input
          class="bg-[#3eb1c8] py-2 rounded"
          type="submit"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
        <a
          href="mailto:hipycas@gmail.com"
          class="
            flex flex-row
            gap-2
            justify-center
            items-center
            text-[#244c5a]
            bg-transparent
            w-full
            h-6
            py-4
            rounded
            no-underline
            text-center
            hover:bg-[#244c5a] hover:text-white
          "
        >
          Request login
          <MailIcon class="h-5"></MailIcon>
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";

import tindefc from "/img/Tindefc1.png";

import { MailIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MailIcon,
  },
  setup() {
    const loading = ref(false);
    const email = ref("");

    const handleLogin = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value });
        if (error) throw error;
        alert("Check your email for the login link!");
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      email,
      handleLogin,

      tindefc,
    };
  },
};
</script>
