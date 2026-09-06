import type { Movie } from "../data/movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;