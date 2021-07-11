import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import PageHeading from "../components/PageHeading";
import PropTypes from "prop-types";

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
    <div className="mb-14">
      <PageHeading title="Search Movies" />
      <div className="border-2 mb-5">
        <input
          type="text"
          className="w-full broder-2 text-center p-2"
          placeholder="Search Your Movie..."
          onChange={(e) => onSearchHandler(e)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {searchedMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

SearchMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default SearchMovies;
