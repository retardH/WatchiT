<script setup>
import MainContainerLayout from '@/Layout/MainContainerLayout.vue'
import { onBeforeMount } from 'vue'
import { usePeopleStore } from '@/stores/people'
import { storeToRefs } from 'pinia'
import PeopleCard from '@/components/Common/PeopleCard.vue'
import { peopleDataTransformer } from '@/transformers/peopleDataTransformer'
import Paginate from "vuejs-paginate-next";
const usePeople = usePeopleStore()
const { fetchPeople } = usePeople
const { people } = storeToRefs(usePeople)
onBeforeMount(() => {
  fetchPeople()
})
const paginateClickHandler = (page) => {
  fetchPeople(page);
}
</script>

<template>
  <MainContainerLayout>
    <div class="mt-8 px-2 lg:px-8">
      <h4 class="text-blue-950 text-xl md:text-2xl uppercase">Popular People</h4>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8 px-2 lg:px-8"
    >
      <PeopleCard v-for="data in people" :key="data.name" :data="peopleDataTransformer(data)" />
    </div>
    <div class="mx-auto max-w-5xl mt-8">
      <Paginate
        :pageCount="100"
        prevText="Previous"
        nextText="Next"
        containerClass="pagination"
        :clickHandler="paginateClickHandler"
      />
    </div>
  </MainContainerLayout>
</template>

<style scoped>

  .pagination {
    justify-content: center !important;
  }
  .pagination .page-item {
    cursor: pointer !important;
  }
</style>