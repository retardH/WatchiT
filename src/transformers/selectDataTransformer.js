export const selectDataTransformer = (data) => {
    return {
        label: data.english_name ? data.english_name : data.label,
        value: data.iso_639_1 ? data.iso_639_1 : data.value,
    }
}
