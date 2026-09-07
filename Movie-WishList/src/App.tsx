import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import moviesData from "./data/movie";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const [isSearching, setIsSearching] = useState(false);
  const [submittedSearch, setSubmittedSearch] = useState("");

  function markWatched(id: number) {
    setMovies(
      movies.map(movie =>
        movie.id === id
          ? { ...movie, watched: true }
          : movie
      )
    );
  }

  function handleSearch(search: string) {
    setSubmittedSearch(search);
    setIsSearching(false);
  }

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(submittedSearch.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Shows</h1>

        <SearchBar
          onSearch={handleSearch}
          onFocus={() => setIsSearching(true)}
        />
      </header>

      <main>
        {!isSearching && (
          <MovieList
            movies={submittedSearch ? filteredMovies : movies}
            markWatched={markWatched}
          />
        )}
      </main>
    </div>
  );
}

export default App;