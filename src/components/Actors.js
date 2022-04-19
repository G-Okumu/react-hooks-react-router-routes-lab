import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Movies Page</h1>


    {actors.map((actor, aindex) => (
      <div key={aindex}>
        <p>Name:<strong>{actor.name}</strong></p>

        <ul>
          {
            actor.movies.map((actorMovie, aindex2) => (
              <li key={aindex2}>{actorMovie}</li>
            ))
          }
        </ul>
      </div>
    ))}


  </div>;
}

export default Actors;
