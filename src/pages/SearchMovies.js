import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import PageHeading from "../components/PageHeading";

const SearchMovies = ({ movies }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const onSearchHandler = (event) => {
    if (event.target.value.length === 0) {
      setSearchedMovies([]);
    } else {
      const moviesHavingSearchTerm = movies.filter((movie) =>
        movie.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchedMovies(moviesHavingSearchTerm);
    }
  };

  return (
    <div>
      <PageHeading title="Search Movies" />
      <input
        type="text"
        className="w-full broder-2 text-center p-2 mb-5"
        placeholder="Search Your Movie..."
        onChange={(e) => onSearchHandler(e)}
      />
      <div className="flex flex-wrap justify-center">
        {searchedMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchMovies;