import type { Movie } from "../data/movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
    movies: Movie[]
    markWatched: (id: number) => void
}

function MovieList({ movies, markWatched }: MovieListProps) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          markWatched={markWatched}
        />
      ))}
    </div>
  );
}

export default MovieList;