import './App.css'
import MovieList from './components/MovieList';
import Movie from "./data/movie";



function App() {
  return (
    <div>
      <h1>My Shows</h1>

      <MovieList movies={Movie} />
    </div>
  );
}

export default App
