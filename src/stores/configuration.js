import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axiosInstance, generateApiOption } from '@/api'

export const useConfigurationStore = defineStore('configuration', () => {
  const languages = ref([])
  const fetchLanguages = async () => {
    axiosInstance('/3/configuration/languages', generateApiOption())
      .then((response) => {
        languages.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    languages,
    fetchLanguages
  }
})
