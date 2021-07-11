import React, { useContext } from "react";
import PageHeading from "../components/PageHeading";
import { LikedMoviesContext } from "../context/MoviesContext";

const LikedMovies = () => {
  const { likedMovies } = useContext(LikedMoviesContext);

  return (
    <div className="mb-14">
      <PageHeading title="Favourite List" />
      { likedMovies.length > 0 ? likedMovies.map((likedMovie) => {
        return (
          <div className="flex border-2 mb-3">
            <div className="mr-5">
              <img src={likedMovie.poster} alt="movie poster" width="100px" />
            </div>
            <div className="flex flex-col ">
              <p className="font-semibold text-xl mb-2">{likedMovie.title}</p>
              <div className="flex">
                {likedMovie.genres.map((genre, index) => (
                  <p
                    key={index}
                    className="bg-green-200 rounded-lg mr-2 py-0.5 px-2 text-xs mb-5"
                  >
                    {genre}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      }) : 
      <div>
        <p>Your Favourite List is Empty. Like Movies to add them into your Favourite List.</p>
      </div>
    }
    </div>
  );
};

export default LikedMovies;
