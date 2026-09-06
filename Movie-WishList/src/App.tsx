import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import moviesData from "./data/movie";

function App() {
  const [movies, setMovies] = useState(moviesData);

  function markWatched(id: number) {
    setMovies(
      movies.map(movie =>
        movie.id === id
          ? { ...movie, watched: true }
          : movie
      )
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Shows</h1>
      </header>

      <main>
        <MovieList
          movies={movies}
          markWatched={markWatched}
          
        />
      </main>
    </div>
  );
}

export default App;