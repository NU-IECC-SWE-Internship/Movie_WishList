import { useEffect, useState } from "react";
import type { Movie } from "../data/movie";
import type { Show } from "../data/shows";

import MovieCard from "../components/MovieCard";
import ShowCard from "../components/ShowCard";

function Profile() {
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);
  const [watchedShows, setWatchedShows] = useState<Show[]>([]);

  useEffect(() => {
    const movies: Movie[] = JSON.parse(
      localStorage.getItem("watchedMovies") || "[]"
    );

    const shows: Show[] = JSON.parse(
      localStorage.getItem("watchedShows") || "[]"
    );

    setWatchedMovies(movies);
    setWatchedShows(shows);
  }, []);

  return (
    <div>
      <h1>My Profile</h1>

      <h2>Watched Movies</h2>

      <div className="movie-grid">
        {watchedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            markWatched={() => {}}
          />
        ))}
      </div>

      <h2>Watched Shows</h2>

      <div className="movie-grid">
        {watchedShows.map((show) => (
          <ShowCard
            key={show.id}
            show={show}
            markWatched={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;