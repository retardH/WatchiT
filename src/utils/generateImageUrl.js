import {IMAGE_URL_DOMAIN} from "@/api";

export const generateImageUrl = (url, size = 'w500') => {
    return `${IMAGE_URL_DOMAIN}/${size}${url}`;
}