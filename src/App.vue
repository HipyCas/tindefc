<script setup>
import { ChatAlt2Icon, HeartIcon, UserIcon } from "@heroicons/vue/outline";

import tindefc from "../public/img/Tindefc1.png";

import { ref } from "vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <img :src="tindefc" alt="Logo" class="h-[60px]" />
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} / {{ counter }}
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer
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
      "
    >
      <router-link to="/people"
        ><ChatAlt2Icon class="h-8 w-8 mx-auto" />People</router-link
      >
      <router-link
        to="/home"
        class="w-15 h-15 px-4 py-2 block rounded-full bg-opacity-50"
        ><HeartIcon class="h-8 w-8 mx-auto" />Home</router-link
      >
      <router-link to="/me"><UserIcon class="h-8 w-8 mx-auto" />Me</router-link>
    </footer>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: var(--light);
  color: white;
}
</style>
