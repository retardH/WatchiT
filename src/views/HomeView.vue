<script setup>
import {onMounted, ref} from "vue";
import {axiosInstance, generateApiOption, IMAGE_URL_DOMAIN} from "@/api";
import TheBanner from "@/components/Home/TheBanner.vue";
import MovieCard from "@/components/Common/MovieCard.vue";
import MainContainerLayout from "@/Layout/MainContainerLayout.vue";
const nowPlayingMovies = ref([]);
onMounted(() => {
  axiosInstance('/3/movie/now_playing?page=1', generateApiOption())
      .then(response => {
        console.log(response.data);
        nowPlayingMovies.value = response.data.results;
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
      <h4 class="text-blue-950 text-2xl mb-4">Now Playing on Cinemas</h4>
      <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-2 place-items-center">
        <MovieCard v-for="movie in nowPlayingMovies" :key="movie.id" :title="movie.original_title"
                   :release-date="movie.release_date"
                   :img-url="`${IMAGE_URL_DOMAIN}/w500${movie.poster_path}`"/>
      </div>
    </div>
  </MainContainerLayout>
</template>
