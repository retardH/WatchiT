<script setup>
import {Carousel, Slide, Navigation} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'

const breakpoints = {
  768: {
    itemsToShow: 4.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 6,
    snapAlign: 'start',
  }
}
const setting = {
  itemsToShow: 2,
  snapAlign: 'start',
}
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <div>
    <Carousel v-bind="setting" :breakpoints="breakpoints" :wrap-around="true" :autoplay="4000">
      <Slide v-for="slide in props.slides" :key="slide.id">
        <div class="carousel__item">
          <slot :slide="slide"></slot>
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel__item {
  margin: 0 16px;
}

.carousel__track {
  align-items: start;
}

.carousel__icon {
  fill: dodgerblue;
  stroke-width: 2px;
  height: 48px;
  stroke: dodgerblue;
}
</style>