import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MovieList from "./components/MovieList";
import MyMovie from "./components/MyMovie";

function App() {
  return (
    <Router>
      <div>
        <label>
          <Link to='/'>Movie List</Link>
        </label>
        <label>
          <Link to='/my-movie'>My Movie</Link>
        </label>
      </div>

      <Routes>
        <Route exact path='/' element={<MovieList />} />
        <Route path='my-movie' element={<MyMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
