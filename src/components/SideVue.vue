<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from "./Logo.vue";
defineEmits(["sideHandler", "getStartedHandler"]);
</script>
<template>
  <!--           <a href="#services">Services</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <a href="#blog">Blog</a>
          <a href="#faq">FAQ</a> -->
  <Teleport to="body">
    <aside
      className="fixed top-0 left-0 bg-primary w-full h-screen z-[3000] flex flex-col py-12 px-6 justify-between"
    >
      <div className="flex justify-between">
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <button type="button" v-on:click="$emit('sideHandler')">
          <svg
            data-v-dc12aa52=""
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-dc12aa52=""
              d="M11 1L1 11M1 1L11 11"
              stroke="#f5f5f5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <nav>
        <ul className="flex flex-col items-center gap-4">
          <li className="font-medium text-base text-[#828282]">
            <a v-on:click="$emit('sideHandler')" href="#"> Home </a>
          </li>
          <li className="font-medium text-base text-[#828282]">
            <a v-on:click="$emit('sideHandler')" href="#services"> Services </a>
          </li>
          <li className="font-medium text-base text-[#828282]">
            <a v-on:click="$emit('sideHandler')" href="#about"> About us </a>
          </li>
          <li className="font-medium text-base text-[#828282]">
            <a v-on:click="$emit('sideHandler')" href="#contact"> Contact us </a>
          </li>
          <li className="font-medium text-base text-[#828282]">
            <a v-on:click="$emit('sideHandler')" href="#blogs"> Blogs </a>
          </li>
          <li className="font-medium text-base text-[#828282]">
            <a v-on:click="$emit('sideHandler')" href="#faq"> FAQ </a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        class="text-primary text-base font-semibold !leading-[150%] bg-white flex items-center justify-center px-7 py-3 rounded-[40px]"
      >
        Contact us
      </button>
    </aside>
  </Teleport>
</template>
