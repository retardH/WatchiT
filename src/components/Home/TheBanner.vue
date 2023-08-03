<script setup>
  import {storeToRefs} from "pinia";
  import {useMoviesStore} from "@/stores/movies";
  import {onUpdated} from "vue";
  const useMovie = useMoviesStore();
  const {bannerBackgroundImage} = storeToRefs(useMovie);
  onUpdated(() => {
    console.log(bannerBackgroundImage.value);
  })
</script>

<template>
  <div class="-z-20 h-[380px] mx-auto overflow-hidden bg-center bg-cover banner" :style="{backgroundImage:
  bannerBackgroundImage ? 'url(https://image.tmdb.org/t/p/original' + bannerBackgroundImage : 'https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg'}">
    <div
        class="flex w-full h-full justify-center backdrop-brightness-50 backdrop-blur-sm flex-col gap-6 px-8">
      <div class="flex flex-col gap-1 z-30">
        <h1 class="text-2xl md:text-4xl font-semibold text-blue-50">Welcome.</h1>
        <h2 class="text-xl md:text-3xl text-blue-50">Millions of movies, TV shows and people to discover. Explore now
          .</h2>
      </div>
      <div class="flex items-center w-full rounded-sm overflow-hidden">
        <input class="flex-1 bg-blue-50 p-2 placeholder-blue-950"
               placeholder="Search for a movie,tv show or people . . ."/>
        <button class="bg-teal-500 py-2 px-4 cursor-pointer text-blue-50">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>