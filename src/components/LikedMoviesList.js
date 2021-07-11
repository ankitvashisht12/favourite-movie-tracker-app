import React from "react";
import PropTypes from "prop-types";
import Genres from "./Genres";

const LikedMoviesList = ({ likedMovies }) => {
  return likedMovies.map((likedMovie) => {
    return (
      <div key={likedMovie.id} className="flex border-2 mb-3">
        <div className="mr-5">
          <img src={likedMovie.poster} alt="movie poster" width="100px" />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold text-xl mb-2">{likedMovie.title}</p>
          <div className="flex">
            <Genres genres={likedMovie.genres} />
          </div>
        </div>
      </div>
    );
  });
};

LikedMoviesList.prototype = {
  likedMovies: PropTypes.array.isRequired,
};

export default LikedMoviesList;
