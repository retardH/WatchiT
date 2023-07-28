<script setup>
import {sliceWords} from "@/utils/wordSlice";
import {IMAGE_URL_DOMAIN} from "@/api";

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})
const imageUrl = `${IMAGE_URL_DOMAIN}/w500${props.movie.poster_path}`;
</script>

<template>
  <div class="col-auto flex flex-col gap-2">
    <div>
      <img :src="imageUrl" :alt="props.movie.title" class="rounded-sm"/>
    </div>
    <div class="flex flex-col gap-0.5">
      <h4 class="text-blue-950 text-sm md:text-base font-bold mb-0 text-start" style="line-height: 18px">
        {{sliceWords(props.movie.title, 22)}}
      </h4>
      <span class="text-xs md:text-sm text-gray-500 text-start">
        {{props.movie.release_date}}
      </span>
    </div>
  </div>
</template>
