<script setup lang="ts">
import headerComponent from "@/components/header-component.vue";
import FooterVue from "@/components/FooterVue.vue";
import blogComponent from "@/components/blog-component.vue";
</script>
<template>
  <header-component header-class="px-8 md:px-28 py-6 bg-primary"   />
   <main>
      <section class="bg-[#222E500A] bg-cover !max-h-[400px] h-[400px] md:h-[700px]">
      

        <div class="w-full h-full flex justify-center items-center flex-col custom-container px-8 sm:px-16 md:px-28 py-24">
          <h2 class="font-bold text-3xl sm:text-5xl text-primary text-center ">
            Insights and Updates from Mustarred Crest
          </h2>
          <p class="text-sm sm:text-base text-center text-black !leading-[157.5%] font-medium mt-3">
            Stay informed with the latest news, insights, and updates from Mustarred Crest. Our blog covers a wide range of topics related to business
          data protection, DPIA, PIA and Privacy Review, regulatory compliance and licensing and co-operate governance.
          </p>
        </div>
      </section>
      <blog-component />

     
      <div class="flex items-center justify-center p-4 bg-white text-center">
       
       
      </div>
    </main>
    <FooterVue />
</template>

<style scoped></style>
