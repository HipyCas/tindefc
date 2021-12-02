<script setup>
import Login from "./components/Login.vue";

import { ChatAlt2Icon, HeartIcon, UserIcon } from "@heroicons/vue/outline";

import tindefc from "/img/Tindefc1.png";

import { ref } from "vue";

import { store } from "./store";
import { supabase } from "./supabase";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);

store.user = supabase.auth.user();
supabase.auth.onAuthStateChange((_, session) => {
  store.user = session.user;
});
</script>

<template>
  <div>
    <header
      v-if="store.user"
      class="
        shadow-xl
        w-screen
        flex
        justify-center
        py-5
        $from-white
        $to-gray-200
        $via-transparent
        bg-gradient-to-b
      "
    >
      <img :src="tindefc" alt="Logo" class="h-[60px]" />
    </header>
    <main>
      <router-view v-if="store.user" />
      <Login v-else></Login>
    </main>
    <footer
      v-if="store.user"
      class="
        fixed
        bottom-0
        w-screen
        bg-white
        h-20
        flex
        justify-around
        items-center
        shadow-2xl
        text-center
      "
    >
      <router-link
        to="/people"
        class="w-15 h-15 px-5 py-2 block rounded-full bg-opacity-50"
        ><ChatAlt2Icon class="h-8 w-8 mx-auto" />People</router-link
      >
      <router-link
        to="/home"
        class="w-15 h-15 px-5 py-2 block rounded-full bg-opacity-50"
        ><HeartIcon class="h-8 w-8 mx-auto" />Home</router-link
      >
      <router-link
        to="/me"
        class="w-15 h-15 px-5 py-2 block rounded-full bg-opacity-50"
        ><UserIcon class="h-8 w-8 mx-auto" />Me</router-link
      >
    </footer>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: var(--light);
  color: white;
}
</style>
