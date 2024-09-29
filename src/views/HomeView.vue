<script setup lang="ts">
import HeroVue from "@/components/HeroVue.vue";
import GridIcon from "@/components/icons/grid-icon.vue";
</script>

<template>
  <main>
    <HeroVue />
    <section class="px-8 sm:px-16 md:px-28 py-20 ">
      <button class="flex items-center px-3 py-2 rounded-[71px] w-fit gap-[10px] bg-[rgba(0,_31,_63,_0.04)] mx-auto text-primary">
        <GridIcon />
        <span class="text-lg font-medium">Get Ahead with SIMPLE COMPLIANCE</span>
      </button>
      <h2 class="text-center text-primary mt-14 text-3xl font-semibold" >Crest your industry with a trusted Mustarred</h2>
      <div class="py-24  w-full flex gap-8" >
         <div class="flex flex-col p-4 bg-[rgba(127,_85,_218,_0.02)] rounded-2xl w-full ">
          <img src="../assets/image-one.png" alt="Image one" />
         </div>
         <div class="w-full py-8 flex flex-col gap-12">
          <h3 class="text-xl text-[#434343] font-medium !leading-[25.2px]">Not the world, but you have our assurances that:</h3>
         </div>
      </div>
    </section>
  </main>
</template>
