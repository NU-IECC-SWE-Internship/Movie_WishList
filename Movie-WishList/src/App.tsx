import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import ShowList from "./components/ShowList";
import Profile from "./components/profile";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Routes>
          <Route path="/movies" element={<MovieList />} />
          <Route path="/shows" element={<ShowList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;