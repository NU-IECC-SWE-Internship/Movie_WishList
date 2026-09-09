import "./App.css";
import MovieList from "./components/MovieList";
import ShowList from "./components/ShowList";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>My Shows</h1>
      </header>

      {/* <MovieList /> */}
      <ShowList />
    </div>
  );
}

export default App;