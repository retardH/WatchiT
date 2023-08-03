import {generateImageUrl} from "@/utils";

export const peopleDataTransformer = (peopleData) => {
    return {
        img: generateImageUrl(peopleData.profile_path),
        name: peopleData.name,
        department: peopleData.known_for_department,
    }
}