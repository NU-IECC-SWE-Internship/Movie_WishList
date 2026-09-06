import type { Movie } from "../data/movie";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-poster"
        />
        <span className={`badge ${movie.watched ? "watched" : "unwatched"}`}>
          {movie.watched ? "Watched" : "Not Watched"}
        </span>
      </div>

      <div className="movie-content">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-genre">{movie.genre}</span>
          <span className="movie-year">{movie.year}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;