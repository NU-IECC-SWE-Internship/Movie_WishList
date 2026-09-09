import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import type { Movie } from "./data/movie";
import { BASE_URL, options } from "./data/TMDB";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular`,
          options
        );

        if (!response.ok) {
          throw new Error("Failed to load movies");
        }

        const data = await response.json();

        const mappedMovies: Movie[] = data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          runtime: 0,
          genres: [],
          vote_average: movie.vote_average,
          watched: false,
        }));

        setMovies(mappedMovies);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    }

    loadPopularMovies();
  }, []);

  return <Home movies={movies} />;
}

export default App;