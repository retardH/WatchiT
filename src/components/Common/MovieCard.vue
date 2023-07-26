<template>
  <div class="col-auto flex flex-col gap-4">
    <div>
      <img :src="props.imgUrl" :alt="props.title" class="rounded-sm"/>
    </div>
    <div class="flex flex-col gap-1">
      <h4 class="text-blue-950">
        {{props.title}}
      </h4>
      <span class="text-sm text-gray-500">
        {{props.releaseDate}}
      </span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    imgUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    releaseDate: {
      type: String,
      required: true
    }
  })
</script>