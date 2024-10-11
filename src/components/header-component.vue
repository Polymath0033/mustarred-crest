<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import Logo from "./Logo.vue";
import SideVue from "./SideVue.vue";
import { ref } from "vue";
const side = ref(false);
const sideHandler = () => {
  side.value = !side.value;
};
defineEmits(["getStartedHandler"]);
defineProps<{
  headerClass?: string;
  textColor?: string;
  buttonClass?: string;
}>();
const router = useRouter();
const navigateToIDAtHome = (id: string) => {
  router.replace(`/${id}`);
};
</script>
<template>
  <SideVue @side-handler="sideHandler" v-if="side" />
  <header :class="['flex justify-between items-center', headerClass]">
    <RouterLink to="/"><Logo /></RouterLink>

    <nav
      :class="[
        'hidden md:flex gap-4 text-white text-base !leading-[150%] font-medium',
        textColor,
      ]"
    >
      <a @click="navigateToIDAtHome('#services')" href="#services">Services</a>
      <a @click="navigateToIDAtHome('#about')" href="#about">About us</a>
      <a @click="navigateToIDAtHome('#contact')" href="#contact">Contact us</a>
      <RouterLink to="/blogs">Blog</RouterLink>
      <a @click="navigateToIDAtHome('#faq')" href="#faq">FAQ</a>
    </nav>
    <a
      target="_blank"
      href="mailto:info@mustarred.com"
      :class="[
        'hidden text-primary text-base font-semibold !leading-[150%] bg-white md:flex items-center justify-center px-7 py-3 rounded-[40px]',
        buttonClass,
      ]"
    >
      Contact us
    </a>
    <button class="flex flex-col w-4 md:hidden" v-on:click="sideHandler">
      <span class="bg-white w-4 h-0.5 mb-1"></span>
      <span class="bg-white w-4 h-0.5 mb-1"></span>
      <span class="bg-white w-4 h-0.5 mb-1"></span>
    </button>
  </header>
</template>

<style scoped></style>
