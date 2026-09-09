import React from "react";
import Navbar from "../components/Navbar";
import PopularSlider from "../components/PopularSlider";
import type { Movie } from "../data/movie";

interface HomeProps {
  movies: Movie[];
}

const Home: React.FC<HomeProps> = ({ movies }) => {
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
    </div>
  );
};

export default Home;