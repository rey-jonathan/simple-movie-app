import React from "react";

const SearchBar = ({ searchTerm, inputHandler }) => {
  const onChangeHandler = (e) => {
    e.preventDefault();

    inputHandler(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", margin: "15px auto" }}>
      <input
        style={{
          width: "250px",
          textAlign: "center",
          borderRadius: "15px",
          height: "30px",
        }}
        type="text"
        value={searchTerm}
        onChange={onChangeHandler}
        placeholder='Try "Avenger"'
      ></input>
    </div>
  );
};

export default SearchBar;
