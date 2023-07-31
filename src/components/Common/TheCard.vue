<script setup>
import {sliceWords} from "@/utils/wordSlice";
import CircularProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
import {calculateRatingColor} from "@/utils";
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  solid: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="col-auto flex gap-2 rounded-md overflow-hidden" :class="props.solid ?
  'bg-white shadow-md flex-row md:flex-col col-span-full md:col-auto items-start' :
  'flex-col'">
    <div :class="props.solid ? 'w-5/12 md:w-full h-full' : 'w-full'" class="relative">
      <img :src="props.data.imgUrl" :alt="props.data.title" class="w-full" :class="props.solid
       ? 'h-full' : 'rounded-md'"/>
      <div :class="props.solid && 'hidden md:block'" class="absolute -bottom-3 left-2 text-white text-xs">
        <CircularProgress :size="30" :border-width='3'
                          :border-bg-width='3'
                          :percent="props.data.rating"
                          :show-percent="true"
                          :fill-color="calculateRatingColor(props.data.rating)"
                          empty-color="#292524"
                          background="#0c0a09"
        />
      </div>
    </div>
    <div class="flex flex-col items-start gap-2 py-2" :class="!props.solid ? 'px-0 w-7/12 md:w-full' : 'px-2 w-full'">
      <div class="flex flex-col gap-0.5">
        <h4 class="text-blue-950 text-sm md:text-base hidden md:block mb-0 text-start" style="line-height: 18px">
          {{sliceWords(props.data.title, 12)}}
        </h4>
        <h4 class="text-blue-950 text-base md:hidden mb-0 text-start" style="line-height: 18px">
          {{props.data.title}}
        </h4>
        <span class="text-xs md:text-sm text-gray-500 text-start">
        {{props.data.date}}
      </span>
      </div>
      <div v-if="props.solid">
        <span class="md:hidden text-sm leading-snug text-gray-700 text-start">
          {{sliceWords(props.data.overview, 100)}}
        </span>
      </div>
    </div>
  </div>
</template>
