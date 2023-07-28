import {defineStore} from "pinia";
import {ref} from "vue";
import {axiosInstance, generateApiOption} from "@/api";

export const useMoviesStore = defineStore('movies', () => {
    const nowPlayingMoviesOnHome = ref([]);
    const trendingMoviesOnHome = ref([]);
    const trendingTvShowsOnHome = ref([]);
    const bannerBackgroundImage = ref('');
    const moviesWatchProviders = ref([]);
    const popularDatas = ref([]);
    const fetchTrendingMovies = async (query) => {
        axiosInstance(`/3/trending/movie/${query}`, generateApiOption())
            .then(response => {
                trendingMoviesOnHome.value = response.data.results;
                let randomIndex = Math.floor(Math.random() * trendingMoviesOnHome.value.length);
                bannerBackgroundImage.value = trendingMoviesOnHome.value[randomIndex].backdrop_path;
                console.log('movies',response.data.results);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const fetchTrendingTvShows = async (query) => {
        axiosInstance(`/3/trending/tv/${query}`, generateApiOption())
            .then(response => {
                trendingTvShowsOnHome.value = response.data.results;
                console.log(response.data.results);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const fetchPopulars = async (query) => {
        axiosInstance(`/3/${query}/popular`, generateApiOption())
            .then(response => {
                popularDatas.value = response.data.results;
            })
            .catch(error => {
                console.log(error);
            })
    }
    const fetchMoviesWatchProviders = async (query) => {
        axiosInstance(`/3/watch/providers/${query}`, generateApiOption())
            .then(response => {
                moviesWatchProviders.value = response.data.results.filter(provider => provider.display_priority <= 5);
                console.log(moviesWatchProviders.value);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return {
        nowPlayingMoviesOnHome,
        trendingMoviesOnHome,
        trendingTvShowsOnHome,
        fetchTrendingMovies,
        fetchTrendingTvShows,
        bannerBackgroundImage,
        fetchMoviesWatchProviders,
        fetchPopulars,
        popularDatas
    }
})