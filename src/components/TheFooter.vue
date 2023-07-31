<script setup>
import Router from "@/router";
import FooterMenu from "@/components/Common/FooterMenu.vue";
import {footerBasics, footerCommunity, footerGetInvolved} from "@/constants";

</script>

<template>
  <div class="bg-blue-950 mt-8">
    <div
        class="py-8 w-full px-3 lg:px-8 gap-6 mx-auto flex items-start max-w-7xl flex-col md:flex-row md:justify-between"
    >
      <div class="flex flex-col gap-2">
        <h3 class="text-teal-400 font-bold text-3xl font-serif mr-auto md:mr-0 md:ml-0 cursor-pointer"
            @click="Router.push('/')"
        >WatchiT
        </h3>
        <span class="text-teal-500 text-base">to DISCOVER AND WATCH.</span>
      </div>
      <div class="flex gap-12 md:gap-20 flex-col md:flex-row">
        <FooterMenu title="The Basics" :links="footerBasics"/>
        <FooterMenu title="Get Involved" :links="footerGetInvolved"/>
        <FooterMenu title="Community" :links="footerCommunity"/>
      </div>
    </div>
  </div>
</template>