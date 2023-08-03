<script setup>
import './assets/style.css';
import 'vue-loading-overlay/dist/css/index.css';
import { RouterView } from 'vue-router';
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
    <NavBar/>
    <RouterView/>
    <TheFooter/>
</template>

