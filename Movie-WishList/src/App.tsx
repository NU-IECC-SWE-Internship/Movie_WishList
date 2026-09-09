import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import type { Movie } from "./data/movie";
import { BASE_URL, options } from "./data/TMDB";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    void loadMovies();
  }, []);

  async function loadMovies(query = "") {
    const trimmedQuery = query.trim();
    setLoading(true);
    setError("");

    try {
      const endpoint = trimmedQuery
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(trimmedQuery)}`
        : `${BASE_URL}/movie/popular`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = (await response.json()) as {
        results?: Array<{
          id: number;
          title: string;
          overview: string;
          poster_path: string | null;
          release_date: string | null;
          genre_ids?: number[];
          vote_average: number;
        }>;
      };

      const mappedMovies: Movie[] = (data.results ?? []).map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        runtime: 0,
        genres: (movie.genre_ids ?? []).map((genreId) => ({
          id: genreId,
          name: "Unknown",
        })),
        vote_average: movie.vote_average,
        watched: false,
      }));

      setMovies(mappedMovies);
    } catch (err) {
      console.error("Failed to fetch movies", err);
      setError("Could not load movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(search: string) {
    setSubmittedSearch(search);
    setIsSearching(false);
    void loadMovies(search);
  }

  function markWatched(id: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Shows</h1>

        <SearchBar
          onSearch={handleSearch}
          onFocus={() => setIsSearching(true)}
        />
      </header>

      {isSearching && <p className="search-hint">Type a title or keyword...</p>}
      {submittedSearch && !isSearching && (
        <p className="search-status">Showing results for: {submittedSearch}</p>
      )}
      {loading && <p className="search-status">Loading movies...</p>}
      {error && <p className="search-status error">{error}</p>}

      <MovieList movies={movies} markWatched={markWatched} />
    </div>
  );
}

export default App;