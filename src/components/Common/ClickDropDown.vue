<script setup>
import {computed, onMounted, ref} from "vue";
const isClicked = ref(false);
const setSelectedValue = (event) => {
  selectedValue.value = event.target.textContent;
  isClicked.value = false;
  emits('filterQuery', selectedValue.value);
}
const emits = defineEmits(['filterQuery']);
onMounted(() => {
  emits('filterQuery', 'Today');
})
const props = defineProps({
  options: {
    type: Array,
    required: true
  }
})
const selectedValue = ref(props.options[0]);
const computedOptions = computed(() => props.options.filter(option => option !== selectedValue.value));
</script>

<template>
  <div class="relative cursor-pointer">
    <div
        class="flex relative z-40 justify-center items-center text-white gap-2 bg-teal-500 py-[6px] px-3 min-w-[114px] rounded-md"
         @click="isClicked =
    !isClicked">
      <span class="text-sm">{{ selectedValue }}</span>
      <i class="fa-solid fa-chevron-down text-sm duration-300"
         :class="isClicked ? '-rotate-180' : 'rotate-0'"></i>
    </div>
    <Transition name="click-drop-down">
      <div v-if="isClicked"
           class="absolute bg-blue-950 min-h-[35px] justify-end z-10 -bottom-7 pb-1 rounded-b-md text-white inset-x-0 flex flex-col items-center gap-2">
        <span class="text-sm w-full text-center" @click="setSelectedValue" v-for="option in computedOptions"
              :key="option">
          {{option}}
        </span>
      </div>
    </Transition>
  </div>
</template>

<style>
.click-drop-down-enter-active, .click-drop-down-leave-active {
  transition: all 0.25s ease-in-out, opacity 0.2s ease-in-out;
}

.click-drop-down-enter-from, .click-drop-down-leave-to {
  transform: translateY(-20px);
}
</style>