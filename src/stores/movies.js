import {defineStore} from "pinia";
import {ref} from "vue";

export const useMoviesStore = defineStore('movies', () => {
    const nowPlayingMoviesOnHome = ref([]);

    return {
        nowPlayingMoviesOnHome,
    }
})