export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6107c8cef2msh0a1ac574a41cd41p1a3d0ejsnf46bc64c87ec',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6107c8cef2msh0a1ac574a41cd41p1a3d0ejsnf46bc64c87ec',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

