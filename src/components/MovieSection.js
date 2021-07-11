import React from "react";
import MovieCarousel from "./MovieCarousel";
import PropTypes from "prop-types";

const MovieSection = ({ category, movies }) => {
  return (
    <section>
      <h2 className="text-sm my-3 font-medium border-2 px-2">
        {category} Movies &rarr;
      </h2>
      <MovieCarousel movies={movies} />
    </section>
  );
};

MovieSection.propTypes = {
  category: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieSection;
