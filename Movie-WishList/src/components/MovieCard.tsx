import type { Movie } from "../data/movie";
import { IMAGE_BASE_URL } from "../data/TMDB";

interface MovieCardProps {
  movie: Movie;
  markWatched: (id: number) => void;
}

function MovieCard({ movie, markWatched }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://placehold.co/500x750/1e293b/f8fafc?text=No+Poster";

  const genres = movie.genres?.length
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "No genres";

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={posterUrl} alt={movie.title} className="movie-poster" />

        <span className={`badge ${movie.watched ? "watched" : "unwatched"}`}>
          {movie.watched ? "Watched" : "Not Watched"}
        </span>
      </div>

      <div className="movie-content">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-meta">
          <span className="movie-genre">{genres}</span>
          <span className="movie-year">{releaseYear}</span>
        </div>

        <button className="watch-button" onClick={() => markWatched(movie.id)}>
          {movie.watched ? "Mark Unwatched" : "Mark Watched"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;