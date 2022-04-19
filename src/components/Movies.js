import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>

      <h1>Movies Page</h1>

      <div>

        {movies.map((movie, index) => (
          <div key={index}>
            <p>Title:<strong>{movie.title}</strong> | Time:<em>{movie.time}</em></p>

            <ul>
              {
                movie.genres.map((genre, index2) => (
                  <li key={index2}>{genre}</li>
                ))
              }
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Movies;
