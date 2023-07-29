<script setup>
import DataFilter from "@/components/DataFilter.vue";
import DataSort from "@/components/DataSort.vue";
import MainContainerLayout from "@/Layout/MainContainerLayout.vue";
import {computed, onMounted, onUpdated, ref} from "vue";
import {useRoute} from "vue-router";
import {useMoviesStore} from "@/stores/movies";
import {storeToRefs} from "pinia";
const route = useRoute();
const useMovie = useMoviesStore();
const {genres} = storeToRefs(useMovie);
const selectedGenres = ref([]);
const {fetchGenres} = useMovie;
const sortOptions = [
  {
    value: "popularity.desc",
    label: "Popularity Descending"
  },
  {
    value: "popularity.asc",
    label: "Popularity Ascending"
  },
  {
    value: "vote_average.desc",
    label: "Rating Descending"
  },
  {
    value: "vote_average.asc",
    label: "Rating Ascending"
  },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending"
  },
  {
    value: "primary_release_date.asc",
    label: "Release Date Ascending"
  }
]
const titleText = computed(() => {
  let category = '';
  if(route.params.category.includes('_')) {
    category = route.params.category.split('_').join(' ');
  } else {
    category = route.params.category;
  }
  if(route.path.includes('movie')) {
    return `${category} Movies`;
  } else if (route.path.includes('tv')) {
    return `${category} TV Shows`;
  }
  return '';
})

onMounted(() => {
  if(route.path.includes('movie')) {
    fetchGenres('movie');
  } else if(route.path.includes('tv')) {
    fetchGenres('tv');
  }
  console.log(route.params);
})

onUpdated(() => {
  if(route.path.includes('movie')) {
    fetchGenres('movie');
  } else if(route.path.includes('tv')) {
    fetchGenres('tv');
  }
  console.log(route.params);
})
</script>

<template>
  <MainContainerLayout>
    <div class="mt-8 px-2 lg:px-8">
      <h4 class="text-blue-950 text-xl md:text-2xl uppercase">
        {{titleText}}
      </h4>
    </div>
    <div class="grid grid-cols-12 gap-4 mt-8 px-2 lg:px-8">
      <div class="col-span-12 mb-8 flex flex-col gap-4 md:col-span-3">
        <DataSort :sort-options="sortOptions"/>
        <DataFilter :genres="genres" :selected-genres="selectedGenres"/>
        <button class="w-full bg-blue-500 rounded-md py-2 text-blue-50">
          Search
        </button>
      </div>
      <div class="col-span-12 md:col-span-9 bg-teal-500">
       Listss
      </div>
    </div>
  </MainContainerLayout>
</template>