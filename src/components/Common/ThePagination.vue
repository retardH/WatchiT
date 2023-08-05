<script setup>
  import {ref} from "vue";

  const props = defineProps({
    totalPages: {
      type: Number,
      required: true
    },
  })
  const currentPage = ref(1);
</script>

<template>
  <div class="flex flex-row items-center">

  </div>
</template>