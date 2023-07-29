import {IMAGE_URL_DOMAIN} from "@/api";

export const generateImageUrl = (url, size = 'w500') => {
    return `${IMAGE_URL_DOMAIN}/${size}${url}`;
}

export const sliceWords = (text, sliceCount) => {
    if(sliceCount > text.length) {
        return text;
    } else {
        return text.slice(0, sliceCount) + '...';
    }
}