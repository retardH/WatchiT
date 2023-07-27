<script setup>
import {onUpdated} from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
const mobileMenuItems = [
  {
    text: 'Home',
  },
  {
    text: 'Movies',
  },
  {
    text: 'TV Shows',
  },
  {
    text: 'People'
  }
]
onUpdated(() => {
  console.log(props.open);
})

</script>

<template>
  <Transition name="mobile-menu" mode="out-in">
    <div v-if="props.open" class="fixed top-[64px] z-50 w-8/12 bottom-0 bg-blue-950 bg-opacity-95 backdrop-blur-md">
        <div class="flex flex-col gap-4 px-8">
          <a v-for="(item,index) in mobileMenuItems" :key="index"
                class="cursor-pointer hover:text-teal-400 text-blue-50 opacity-100"
                :class="{hidden: !open, 'font-bold': !open}"
          >
          {{item.text}}
          </a>
        </div>
    </div>
  </Transition>
</template>

<style>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.45s ease;
}

.mobile-menu-enter-from, .mobile-menu-leave-to {
  transform: translateX(-50px);
  width: 0;
}

</style>