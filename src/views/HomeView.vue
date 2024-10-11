<script setup lang="ts">
import HeroVue from "@/components/HeroVue.vue";
import GridIcon from "@/components/icons/grid-icon.vue";
import FooterVue from "@/components/FooterVue.vue";
import CrestHonor from "@/components/CrestHonor.vue";
import Testimonies from "@/components/Testimonies.vue";
const liText = [
  {
    title: "We are startup-minded",
    paragraph:
      "We understand the unique challenges of running a business and a startup.",
  },
  {
    title: "Quality Service",
    paragraph:
      "We deliver premium services efficiently and timely",
  },
  {
    title: "More than advisor ",
    paragraph:
      "Our people are more than advisors; they are stakeholders in your company’s success.",
  },
];
const servicesText = [{}];
</script>

<template>
  <main class="w-full">
    <HeroVue />
    <section class="px-8 sm:px-16 md:px-28 pt-24 sm:py-24 custom-container" id="about">
      <button
        class="flex items-center px-3 py-2 rounded-[71px] w-fit gap-[10px] bg-[rgba(0,_31,_63,_0.04)] mx-auto text-primary"
      >
        <GridIcon />
        <span class="text-sm sm:text-lg font-medium"
          >Get Ahead with SIMPLE COMPLIANCE</span
        >
      </button>
      <h2
        class="text-center text-primary mt-14 text-2xl sm:text-3xl font-semibold"
      >
        Crest your industry with a trusted Mustarred
      </h2>
      <div
        class="py-24 w-full flex flex-col sm:flex-row gap-8 items-center h-full"
      >
        <div
          class="flex flex-col p-4 bg-[rgba(127,_85,_218,_0.02)] rounded-2xl w-full"
        >
          <img src="../assets/image-one.png" alt="Image one" class="w-full" />
        </div>
        <div class="w-full py-8 flex flex-col gap-12">
          <h3
            class="text-center sm:text-start text-xl text-[#434343] font-medium !leading-[25.2px]"
          >
            Not the world, but you have our assurances that:
          </h3>
          <ul class="flex flex-col gap-10">
            <li v-for="(li, index) in liText" :key="index" class="flex gap-6">
              <span
                class="bg-bg-gradient border-[3px] w-[50px] h-fit py-2 px-2 rounded-[80.556px] border-white flex items-center justify-center text-white text-lg font-bold !leading-[25.2px]"
                >{{ index + 1 }}</span
              >
              <div class="text-[#434343]">
                <h4 class="text-xl !leading-[25.2px] font-semibold">
                  {{ li.title }}
                </h4>
                <p class="!leading-[31px] font-normal text-base">
                  {{ li.paragraph }}
                </p>
              </div>
            </li>
          </ul>
          <a
            target="_blank"
            href="mailto:info@mustarred.com"
            class="shadow-[0px_33px_44px_0px_rgba(0,_31,_63,_0.10)] mx-auto sm:mx-0 px-8 py-4 bg-primary w-fit text-base !leading-[150%] text-white rounded-[44px]"
          >
            Schedule a consultation
          </a>
        </div>
      </div>
    </section>
    <!-- <section class="bg-bg-blue px-8 sm:px-16 md:px-28 py-24">
      <h2
        class="text-[32px] text-center text-white !leading-[52px] font-semibold"
      >
        Our Crest of Services
      </h2>
      <h5 class="text-lg !leading-[31px] text-center text-white">
        Comprehensive Legal, Compliance, and Security Solutions for Growing
        Businesses
      </h5>
      <div class="mt-[82px]">
        <ul class="grid grid-cols-grid-3 gap-8">
          <li
            v-for="i in 9"
            :key="i"
            class="p-8 flex items-start gap-6 flex-col [flex:1_0_0] rounded-3xl border border-[#FFFFFF6E] bg-[#FFFFFF1F]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <rect
                width="64"
                height="64"
                rx="32"
                fill="white"
                fill-opacity="0.06"
              />
              <rect
                x="0.5"
                y="0.5"
                width="63"
                height="63"
                rx="31.5"
                stroke="white"
                stroke-opacity="0.36"
              />
              <path
                d="M26.6119 24.3235L32 16.2415L37.3889 24.3251L42.839 32.5L37.3881 40.6761L32 48.7585L26.6111 40.6749L26.4996 40.7492L26.6111 40.6749L21.161 32.5L26.6119 24.3235Z"
                fill="white"
                stroke="white"
                stroke-width="0.267949"
              />
            </svg> 
          </li>
        </ul>
      </div>
    </section> -->
    <!-- <section class="bg"></section> -->
    <CrestHonor />
    <Testimonies />
    <div class="custom-container px-8 sm:px-16 md:px-28 py-24">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.08468733512!2d3.3561607304068524!3d6.6131916755737885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ab8f0ab3f3%3A0x98715e9598fa4c17!2s9%20Femi%20Ogun%20St%2C%20Off%2C%20Shangisha%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725510867130!5m2!1sen!2sng"
        width="600"
        height="450"
        allowFullScreen="{true}"
        title="Google Maps"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[400px] md:h-[700px]"
      ></iframe>
    </div>
    <!-- <section>
      <div class="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Data Protection and Security</h2>
        <ul class="list-disc list-inside">
          <li class="mb-2">Set up a privacy program for your business.</li>
          <li class="mb-2">Audit your privacy program</li>
          <li class="mb-2">ROPA management</li>
          <li class="mb-2">DSR management</li>
          <li class="mb-2">DPIA, PIA and Privacy Review</li>
          <li class="mb-2">
            Internal training on privacy and data protection.
          </li>
          <li class="mb-2">Certifications (ISO, SOC, HIPAA)</li>
        </ul>
      </div>
      <div>
        <div class="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">
            Regulatory Compliance and Licensing
          </h2>
          <p class="text-blue-600 font-semibold mb-4">
            We’ve helped over 10 companies obtain different licenses from the
            CBN and NCC.
          </p>
          <ul class="list-disc list-inside">
            <li class="mb-2">
              Get tailored assistance with your licensing efforts with the CBN,
              NCC, etc.
            </li>
            <li class="mb-2">
              Comprehensive AML/Fraud/transaction screening compliance
              implementation and audit for your business and a professional
              handholding through the remediation process.
            </li>
            <li class="mb-2">Internal trainings on AML/KYC compliance.</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Corporate Governance & IP</h2>
          <ul class="list-disc list-inside mb-6">
            <li class="mb-2">Incorporation</li>
            <li class="mb-2">Trademark and patent</li>
            <li class="mb-2">Board Appraisal</li>
            <li class="mb-2">Company secretarial services</li>
          </ul>
          <h2 class="text-xl font-bold mb-4">Transaction Advisory</h2>
          <ul class="list-disc list-inside">
            <li class="mb-2">Mergers and acquisitions</li>
            <li class="mb-2">Joint ventures</li>
            <li class="mb-2">Technology licensing</li>
          </ul>
        </div>
      </div>
      
    </section> -->
    <FooterVue />
  </main>
</template>
