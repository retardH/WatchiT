<script setup>
  import Router from "@/router";
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    contents: {
      type: Array
    },
    open: {
      type: Boolean,
      default: false
    }
  })
  const emits = defineEmits(['menuClick'])
  const generateRouteToRedirect = (route) => {
    if(route.includes(' ')) {
      const splitText = route.split(' ').join('_');
      return `/${props.title.toLowerCase()}/discover/${splitText.toLowerCase()}`;
    }
    return `/${props.title.toLowerCase()}/discover/${route.toLowerCase()}`;
  }
  const handleMenuClick = (route) => {
    emits('menuClick');
    Router.push(generateRouteToRedirect(route));
  }
</script>

<template>
  <transition name="hover-drop">
    <div v-if="props.open"
         class="bg-white absolute -bottom-22 z-50 rounded-sm py-1 min-w-max flex flex-col overflow-hidden">
      <div v-for="content in props.contents" :key="content" class="py-1 pl-3 pr-6 hover:bg-blue-100">
        <span class="text-blue-950 text-sm" @click="handleMenuClick(content)">
          {{content}}
        </span>
      </div>
    </div>
  </transition>
</template>

<style>
.hover-drop-enter-active,.hover-drop-leave-active {
    transition: all 0.2s ease-in-out;
}

.hover-drop-enter-from, .hover-drop-leave-to {
  opacity: 0;
}
</style>