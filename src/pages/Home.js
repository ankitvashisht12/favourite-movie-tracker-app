import React from "react";
import MovieSection from "../components/MovieSection";
import PageHeading from "../components/PageHeading";
import getMoviesByCategories from "../utils/getMoviesByCategories";
import getUniqueCategories from "../utils/getUniqueCategories";
import { Link } from "react-router-dom";

const Home = ({ moviesData }) => {
  const moviesByCategory = getMoviesByCategories(moviesData.movies);
  const categories = getUniqueCategories(moviesData.movies);

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

export default Home;
