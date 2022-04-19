import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>


    {directors.map((director, dindex) => (
      <div key={dindex}>
        <p>Name:<strong>{director.name}</strong></p>

        <ul>
          {
            director.movies.map((directorMovie, dindex2) => (
              <li key={dindex2}>{directorMovie}</li>
            ))
          }
        </ul>
      </div>
    ))}


  </div>;
}

export default Directors;
