import type { Movie } from "../data/movie";
import ShowCard from "./MovieCard";


interface MovieListProps {
    movies: Movie[]; 
}

function MovieList({movies}: MovieListProps){
    return(
        <div>
            <ul>
            {movies.map(movie => (
                <ShowCard key={movie.id} movie={movie}></ShowCard>
            ))}
            </ul>
        </div>
    )


}
export default MovieList;
