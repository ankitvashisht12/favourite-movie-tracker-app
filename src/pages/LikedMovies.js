import React, { useContext } from "react";
import LikedMoviesList from "../components/LikedMoviesList";
import PageHeading from "../components/PageHeading";
import { LikedMoviesContext } from "../context/MoviesContext";

const LikedMovies = () => {
  const { likedMovies } = useContext(LikedMoviesContext);

  return (
    <div className="mb-14">
      <PageHeading title="Favourite List" />
      {likedMovies.length > 0 ? (
        <LikedMoviesList likedMovies={likedMovies} />
      ) : (
        <div>
          <p>
            Your Favourite List is Empty. Like Movies to add them into your
            Favourite List.
          </p>
        </div>
      )}
    </div>
  );
};

export default LikedMovies;
