import React from "react";

import { debounce } from "../tools";

const SearchBar = ({ searchTerm, inputHandler }) => {
  return (
    <div>
      <label>Search:</label>
      <input
        value={searchTerm}
        onChange={(event) => inputHandler(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
