import { useRef } from "react";
import type { Movie } from "../data/movie";
import { IMAGE_BASE_URL } from "../data/TMDB";
import "./NowPlaying.css";

interface NowPlayingProps {
  movies: Movie[];
}

function NowPlaying({ movies }: NowPlayingProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    rowRef.current?.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    rowRef.current?.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  }

  if (movies.length === 0) {
    return <p>Loading now playing movies...</p>;
  }

  return (
    <section className="now-playing">

      <div className="section-header">
        <div>
          <h2>Now Playing</h2>
          <p>Fresh in theaters & just added</p>
        </div>

        <div className="scroll-buttons">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="movie-row" ref={rowRef}>
        {movies.map((movie) => (
          <div className="now-playing-card" key={movie.id}>

            {movie.poster_path && (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            )}

            <h3>{movie.title}</h3>

            <p>
              {movie.release_date?.slice(0, 4)}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default NowPlaying;