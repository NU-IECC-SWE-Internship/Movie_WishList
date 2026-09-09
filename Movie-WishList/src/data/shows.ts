export interface Show {
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    first_air_date: string;
    genres: Genre[];
    vote_average: number;
    number_of_seasons: number;
}

export interface Genre {
    id: number;
    name: string;
}