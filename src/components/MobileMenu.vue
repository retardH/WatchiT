<script setup>
import {movieMenus, tvShowMenus} from "@/constants";
import Router from "@/router";

const props = defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['menuClick'])
const mobileMenuItems = [
  {
    title: '',
    text: 'Home',
    menus: null
  },
  {
    title: 'movie',
    text: 'Movie',
    menus: movieMenus
  },
  {
    title: 'tv',
    text: 'TvShow',
    menus: tvShowMenus
  },
  {
    title: '',
    text: 'People',
    menus: null
  }
];
const generateRouteToRedirect = (route, title) => {
  if(route.includes(' ')) {
    const splitText = route.split(' ').join('_');
    return `/${title.toLowerCase()}/discover/${splitText.toLowerCase()}`;
  }
  return `/${title.toLowerCase()}/discover/${route.toLowerCase()}`;
}
const handleMenuClick = (route, title) => {
  Router.push(generateRouteToRedirect(route, title));
  emits('menuClick');
}
</script>

<template>
  <Transition name="mobile-menu" mode="out-in">
    <div
      v-if="props.open"
      class="fixed top-0 z-50 w-8/12 bottom-0 bg-blue-950 bg-opacity-95 backdrop-blur-md"
    >
      <div class="flex flex-col gap-4 mt-[64px] px-3">
        <div
            v-for="(item, index) in mobileMenuItems"
            :key="index"
        >
          <a
              class="cursor-pointer hover:text-teal-400 text-blue-50 opacity-100"
              :class="{ hidden: !props.open }"
          >
            {{ item.text }}
          </a>
          <div class="px-2 flex flex-col gap-1 mt-1">
            <a class="cursor-pointer hover:text-teal-400 text-gray-400 opacity-100" v-for="menu in item.menus"
               :key="menu.label" @click="handleMenuClick(menu.label, item.title)">
              {{menu.label}}
            </a>
          </div>
        </div>
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
  transition: all 0.15s ease-in-out;
}
</style>
