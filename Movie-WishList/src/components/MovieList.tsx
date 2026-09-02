import type { Movie } from "../data/movie";
import MovieCard from "./MovieCard";


interface MovieListProps {
    movies: Movie[]; 
}

function MovieList({movies}: MovieListProps){
    return(
        <div>
            <ul>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
            </ul>
        </div>
    )


}
export default MovieList;
