import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar />
    <Routes>
      <Route exact="true" path="/" element={<Home />} />
      <Route exact="true" path="actors" element={<Actors />} />
      <Route exact="true" path="directors" element={<Directors />} />
      <Route exact="true" path="movies" element={<Movies />} />

    </Routes>



  </div>;
}

export default App;
