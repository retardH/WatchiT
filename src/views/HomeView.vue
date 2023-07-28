<script setup>
import {onMounted} from "vue";
import {axiosInstance, generateApiOption, IMAGE_URL_DOMAIN} from "@/api";
import TheBanner from "@/components/Home/TheBanner.vue";
import MovieCard from "@/components/Common/MovieCard.vue";
import MainContainerLayout from "@/Layout/MainContainerLayout.vue";
import {useMoviesStore} from "@/stores/movies";
import {storeToRefs} from "pinia";
import TheCarousel from "@/components/Common/TheCarousel.vue";
const useMovies = useMoviesStore();
const {nowPlayingMoviesOnHome} = storeToRefs(useMovies);
onMounted(() => {
  axiosInstance('/3/movie/now_playing?page=1', generateApiOption())
      .then(response => {
        console.log(response.data);
        nowPlayingMoviesOnHome.value = response.data.results;
      })
      .catch(error => {
        console.log(error);
      })
})
</script>

<template>
  <MainContainerLayout>
    <TheBanner/>
    <div class="mt-8 px-2 lg:px-8">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-blue-950 text-xl md:text-2xl">Trending</h4>
        <a class="text-blue-500 text-sm cursor-pointer">See more</a>
      </div>
    </div>
    <div class="mt-8 px-2 lg:px-8">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-blue-950 text-xl md:text-2xl">Now Playing on Cinemas</h4>
        <a class="text-blue-500 text-sm cursor-pointer">See more</a>
      </div>
<!--      <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-2">-->
<!--        <MovieCard v-for="movie in nowPlayingMoviesOnHome" :key="movie.id" :movie="movie"/>-->
<!--      </div>-->
      <TheCarousel :slides="nowPlayingMoviesOnHome" v-slot="slotProps">
        <MovieCard :movie="slotProps.slide"/>
      </TheCarousel>
    </div>
  </MainContainerLayout>
</template>
