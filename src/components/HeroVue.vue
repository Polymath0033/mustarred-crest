<script lang="ts" setup>
import Logo from "./Logo.vue";
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeMount } from 'vue'
const h1Text = ref('Building a startup is hard enough');
const pText = ref('Get ahead with simple compliance');
const animateText=()=>{
  setInterval(()=>{
    h1Text.value = 'Building a startup is hard enough';
    pText.value = 'Get ahead with simple compliance hello';
  }, 500)
}
onMounted(()=>{
  animateText();
})
onBeforeMount(()=>{
  console.log('Before Mount')
})
</script>
<template>
  <div class="bg-bg-two h-[800px] animate-animate-hero px-8 md:px-28 py-6 bg-cover">
    <header class="flex justify-between items-center">
      <RouterLink to="/"><Logo /></RouterLink>
      <nav class="flex gap-4 text-white text-base !leading-[150%] font-medium">
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact us</a>
        <a href="blog">Blog</a>
        <a href="faq">FAQ</a>
      </nav>
      <button
        type="button"
        class="text-primary text-base font-semibold !leading-[150%] bg-white flex items-center justify-center px-7 py-3 rounded-[40px]"
      >
        Contact us
      </button>
    </header>
    <section class="flex mt-[159px]">
      <div class="flex flex-col w-1/2">
        <h1 class="text-white text-[52px] font-semibold">
          Building a startup is hard enough
        </h1>
        <p class="text-white text-lg font-normal !leading-[32px]">
          {{pText}}
          <!-- Get ahead with simple compliance -->
        </p>
        <button
          type="button"
          class="text-primary text-base font-semibold !leading-[150%] bg-white flex items-center justify-center gap-2 mt-10 px-4 py-3 w-fit rounded-[40px]"
        >
          <span>Schedule a consutation</span>
          <span
            class="flex bg-primary w-7 h-7 items-center justify-center rounded-[50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  </div>
  <section
    class="mx-8 sm:mx-16 md:mx-28 bg-primary rounded-full custom-container -mt-10 flex justify-center"
  >
    <ul
      class="bg-primary w-fit py-8 flex flex-col gap-12 items-center justify-center sm:justify-between sm:flex-row"
    >
      <li class="flex items-center gap-[14px] pb-8 sm:border-b-0 sm:pb-0 sm:pr-12 border-b sm:border-r border-[#E0E0E0]">
        <p class="font-semibold text-[38px] text-white">12+</p>
        <span class="text-lg font-normal text-start text-[#FFFFFFA6]">
          Happy<br/>startups
        </span>
      </li>
      <li class="flex items-center gap-[14px] py-8 sm:py-0 sm:border-b-0 sm:pb-0 sm:px-12 border-b sm:border-r border-[#E0E0E0" >
        <p class="font-semibold text-[38px] text-white">36</p>
        <span class="text-lg font-normal  text-[#FFFFFFA6] text-start">
          Total<br/> certificates
        </span>
      </li>
      <li class="flex items-center gap-[14px] pt-8 sm:border-b-0 sm:pt-0 sm:pb-0 sm:pl-12">
        <p class="font-semibold text-[38px] text-white">10+</p>
        <span class="text-lg font-normal  text-[#FFFFFFA6] text-start">
          Events<br/> & news
        </span>
      </li>
    </ul>
    <!-- <ul class="py-8 px-12 rounded-[48px] flex flex-col justify-center items-center sm:flex-row gap-[10px] border- border border-solid bg-primary  ">
          <li class="flex flex-col gap-3 items-center justify-center sm:justify-between pb-8 sm:border-b-0 sm:pb-0 sm:pr-12 border-b sm:border-r border-[#E0E0E0]">
            <p class="font-semibold text-[38px] text-[#163930] ">12+</p>
            <span class="text-lg font-normal text-center text-[#828282]">
              Happy startups
            </span>
          </li>
          <li class="flex flex-col gap-3 items-center justify-center sm:justify-between  py-8 sm:border-b-0 sm:pb-0 sm:px-12 border-b sm:border-r border-[#E0E0E0]">
            <p class="font-semibold text-[38px] text-[#163930] ">10</p>
            <span class="text-lg font-normal text-center text-[#828282]">
              African countries
            </span>
          </li>
          <li class="flex flex-col gap-3 items-center justify-center sm:justify-between pt-8 sm:border-b-0 sm:pb-0 sm:pl-12">
            <p class="font-semibold text-[38px] text-[#163930] ">100+</p>
            <span class="text-lg font-normal text-center text-[#828282]">
              Happy clients
            </span>
          </li>
        </ul> -->
  </section>
</template>
