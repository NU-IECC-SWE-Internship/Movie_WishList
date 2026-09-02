import type { Movie } from "../data/movie"

interface MovieCardProps {
    movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
    return (
        <div>
            <p>{movie.id}</p>

            <p>{movie.title}</p>

            <p>{movie.genre}</p>

            <p>{movie.year}</p>

            <img
                src={movie.poster}
                alt={movie.title}
            />

           <p>
    {movie.watched ? "Watched" : "Not Watched"}
</p>
        </div>
    )
}

export default MovieCard