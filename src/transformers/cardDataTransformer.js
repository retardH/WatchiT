import {generateImageUrl} from "@/utils";

export const cardDataTransformer = (cardData) => {
    return {
        id: cardData.id,
        title: cardData.original_title ? cardData.title : cardData.name,
        date: cardData.release_date? cardData.release_date : cardData.first_air_date,
        imgUrl: generateImageUrl(cardData.poster_path),
        overview: cardData.overview,
        rating: cardData.vote_average ? cardData.vote_average * 10 : null,
    }
}