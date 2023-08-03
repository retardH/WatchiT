import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axiosInstance, generateApiOption } from '@/api'
import { useLoadingStore } from '@/stores/loading'

export const useMoviesStore = defineStore('movies', () => {
  const trendingMoviesOnHome = ref([])
  const trendingTvShowsOnHome = ref([])
  const bannerBackgroundImage = ref('')
  const movieListsData = ref([])
  const popularDatas = ref([])
  const genres = ref([])
  const searchQueryOptions = ref({
    genres: [],
    releases: []
  })
  const mutateSearchQueryOptions = (options) => {
    searchQueryOptions.value = {
      ...searchQueryOptions.value,
      ...options
    }
  }
  const fetchMovieLists = async (query, page = 1) => {
    const useLoader = useLoadingStore()
    const loader = useLoader.initializeLoading()
    if (page === 1) {
      console.log(movieListsData.value)
      movieListsData.value = []
    }
    axiosInstance(`${query}?page=${page}`, generateApiOption())
      .then((response) => {
        if (response) {
          useLoader.isLoading = false
          loader.hide()
        }
        if (page !== 1) {
          movieListsData.value = [...movieListsData.value, ...response.data.results]
        } else {
          movieListsData.value = response.data.results
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const fetchTrendingMovies = async (query) => {
    axiosInstance(`/3/trending/movie/${query}`, generateApiOption())
      .then((response) => {
        trendingMoviesOnHome.value = response.data.results
        let randomIndex = Math.floor(Math.random() * trendingMoviesOnHome.value.length)
        bannerBackgroundImage.value = trendingMoviesOnHome.value[randomIndex].backdrop_path
        console.log('movies', response.data.results)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const fetchPopulars = async (query) => {
    axiosInstance(`/3/${query}/popular`, generateApiOption())
      .then((response) => {
        popularDatas.value = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const fetchGenres = async (query) => {
    axiosInstance(`/3/genre/${query}/list`, generateApiOption())
      .then((response) => {
        genres.value = response.data.genres
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return {
    trendingMoviesOnHome,
    trendingTvShowsOnHome,
    fetchTrendingMovies,
    bannerBackgroundImage,
    fetchPopulars,
    popularDatas,
    genres,
    fetchGenres,
    searchQueryOptions,
    mutateSearchQueryOptions,
    fetchMovieLists,
    movieListsData
  }
})
