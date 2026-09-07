import { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
  onFocus: () => void;
}

function SearchBar({ onSearch, onFocus }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onFocus={onFocus}
      />
    </form>
  );
}

export default SearchBar;