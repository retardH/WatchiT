<template>
  <div class="-z-20 h-[380px] mx-auto bg-center bg-cover banner">
    <div
        class="flex w-full h-full justify-center backdrop-brightness-50 backdrop-blur-sm flex-col gap-6 px-8">
      <div class="flex flex-col gap-1 z-30">
        <h1 class="text-4xl font-bold text-blue-50">Welcome.</h1>
        <h2 class="text-3xl text-blue-50">Millions of movies, TV shows and people to discover. Explore now.</h2>
      </div>
      <div class="flex items-center w-full rounded-sm overflow-hidden">
        <input class="flex-1 bg-blue-50 p-2 placeholder-blue-950" placeholder="Search for a movie,tv show or people"/>
        <button class="bg-teal-500 py-2 px-4 cursor-pointer text-blue-50">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .banner {
    background-image: url("https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg");
  }
</style>