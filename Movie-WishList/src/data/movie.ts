export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string | null;
    runtime: number;
    genres: Genre[];
    vote_average: number;
    watched?: boolean;
    
}

export interface Genre {
    id: number;
    name: string;
}