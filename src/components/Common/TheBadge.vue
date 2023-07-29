<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true
  },
  searchQueryGenres: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['genreChange'])
</script>

<template>
  <div
      class="px-3 py-0.5 rounded-full cursor-pointer hover:bg-blue-500 hover:border-blue-500 hover:text-blue-50 border-gray-400 border"
      :class="{
        'text-blue-50': props.searchQueryGenres.includes(props.value),
         'bg-blue-500': props.searchQueryGenres.includes(props.value),
       }"
      @click="emits('genreChange')"
  >
    <span class="text-sm text-center">
      {{ props.value }}
    </span>
  </div>
</template>