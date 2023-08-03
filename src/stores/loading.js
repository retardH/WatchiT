import {useLoading} from "vue-loading-overlay";
import {defineStore} from "pinia";
import {ref} from "vue";
export const useLoadingStore = defineStore('loading', () => {
    const isLoading = ref(false);
    const loading = useLoading({
        loader: 'dots',
        active: isLoading.value,
        isFullPage: true,
        color: '#0d9488',
    });
    const initializeLoading = () => {
        isLoading.value = true;
        return loading.show();
    }
    const stopLoading = () => {
        let loader = initializeLoading();
        isLoading.value = false;
        loader.hide();
    }
    return {
        isLoading,
        loading,
        initializeLoading,
        stopLoading
    }
})
