export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'eba12df55dmsh50bcad7d2114192p130766jsnedbcc6d6f78f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    params: {
        id: 'UCE_M8A5yxnLfW0KghEeajjw'
    },
    headers: {
        'X-RapidAPI-Key': 'eba12df55dmsh50bcad7d2114192p130766jsnedbcc6d6f78f',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

