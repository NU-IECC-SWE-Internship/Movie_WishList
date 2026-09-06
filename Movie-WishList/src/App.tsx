import "./App.css";
import MovieList from "./components/MovieList";
import Movie from "./data/movie";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>My Shows</h1>
      </header>
      <main>
        <MovieList movies={Movie} />
      </main>
    </div>
  );
}

export default App;