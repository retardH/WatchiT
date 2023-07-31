import {IMAGE_URL_DOMAIN} from "@/api";

export const generateImageUrl = (url, size = 'w500') => {
    return `${IMAGE_URL_DOMAIN}/${size}${url}`;
}

export const sliceWords = (text, sliceCount) => {
    if(sliceCount > text?.length) {
        return text;
    } else {
        return text.slice(0, sliceCount) + '...';
    }
}

export const calculateRatingColor = (rating) => {
    if(rating <= 40) {
        return '#dc2626';
    } else if(rating <= 65) {
        return '#ca8a04';
    } else {
        return '#16a34a';
    }
}

