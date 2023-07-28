<script setup>
import {sliceWords} from "@/utils/wordSlice";
import {generateImageUrl} from "@/utils/generateImageUrl";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  cardType: {
    type: String,
    default: 'movie'
  }
})
</script>

<template>
  <div class="col-auto flex flex-col gap-2 rounded-sm">
    <div>
      <img :src="generateImageUrl(props.data.poster_path)" :alt="props.data.title" class="rounded-md"/>
    </div>
    <div class="flex flex-col gap-0.5">
      <h4 class="text-blue-950 text-sm md:text-base font-bold mb-0 text-start" style="line-height: 18px">
        {{props.cardType === 'movie' ? sliceWords(props.data.original_title, 22) : props.data.original_name}}
      </h4>
      <span class="text-xs md:text-sm text-gray-500 text-start">
        {{props.cardType === 'movie' ? props.data.release_date : props.data.first_air_date}}
      </span>
    </div>
  </div>
</template>
