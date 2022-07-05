import React from "react";
import Movie from "./Movie";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map(movie => <Movie movie={movie} key={movie.title} />)

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>);
}

export default Movies;
