<script setup>

import DataFilter from "@/components/DataFilter.vue";
</script>

<template>
  <div>
    <div class="mt-8 px-2 lg:px-8">
      <h4 class="text-blue-950 text-xl md:text-2xl">Now Playing Movies</h4>
    </div>
    <div class="grid grid-cols-12 mt-8 px-2 lg:px-8">
      <div class="col-span-12 mb-8 md:col-span-3 lg:col-span-4">
        <DataFilter/>
      </div>
      <div class="col-span-12 md:col-span-9 lg:col-span-8 bg-teal-500">
       Listss
      </div>
    </div>
  </div>
</template>