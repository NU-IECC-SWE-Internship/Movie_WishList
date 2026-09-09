import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import type { Movie } from "./data/movie";
import { BASE_URL, options } from "./data/TMDB";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular`,
          options
        );

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
        console.error("Error loading popular movies:", error);
      }
    }

    async function loadNowPlayingMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/now_playing`,
          options
        );

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

        setNowPlayingMovies(mappedMovies);
      } catch (error) {
        console.error("Error loading now playing movies:", error);
      }
    }

    async function loadUpcomingMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/upcoming`,
          options
        );

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

        setUpcomingMovies(mappedMovies);
      } catch (error) {
        console.error("Error loading upcoming movies:", error);
      }
    }

    void loadPopularMovies();
    void loadNowPlayingMovies();
    void loadUpcomingMovies();
  }, []);

  return (
    <Home
      movies={movies}
      nowPlayingMovies={nowPlayingMovies}
      upcomingMovies={upcomingMovies}
    />
  );
}

export default App;