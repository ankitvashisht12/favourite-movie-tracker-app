import React from "react";
import { Switch, Route } from "react-router-dom";
import LikedMovies from "./LikedMovies";
import MovieDetails from "./MovieDetails";
import Home from "./Home";
import useFetchMoviesQuery from "../hooks/useFetchMoviesQuery";
import SearchMovies from "./SearchMovies";

const Main = () => {
  const {
    data: moviesData,
    status,
    isLoading,
    isError,
  } = useFetchMoviesQuery();

  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>Please Try Again.</p>
  ) : status === "success" ? (
    <Switch>
      <Route path="/likes">
        <LikedMovies />
      </Route>
      <Route path="/movie/:slug">
        <MovieDetails movies={moviesData.movies} />
      </Route>
      <Route path="/search">
        <SearchMovies movies={moviesData.movies} />
      </Route>
      <Route path="/">
        <Home movies={moviesData.movies} />
      </Route>
    </Switch>
  ) : null;
};

export default Main;
