<script setup>
import {onMounted} from "vue";
import {axiosInstance, generateApiOption, IMAGE_URL_DOMAIN} from "@/api";
import TheBanner from "@/components/Home/TheBanner.vue";
import MovieCard from "@/components/Common/MovieCard.vue";
import MainContainerLayout from "@/Layout/MainContainerLayout.vue";
import {useMoviesStore} from "@/stores/movies";
import {storeToRefs} from "pinia";
const useMovies = useMoviesStore();
const {nowPlayingMoviesOnHome} = storeToRefs(useMovies);
onMounted(() => {
  axiosInstance('/3/movie/now_playing?page=1', generateApiOption())
      .then(response => {
        console.log(response.data);
        nowPlayingMoviesOnHome.value = response.data.results.slice(0,6);
      })
      .catch(error => {
        console.log(error);
      })
})
</script>

<template>
  <MainContainerLayout>
    <TheBanner/>
    <div class="mt-8 px-8">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-blue-950 text-xl md:text-2xl">Trending</h4>
        <a class="text-blue-500 text-sm cursor-pointer">See more</a>
      </div>
    </div>
    <div class="mt-8 px-8">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-blue-950 text-xl md:text-2xl">Now Playing on Cinemas</h4>
        <a class="text-blue-500 text-sm cursor-pointer">See more</a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-2">
        <MovieCard v-for="movie in nowPlayingMoviesOnHome" :key="movie.id" :title="movie.original_title"
                   :release-date="movie.release_date"
                   :img-url="`${IMAGE_URL_DOMAIN}/w500${movie.poster_path}`"/>
      </div>
    </div>
  </MainContainerLayout>
</template>
