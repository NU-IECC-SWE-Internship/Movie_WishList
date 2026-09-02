import './App.css'
import ShowList from "./components/MovieList";
import Movie from "./data/movie";



function App() {
  return (
    <div>
      <h1>My Shows</h1>

      <ShowList movies={Movie} />
    </div>
  );
}

export default App
