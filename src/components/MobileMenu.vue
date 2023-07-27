<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
const mobileMenuItems = [
  {
    text: 'Home'
  },
  {
    text: 'Movies'
  },
  {
    text: 'TV Shows'
  },
  {
    text: 'People'
  }
]
</script>

<template>
  <Transition name="mobile-menu" mode="out-in">
    <div
      v-if="props.open"
      class="fixed top-0 z-50 w-8/12 bottom-0 bg-blue-950 bg-opacity-95 backdrop-blur-md"
    >
      <div class="flex flex-col gap-4 mt-[64px] px-8">
        <a
          v-for="(item, index) in mobileMenuItems"
          :key="index"
          class="cursor-pointer hover:text-teal-400 text-blue-50 opacity-100"
          :class="{ hidden: !props.open }"
        >
          {{ item.text }}
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

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(-50px);
  width: 0;
}

.mobile-menu-enter-from a,
.mobile-menu-leave-to a {
  opacity: 0;
}

.mobile-menu-enter-active a,
.mobile-menu-leave-active a {
  transition: all 0.2s ease;
}
</style>
