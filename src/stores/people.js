import {defineStore} from "pinia";
import {ref} from "vue";
import {axiosInstance, generateApiOption} from "@/api";
import {useLoadingStore} from "@/stores/loading";

export const usePeopleStore = defineStore('people', () => {
    const people = ref([]);
    const fetchPeople = async (page = 1) => {
        const useLoader = useLoadingStore();
        const loader = useLoader.initializeLoading();
        axiosInstance(`/3/person/popular?page=${page}`, generateApiOption())
            .then(response => {
                if(response) {
                    useLoader.isLoading = false;
                    loader.hide();
                }
                people.value = response.data.results;
            })
            .catch(err => {
                console.log(err);
            })
    }
    return {
        people,
        fetchPeople
    }
})