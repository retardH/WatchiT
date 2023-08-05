<script setup>
import DataFilter from '@/components/DataFilter.vue'
import DataSort from '@/components/DataSort.vue'
import MainContainerLayout from '@/Layout/MainContainerLayout.vue'
import { computed, onBeforeMount, onMounted, onUpdated, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { useConfigurationStore } from '@/stores/configuration'
import TheCard from '@/components/Common/TheCard.vue'
import { cardDataTransformer } from '@/transformers/cardDataTransformer'
const route = useRoute()
const useMovie = useMoviesStore()
const useConfiguration = useConfigurationStore()
const { genres, movieListsData } = storeToRefs(useMovie)
const { fetchLanguages } = useConfiguration
const { languages } = storeToRefs(useConfiguration)
const selectedGenres = ref([])
const { fetchGenres, fetchMovieLists } = useMovie
const page = ref(1)
const sortOptions = [
  {
    value: 'popularity.desc',
    label: 'Popularity Descending'
  },
  {
    value: 'popularity.asc',
    label: 'Popularity Ascending'
  },
  {
    value: 'vote_average.desc',
    label: 'Rating Descending'
  },
  {
    value: 'vote_average.asc',
    label: 'Rating Ascending'
  },
  {
    value: 'primary_release_date.desc',
    label: 'Release Date Descending'
  },
  {
    value: 'primary_release_date.asc',
    label: 'Release Date Ascending'
  }
]
const titleText = computed(() => {
  let category = ''
  if (route.params.category.includes('_')) {
    category = route.params.category.split('_').join(' ')
  } else {
    category = route.params.category
  }
  if (route.path.includes('movie')) {
    return `${category} Movies`
  } else if (route.path.includes('tv')) {
    return `${category} TV Shows`
  }
  return ''
})

watch(
  () => route.path,
  () => {
    if (route.path.includes('movie')) {
      fetchMovieLists(`3/movie/${route.params.category}`)
    } else if (route.path.includes('tv')) {
      fetchMovieLists(`3/tv/${route.params.category}`)
    }
  }
)

onBeforeMount(() => {
  if (route.path.includes('movie')) {
    fetchGenres('movie')
    fetchMovieLists(`3/movie/${route.params.category}`)
  } else if (route.path.includes('tv')) {
    fetchGenres('tv')
    fetchMovieLists(`3/tv/${route.params.category}`)
  }
  fetchLanguages()
})

onUpdated(() => {
  if (route.path.includes('movie')) {
    fetchGenres('movie')
  } else if (route.path.includes('tv')) {
    fetchGenres('tv')
  }
  console.log(route.params)
})
const loadMoreMovie = (page) => {
  fetchMovieLists(`3/movie/${route.params.category}`, page)
}
const handleLoadMoreBtnClick = () => {
  page.value += 1
  loadMoreMovie(page.value)
}
</script>

<template>
  <MainContainerLayout>
    <div class="mt-8 px-2 lg:px-8">
      <h4 class="text-blue-950 text-xl md:text-2xl uppercase">
        {{ titleText }}
      </h4>
    </div>
    <div class="grid grid-cols-12 gap-4 mt-8 px-2 lg:px-8">
      <div class="col-span-12 mb-8 flex flex-col gap-4 md:col-span-3">
        <DataSort :sort-options="sortOptions" />
        <DataFilter :genres="genres" :selected-genres="selectedGenres" :languages="languages" />
        <button class="w-full bg-blue-500 rounded-md py-2 text-blue-50">Search</button>
      </div>
      <div
        v-if="movieListsData.length >= 1"
        class="col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:col-span-9"
      >
        <TheCard
          v-for="data in movieListsData"
          :key="data.id"
          :data="cardDataTransformer(data)"
          solid
        />
        <div class="col-span-full">
          <button
            class="w-full py-2 bg-blue-500 rounded-sm text-blue-50"
            @click="handleLoadMoreBtnClick"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </MainContainerLayout>
</template>