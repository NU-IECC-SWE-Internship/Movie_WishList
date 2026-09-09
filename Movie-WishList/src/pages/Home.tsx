import React from "react";
import Navbar from "../components/Navbar";
import PopularSlider from "../components/PopularSlider";
import NowPlaying from "../components/NowPlaying";
import Upcoming from "../components/Upcoming";
import type { Movie } from "../data/movie";

interface HomeProps {
  movies: Movie[];
  nowPlayingMovies: Movie[];
  upcomingMovies: Movie[];
}

const Home: React.FC<HomeProps> = ({
  movies,
  nowPlayingMovies,
  upcomingMovies,
}) => {
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Movies", url: "/movies" },
    { text: "Series", url: "/series" },
    { text: "Profile", url: "/profile" },
    { text: "Search", url: "/search" },
  ];

  return (
    <div>
      <Navbar links={navLinks} />

      <PopularSlider movies={movies} />

      <NowPlaying movies={nowPlayingMovies} />

      <Upcoming movies={upcomingMovies} />
    </div>
  );
};

export default Home;