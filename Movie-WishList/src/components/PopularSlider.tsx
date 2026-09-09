import { useState } from "react";
import type { Movie } from "../data/movie";
import { IMAGE_BASE_URL } from "../data/TMDB";
import "./PopularSlider.css";

interface PopularSliderProps {
  movies: Movie[];
}

function PopularSlider({ movies }: PopularSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (movies.length === 0) {
    return <p>Loading popular movies...</p>;
  }

  function nextMovie() {
    setCurrentIndex((currentIndex + 1) % movies.length);
  }

  function previousMovie() {
    setCurrentIndex(
      (currentIndex - 1 + movies.length) % movies.length
    );
  }

  const movie = movies[currentIndex];

  return (
    <section className="popular-slider">

      <h2>Popular Movies</h2>

      <div className="slider-content">

        <button
          className="slider-button"
          onClick={previousMovie}
        >
          ❮
        </button>

        <div className="featured-movie">

          {movie.poster_path && (
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          )}

          <div className="movie-info">
            <h1>{movie.title}</h1>

            <p>{movie.overview}</p>

            <span>
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
          </div>

        </div>

        <button
          className="slider-button"
          onClick={nextMovie}
        >
          ❯
        </button>

      </div>

    </section>
  );
}

export default PopularSlider;