import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../data/movie";
import { BASE_URL, options } from "../data/TMDB";

interface MovieResponse {
  results: Movie[];
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies(query = "") {
    setLoading(true);
    setError("");

    try {
      const trimmedQuery = query.trim();

      const endpoint = trimmedQuery
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(trimmedQuery)}`
        : `${BASE_URL}/movie/popular`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: MovieResponse = await response.json();

      const watchedMovies: Movie[] = JSON.parse(
        localStorage.getItem("watchedMovies") || "[]"
      );

      const updatedMovies = data.results.map((movie) => ({
        ...movie,
        watched: watchedMovies.some(
          (watchedMovie) => watchedMovie.id === movie.id
        ),
      }));

      setMovies(updatedMovies);
    } catch (err) {
      console.error("Failed to fetch movies", err);
      setError("Could not load movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  function markWatched(id: number) {
    setMovies((currentMovies) => {
      const updatedMovies = currentMovies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      );

      const watchedMovies = updatedMovies.filter(
        (movie) => movie.watched
      );

      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(watchedMovies)
      );

      return updatedMovies;
    });
  }

  return (
    <>
      {loading && (
        <p className="search-status">
          Loading movies...
        </p>
      )}

      {error && (
        <p className="search-status error">
          {error}
        </p>
      )}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            markWatched={markWatched}
          />
        ))}
      </div>
    </>
  );
}

export default MovieList;