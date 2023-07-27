<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    contents: {
      type: [],
    },
    open: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div v-if="props.open">

  </div>
</template>