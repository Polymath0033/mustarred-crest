<script setup lang="ts">
/*
"I have been working with [Firm Name] for years and their technology law expertise has been invaluable
in protecting my business interests." - John D., CEO of XYZ Tech
"Highly knowledgeable and responsive, [Firm Name] has been a trusted legal partner for my technology
startup. I highly recommend their services." - Sarah L., Founder of ABC Software
*/
const testimonies = [
  {
    quote:
      '"I have been working with [Firm Name] for years and their technology law expertise has been invaluable in protecting my business interests."',
    author: "John D.,",
    placeOfWork: "CEO of XYZ Tech",
  },
  {
    quote:
      '"Highly knowledgeable and responsive, [Firm Name] has been a trusted legal partner for my technology startup. I highly recommend their services."',
    author: "Sarah L.,",
    placeOfWork: "Founder of ABC Software",
  },
];
</script>
<template>
  <div class="px-8 sm:px-16 md:px-28 custom-container py-24 mx-auto">
    <div class="overflow-x-scroll no-scrollbar mx-auto w-full">
      <h3 class="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
        Our client success stories
      </h3>
      <div class="overflow-x-scroll no-scrollbar mx-auto w-full">
        <div class="flex flex-col sm:flex-row gap-y-6 gap-4 mx-auto w-max">
          <article
            v-for="(testimony, i) in testimonies"
            :key="i"
            class="bg-[#FCFCFC] border border-[#F2F2F2] gap-2 p-2 rounded-xl"
          >
            <div class="w-[380px] relative flex flex-col gap-3">
              <p class="text-right text-[#828282] text-xs font-normal">
                <!-- {_.date} -->
              </p>
              <p class="text-sm text-[#4F4F4F] font-normal">
                {{ testimony.quote }}
              </p>
              <div>

                <p class="text-xs text-[#4F4F4F] font-normal">
                  {{ testimony.author }}
                </p>
                <p class="text-[#828282] -mt-1 text-sm font-normal">
                  {{ testimony.placeOfWork }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
