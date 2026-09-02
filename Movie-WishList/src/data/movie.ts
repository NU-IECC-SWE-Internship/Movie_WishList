export interface Movie {
    id: number
    title: string
    genre: string
    year: number
    poster: string
    watched: boolean
}

const movies: Movie[] = [
    {
        id: 1,
        title: "Love, Rosie",
        genre: "Romance",
        year: 2014,
        poster: "https://placehold.co/300x450?text=Love+Rosie",
        watched: true
    },
    {
        id: 2,
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        poster: "https://placehold.co/300x450?text=Interstellar",
        watched: false
    },
    {
        id: 3,
        title: "The Notebook",
        genre: "Romance",
        year: 2004,
        poster: "https://placehold.co/300x450?text=The+Notebook",
        watched: true
    },
    {
        id: 4,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        poster: "https://placehold.co/300x450?text=Inception",
        watched: false
    },
    {
        id: 5,
        title: "The Hunger Games",
        genre: "Adventure",
        year: 2012,
        poster: "https://placehold.co/300x450?text=Hunger+Games",
        watched: true
    },
    {
        id: 6,
        title: "La La Land",
        genre: "Musical",
        year: 2016,
        poster: "https://placehold.co/300x450?text=La+La+Land",
        watched: false
    }
]

export default movies