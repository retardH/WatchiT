<script setup>
import {sliceWords} from "../../utils";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
      class="col-span-6 md:col-span-4 lg:col-span-3 gap-4 bg-white shadow-lg flex rounded-md overflow-hidden flex-col">
    <div>
      <img :src="props.imgUrl" alt="poser img" class="w-full"/>
    </div>
    <div class="flex-col flex gap-1 px-2 pb-4">
      <h4 class="text-blue-950 text-base font-bold">
        {{sliceWords(props.title, 18)}}
      </h4>
      <span class="text-sm text-gray-500">
        {{props.releaseDate}}
      </span>
    </div>
  </div>
</template>