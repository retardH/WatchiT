export const sliceWords = (text, sliceCount) => {
    if(sliceCount > text.length) {
        return text;
    } else {
        return text.slice(0, sliceCount) + '...';
    }
}