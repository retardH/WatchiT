<script setup>
import {ref} from "vue";
const isClicked = ref(false);
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="rounded-md flex flex-col bg-white py-1.5 shadow-md border">
      <div class="flex justify-between items-center p-2" :class="isClicked ? 'border-b' : 'border-b-0'" @click="isClicked =
        !isClicked">
        <h4 class="text-base lg:text-lg text-blue-950">{{props.title}}</h4>
        <i class="fa-solid fa-chevron-down text-lg text-blue-950 duration-200" :class="isClicked ? 'rotate-0' :
          '-rotate-90'"></i>
      </div>
      <slot :open="isClicked"></slot>
    </div>
  </div>
</template>