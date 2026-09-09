import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import ShowList from "./pages/ShowList";
import Profile from "./pages/Profile";

const navLinks = [
  { text: "Home", url: "/" },
  { text: "Movies", url: "/movies" },
  { text: "Series", url: "/shows" },
  { text: "Profile", url: "/profile" },
  { text: "Search", url: "/search" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar links={navLinks} />

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/shows" element={<ShowList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;