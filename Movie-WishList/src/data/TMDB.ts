const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const options = {
    method: 'GET',
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
};

export { BASE_URL, IMAGE_BASE_URL };