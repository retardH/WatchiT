<script setup>
import {computed, onMounted, ref, watch} from "vue";
import TheBanner from "@/components/Home/TheBanner.vue";
import Card from "@/components/Common/TheCard.vue";
import MainContainerLayout from "@/Layout/MainContainerLayout.vue";
import {useMoviesStore} from "@/stores/movies";
import {storeToRefs} from "pinia";
import TheCarousel from "@/components/Common/TheCarousel.vue";
import ClickDropDown from "@/components/Common/ClickDropDown.vue";
import {cardDataTransformer} from "@/transformers/cardDataTransformer";
const useMovies = useMoviesStore();
const trendingFilterQuery = ref('');
const watchProviderFilterQuery = ref('');
const computedTrendingQuery = computed(() => trendingFilterQuery.value === 'Today' ? 'day' : 'week');
const computedWatchProviderQuery = computed(() => trendingFilterQuery.value === 'Movie' ? 'movie' : 'tv');
const {trendingMoviesOnHome, popularDatas} = storeToRefs(useMovies);
const {fetchTrendingMovies, fetchPopulars} = useMovies;
const popularQuery = ref('');
const computedPopularQuery = computed(() => popularQuery.value === 'On Theaters' ? 'movie' : 'tv');
watch(computedTrendingQuery, () => {
  fetchTrendingMovies(computedTrendingQuery.value);
})
watch(computedPopularQuery, () => {
  fetchPopulars(computedPopularQuery.value);
})
onMounted(() => {
  fetchTrendingMovies(computedTrendingQuery.value);
  fetchPopulars(computedPopularQuery.value);
})
</script>

<template>
  <MainContainerLayout>
    <TheBanner/>
    <div class="mt-8 px-2 lg:px-8">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-4">
          <h4 class="text-blue-950 text-xl md:text-2xl">Trending Movies</h4>
          <ClickDropDown :options="['Today', 'This Week']" @filterQuery="(q) =>
          trendingFilterQuery = q"/>
        </div>
      </div>
      <TheCarousel v-if="trendingMoviesOnHome.length >= 1" :slides="trendingMoviesOnHome" v-slot="slotProps">
        <Card :data="cardDataTransformer(slotProps.slide)"/>
      </TheCarousel>
    </div>
    <div class="mt-8 px-2 lg:px-8">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-4">
          <h4 class="text-blue-950 text-xl md:text-2xl">What's Popular</h4>
          <ClickDropDown :options="['On TV', 'On Theaters']" @filterQuery="(q) => popularQuery = q"/>
        </div>
      </div>
      <TheCarousel v-if="popularDatas.length >= 1" :slides="popularDatas" v-slot="slotProps">
        <Card :data="cardDataTransformer(slotProps.slide)"/>
      </TheCarousel>
    </div>
    <div class="mt-8 px-2 lg:px-8">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-4">
          <h4 class="text-blue-950 text-xl md:text-2xl">Available Networks</h4>
          <ClickDropDown :options="['Movie', 'TV Show']" @filterQuery="(q) =>
          watchProviderFilterQuery = q"/>
        </div>
      </div>
      <div class="-z-20 h-[300px] mx-auto overflow-hidden bg-top bg-cover banner" :style="{backgroundImage:
      'url(https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg)'}">
        <div class="flex w-full h-full justify-center backdrop-brightness-50 backdrop-blur-md flex-col gap-6 px-8">
        </div>
      </div>
    </div>
  </MainContainerLayout>
</template>
