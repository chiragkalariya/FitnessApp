export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '618f039e59mshc1d115d88aa4f1ep1695d5jsnd0734747ef44',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '618f039e59mshc1d115d88aa4f1ep1695d5jsnd0734747ef44',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

