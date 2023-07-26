<template>
  <div class="bg-blue-950">
    <nav class="py-4 w-full px-8 gap-6 mx-auto flex items-center max-w-7xl">
      <i class="fa-solid fa-bars text-xl text-blue-200 md:hidden"></i>
      <h3 class="text-blue-200 font-bold text-2xl font-serif  mr-auto md:mr-0 md:ml-0">WatchiT</h3>
      <ul class="items-center gap-4 text-blue-50 text-sm hidden md:flex">
        <li>
          Home
        </li>
        <li>
          Movie
        </li>
        <li>
          TV Shows
        </li>
        <li>
          People
        </li>
      </ul>
      <div class="flex items-center ml-0 md:ml-auto gap-4">
        <i class="relative fa-solid fa-bell text-xl text-blue-200">
          <span
              class="absolute w-4 h-4 flex items-center justify-center -top-1 -right-2 bg-teal-500 text-white rounded-full text-xs">
            4</span>
        </i>
        <i class="fa-solid fa-magnifying-glass text-xl text-blue-200"></i>
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>