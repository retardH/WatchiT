import {defineStore} from "pinia";
import {ref} from "vue";
import {axiosInstance, generateApiOption} from "@/api";

export const usePeopleStore = defineStore('people', () => {
    const people = ref([]);
    const fetchPeople = async (page = 1) => {
        axiosInstance(`/3/person/popular?page=${page}`, generateApiOption())
            .then(response => {
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