import type { Show } from "../data/shows";
import { IMAGE_BASE_URL } from "../data/TMDB";

interface ShowCardProps {
  show: Show;
  markWatched: (id: number) => void;
}

function ShowCard({ show, markWatched }: ShowCardProps) {
  const posterUrl = show.poster_path
    ? `${IMAGE_BASE_URL}${show.poster_path}`
    : "https://placehold.co/500x750/1e293b/f8fafc?text=No+Poster";

  const genres = show.genres?.length
    ? show.genres.map((genre) => genre.name).join(", ")
    : "No genres";

  const airdate = show.first_air_date
    ? new Date(show.first_air_date).getFullYear()
    : "N/A";

  return (
    <div className="show-card">
      <div className="poster-wrapper">
        <img src={posterUrl} alt={show.name} className="show-poster" />

        <span className={`badge ${show.watched ? "watched" : "unwatched"}`}>
          {show.watched ? "Watched" : "Not Watched"}
        </span>
      </div>

      <div className="show-content">
        <h3 className="show-title">{show.name}</h3>

        <div className="show-meta">
          <span className="show-genre">{genres}</span>
          <span className="show-year">{airdate}</span>
        </div>

        <button className="watch-button" onClick={() => markWatched(show.id)}>
          {show.watched ? "Mark Unwatched" : "Mark Watched"}
        </button>
      </div>
    </div>
  );
}

export default ShowCard;