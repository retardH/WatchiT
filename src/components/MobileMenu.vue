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
  <transition name="mobile-menu">
    <div v-if="open" class="fixed top-[64px] z-50 w-8/12 min-h-screen bg-blue-950 bg-opacity-95 backdrop-blur-md">
        <div class="flex flex-col gap-4 px-8">
          <span v-for="item in mobileMenuItems" :key="item.text"
                class="cursor-pointer hover:text-teal-400 text-blue-50 opacity-100" :class="open === true ?
                '' :
                'hidden'"
          >
          {{item.text}}
          </span>
        </div>
    </div>
  </transition>
</template>

<style>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s ease;
}

.mobile-menu-enter-from, .mobile-menu-leave-to {
  width: 0;
  transform: translateX(-50px);
}

</style>