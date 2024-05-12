
import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value); // Pass search query to the parent component
  };

  return (
    <div className="SearchFunction">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
