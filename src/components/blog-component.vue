<script setup lang="ts">
const blogs = [
  {
    image: "blog-1",
    headline: "Understanding the Business Landscape in Africa",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
  {
    image: "blog-2",
    headline: "Navigating Fintech Regulations in Nigeria",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
  {
    image: "blog-3",
    headline: "Top Strategies for Successful Mergers and Acquisitions",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
  {
    image: "blog-4",
    headline: "Business expansion in Africa",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
];
 const imageHelper = (src: string) =>
    new URL(`../assets/${src}.png`, import.meta.url).href;
</script>

<template>
   <section class="px-8 custom-container sm:px-28 py-24 flex flex-col gap-6">
      <h2 class="text-[#333] text-center text-2xl sm:text-[32px] font-semibold !leading-[162.5%] ">
        Featured articles from
        <span class="bg-[linear-gradient(91deg,_#222E50_-0.95%,_#1B263B_100.32%)] text-transparent bg-clip-text ">
          
        MustarredCrest
        </span>
      </h2>
      <div class="overflow-x-scroll w-full no-scrollbar">
        <ul class="mt-10 w-max  flex gap-6">
        
            <li v-for="(blog,index) in blogs"
              :key="index"
              class="w-[390px] rounded-2xl border flex flex-col items-start p-4 gap-[10px] shadow-[0px_0px_64.8px_0px_rgba(127,_85,_218,_0.06)] border-[#f2f2f2]"
            >
              <img
                :src="imageHelper(blog.image)"
                class=" h-[200px] w-full object-cover rounded-lg "
                :alt="blog.image"
              />
              <h6 class="text-xl font-semibold text-[#333]">
                {{blog.headline}}
              </h6>
              <p class="text-sm !leading-[171.429%] font-normal text-[#333]">
                Lorem ipsum dolor sit amet consectetur. Sed et in massa sit
                vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at.
                Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc
                tempor.
              </p>
              <a
                href="#"
                class="text-sm flex gap-2 font-normal text-primary"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                    stroke="#222E50"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91699 10.5H16.942"
                    stroke="#222E50"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
        
        </ul>
      </div>
      </section>
</template>



<style scoped>

</style>