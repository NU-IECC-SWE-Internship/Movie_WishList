import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import SearchBar from "./SearchBar";

import type { Show } from "../data/shows";
import { BASE_URL, options } from "../data/TMDB";

interface ShowResponse {
  results: Show[];
}

function ShowList() {
  const [shows, setShows] = useState<Show[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadShows();
  }, []);

  async function loadShows(query = "") {
    setLoading(true);
    setError("");

    try {
      const trimmedQuery = query.trim();

      const endpoint = trimmedQuery
        ? `${BASE_URL}/search/tv?query=${encodeURIComponent(trimmedQuery)}`
        : `${BASE_URL}/tv/popular`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: ShowResponse = await response.json();

      const watchedShows: Show[] = JSON.parse(
        localStorage.getItem("watchedShows") || "[]"
      );

      const updatedShows = data.results.map((show) => ({
        ...show,
        watched: watchedShows.some(
          (watchedShow) => watchedShow.id === show.id
        ),
      }));

      setShows(updatedShows);
    } catch (err) {
      console.error("Failed to fetch shows", err);
      setError("Could not load shows. Please try again.");
      setShows([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(search: string) {
    setSubmittedSearch(search);
    setIsSearching(false);

    loadShows(search);
  }

  function markWatched(id: number) {
    setShows((currentShows) => {
      const updatedShows = currentShows.map((show) =>
        show.id === id
          ? { ...show, watched: !show.watched }
          : show
      );

      const watchedShows = updatedShows.filter(
        (show) => show.watched
      );

      localStorage.setItem(
        "watchedShows",
        JSON.stringify(watchedShows)
      );

      return updatedShows;
    });
  }

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        onFocus={() => setIsSearching(true)}
      />

      {isSearching && (
        <p className="search-hint">
          Type a show title...
        </p>
      )}

      {submittedSearch && !isSearching && (
        <p className="search-status">
          Showing results for: {submittedSearch}
        </p>
      )}

      {loading && (
        <p className="search-status">
          Loading shows...
        </p>
      )}

      {error && (
        <p className="search-status error">
          {error}
        </p>
      )}

      <div className="movie-grid">
        {shows.map((show) => (
          <ShowCard
            key={show.id}
            show={show}
            markWatched={markWatched}
          />
        ))}
      </div>
    </>
  );
}

export default ShowList;