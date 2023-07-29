<script setup>
import TheAccordion from "@/components/Common/TheAccordion.vue";
import {ref} from "vue";
import TheBadge from "@/components/Common/TheBadge.vue";
import {useMoviesStore} from "@/stores/movies";
import {storeToRefs} from "pinia";
const useMovie = useMoviesStore();
const {searchQueryOptions} = storeToRefs(useMovie);
const releaseTypes = ref([
  {
    value: 1,
    label: "Premiere"
  },
  {
    value: 2,
    label: "Theatrical (limited)",
  },
  {
    value: 3,
    label: "Theatrical",
  },
  {
    value: 4,
    label: "Digital",
  },
  {
    value: 5,
    label: "Physical"
  },
  {
    value: 6,
    label: "TV"
  }
])
const props = defineProps({
  genres: {
    type: Array,
  },
  selectedGenres: {
    type: Array
  }
})
const mutateSelectedGenres = (selectedGenre) => {
  if(searchQueryOptions.value.genres.includes(selectedGenre)) {
    searchQueryOptions.value.genres = searchQueryOptions.value.genres.filter(genre => genre !== selectedGenre);
  } else {
    searchQueryOptions.value.genres.push(selectedGenre);
  }
}
</script>

<template>
    <TheAccordion title="Filters" v-slot="slotProps">
        <div v-if="slotProps.open">
          <div class="flex flex-col gap-1 p-2 border-b">
            <h4 class="text-base text-gray-400 font-light">Release Dates</h4>
            <div class="flex flex-col mb-2 gap-1">
              <div class="flex flex-row items-center gap-2">
                <input type="checkbox"/>
                <label class="text-sm">Search all releases?</label>
              </div>
              <div class="flex flex-row items-center gap-2">
                <input type="checkbox"/>
                <label class="text-sm">Search all countries?</label>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="flex flex-row items-center gap-2" v-for="data in releaseTypes" :key="data.value">
                <input type="checkbox"/>
                <label class="text-sm">{{ data.label }}</label>
              </div>
            </div>
          </div>
          <div v-if="props.genres" class="flex flex-col gap-2 p-2">
            <h4 class="text-base text-gray-400 font-light">Genres</h4>
            <div class="flex items-center flex-wrap gap-2">
              <TheBadge v-for="genre in props.genres" :key="genre.id" :value="genre.name"
                        :search-query-genres="searchQueryOptions.genres"
                        @genre-change="mutateSelectedGenres(genre.name)"
              />
            </div>
          </div>
        </div>
    </TheAccordion>
</template>