const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTMyMDMxOTQxNmI1ZGQ5NThhNGVlOWFjY2M2YWU5MyIsIm5iZiI6MTc4ODk0NzUwNy44Miwic3ViIjoiNmFhMTJjMzM3ZmMwZWNiYThkYzkzNmE3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7N4a-bbdSLCer4nVE6P4UxKKEpV83W_5JKRA7GBzUYE";

export const options = {
    method: 'GET',
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
};

export { BASE_URL, IMAGE_BASE_URL };