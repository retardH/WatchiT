<script setup>
import {ref, watch} from "vue";
import {selectDataTransformer} from "@/transformers/selectDataTransformer";

  const props = defineProps({
    options: {
      type: Array,
      required: true
    },
    fallbackDefault: {
      type: String,
      default: 'None Selected'
    }
  })
  const emits = defineEmits(['updateOption']);
  const selectedOption = ref(null);
  const isOptionOpen = ref(false);
  const setSelectedOption = (option) => {
    selectedOption.value = option;
    isOptionOpen.value = false;
  }
  watch(selectedOption, () => {
    emits('updateOption', selectedOption.value);
  })

</script>

<template>
  <div class="relative">
    <div class="flex relative z-20 justify-between items-center rounded-sm px-2 py-1 bg-gray-300"
         @click="isOptionOpen = !isOptionOpen">
      <span class="text-blue-950 text-sm">{{selectedOption ? selectedOption.label : props.fallbackDefault}}</span>
      <i class="fa-solid fa-sort-down text-base text-blue-950 mb-1"></i>
    </div>
    <div v-if="isOptionOpen"
         class="absolute z-10 bg-white inset-x-0 flex flex-col rounded-md border-gray-300 border max-h-[200px] overflow-y-scroll">
      <span
          class="w-full p-1 px-2 text-sm hover:bg-gray-200 transition-all cursor-pointer"
          v-for="option in props.options"
          :key="selectDataTransformer(option).value"
          @click="setSelectedOption(selectDataTransformer(option))">
        {{selectDataTransformer(option).label}}
      </span>
    </div>
  </div>
</template>