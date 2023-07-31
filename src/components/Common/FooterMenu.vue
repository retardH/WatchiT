<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div class="flex-col flex gap-2">
    <h4 class="uppercase text-base font-bold text-blue-50">{{props.title}}</h4>
    <div class="flex flex-col gap-1">
      <span v-for="link in props.links" :key="link.label" class="text-blue-200 text-base">
        {{link.label}}
      </span>
    </div>
  </div>
</template>