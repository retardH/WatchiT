<script setup>
import TheAccordion from "@/components/Common/TheAccordion.vue";
const props = defineProps({
  sortOptions: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <TheAccordion title="Sort">
    <template #default="slotProps">
      <div v-if="slotProps.open">
        <div class="flex flex-col gap-2 p-2">
          <h4 class="text-base text-gray-400 font-light">Sort Results By</h4>
          <select class="w-full focus:outline-0 focus:ring-0 py-2 px-1 rounded-sm bg-gray-300 text-sm">
            <option v-for="option in props.sortOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </template>
  </TheAccordion>
</template>