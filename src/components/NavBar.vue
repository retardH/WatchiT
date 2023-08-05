<script setup>
import DropDown from '@/components/Common/HoverDropDown.vue'
import { ref } from 'vue'
import MobileMenu from '@/components/MobileMenu.vue'
import Router from '@/router'
const isMovieDropDownOpen = ref(false)
const isTvShowDropDownOpen = ref(false)
const isPeopleDropDownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const navbarLinks = ref([
  {
    text: 'Movies',
    dropDown: {
      title: 'Movie',
      openState: isMovieDropDownOpen,
      contents: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated']
    }
  },
  {
    text: 'TV Shows',
    dropDown: {
      title: 'TV',
      openState: isTvShowDropDownOpen,
      contents: ['Popular', 'Airing Today', 'On The Air', 'Top Rated']
    }
  },
  {
    text: 'People',
    dropDown: {
      title: 'People',
      openState: isPeopleDropDownOpen,
      contents: ['Popular']
    }
  }
]);
</script>

<template>
  <div class="bg-blue-950 sticky top-0" style="z-index: 9999">
    <nav
      class="py-4 w-full px-3 lg:px-8 gap-6 mx-auto flex items-center max-w-7xl sticky top-0"
      style="z-index: 9999"
    >
      <i
        class="fa-solid fa-bars text-xl text-blue-200 md:hidden"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      ></i>
      <h3
        class="text-teal-400 font-bold text-2xl font-serif mr-auto md:mr-0 md:ml-0 cursor-pointer"
        @click="Router.push('/')"
      >
        WatchiT
      </h3>
      <ul class="items-center gap-6 text-blue-50 text-sm hidden md:flex">
        <li
          v-for="link in navbarLinks"
          :key="link.text"
          class="cursor-pointer hover:text-teal-400 relative"
          @mouseenter="link.dropDown.openState = true"
          @mouseleave="link.dropDown.openState = false"
        >
          <span>
            {{ link.text }}
          </span>
          <DropDown
            :title="link.dropDown.title"
            :open="link.dropDown.openState"
            :contents="link.dropDown.contents"
            @menu-click="(v) => (link.dropDown.openState = false)"
          />
        </li>
      </ul>
      <div class="flex items-center ml-0 md:ml-auto gap-8">
        <i class="fa-solid fa-magnifying-glass text-xl text-blue-200"></i>
        <i class="relative fa-solid fa-bell text-xl text-blue-200">
          <span
            class="absolute w-4 h-4 flex items-center justify-center -top-1 -right-[10px] bg-teal-500 text-white rounded-full text-[8px]"
          >
            4
          </span>
        </i>
      </div>
    </nav>
    <MobileMenu :open="isMobileMenuOpen" @menu-click="(i) => (isMobileMenuOpen = false)" />
  </div>
</template>
