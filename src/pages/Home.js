import React from "react";
import MovieSection from "../components/MovieSection";
import PageHeading from "../components/PageHeading";
import getMoviesByCategories from "../utils/getMoviesByCategories";
import getUniqueCategories from "../utils/getUniqueCategories";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Home = ({ movies }) => {
  const moviesByCategory = getMoviesByCategories(movies);
  const categories = getUniqueCategories(movies);

  return (
    <>
      <PageHeading title="Browse Movies" />
      <Link to="/search">
        <div className="text-center border-2 mb-3 text-gray-500">
          <p className="p-2">🔍 Search Movie</p>
        </div>
      </Link>
      {categories.map((category) => (
        <MovieSection
          key={category}
          category={category}
          movies={moviesByCategory[category]}
        />
      ))}
    </>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired
}

export default Home;
