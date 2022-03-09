import React from "react";

import styled from "@emotion/styled";

const SearchBar = ({ searchTerm, inputHandler }) => {
  const Container = styled.div`
    padding: auto;
    margin: 15px auto;
    text-align: center;
  `;

  const Searchbar = styled.input`
    width: 250px;
    text-align: center;
    border-radius: 15px;
    height: 30px;
  `;

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
        type='text'
        value={searchTerm}
        onChange={onChangeHandler}
        placeholder='Try "Avenger"'
      ></input>
    </div>
  );
};

export default SearchBar;
