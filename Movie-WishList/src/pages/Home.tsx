import { useEffect, useState } from "react";
import PopularSlider from "../components/PopularSlider";
import NowPlaying from "../components/NowPlaying";
import Upcoming from "../components/Upcoming";
import type { Movie } from "../data/movie";
import { BASE_URL, options } from "../data/TMDB";

interface MovieResponse {
  results: Movie[];
}

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const popularResponse = await fetch(
          `${BASE_URL}/movie/popular`,
          options
        );

        const nowPlayingResponse = await fetch(
          `${BASE_URL}/movie/now_playing`,
          options
        );

        const upcomingResponse = await fetch(
          `${BASE_URL}/movie/upcoming`,
          options
        );

        const popularData: MovieResponse = await popularResponse.json();
        const nowPlayingData: MovieResponse =
          await nowPlayingResponse.json();
        const upcomingData: MovieResponse =
          await upcomingResponse.json();

        setMovies(popularData.results);
        setNowPlayingMovies(nowPlayingData.results);
        setUpcomingMovies(upcomingData.results);
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    }

    loadMovies();
  }, []);

  return (
    <div>
      <PopularSlider movies={movies} />

      <NowPlaying movies={nowPlayingMovies} />

      <Upcoming movies={upcomingMovies} />
    </div>
  );
}

export default Home;