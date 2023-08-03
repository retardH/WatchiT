<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="col-auto flex flex-col gap-2 bg-white shadow-sm overflow-hidden rounded-sm">
    <div class="w-full">
      <img :src="props.data.img" alt="people image" class="w-full"/>
    </div>
    <div class="flex flex-col gap-1 px-2 pb-2">
      <h4 class="text-blue-950 text-base md:text-lg flex-1">{{props.data.name}}</h4>
      <span class="text-sm md:text-base text-gray-500">Department: {{props.data.department}}</span>
    </div>
  </div>
</template>