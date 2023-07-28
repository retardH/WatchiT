<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="col-auto flex flex-col gap-2">
    <div>
      <img :src="data.logo" :alt="data.provider_name" />
    </div>
    <div class="flex flex-col gap-1">
      <span>
        {{ data.provider_name }}
      </span>
    </div>
  </div>
</template>