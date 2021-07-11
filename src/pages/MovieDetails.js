import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { LikedMoviesContext } from "../context/MoviesContext";
import getMovie from "../utils/getMovie";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import PropTypes from 'prop-types';

const MovieDetails = ({ movies }) => {
  const { slug } = useParams();
  const movie = getMovie(movies, slug)[0];
  const { likedMovies, setLikedMovies } = useContext(LikedMoviesContext);
  const [isLiked, setIsLiked] = useState(
    likedMovies.find((likeMovie) => likeMovie.id === movie.id)
  );

  const onLikeHanlder = () => {
    setLikedMovies((movies) => {
      if (!isLiked) return [...movies, movie];
      else {
        const newLikedMovies = likedMovies.filter(
          (likeMovie) => likeMovie.id !== movie.id
        );
        return newLikedMovies;
      }
    });
    setIsLiked((likeValue) => !likeValue);
  };

  return (
    <div className="mb-14">
      <img
        className="object-cover md:h-96 w-full"
        src={movie.backdrop}
        alt="movie backdrop"
      />
      <div className="flex justify-between">
        <h1 className="my-2 text-xl font-semibold">{movie.title}</h1>
        <button className="p-2" onClick={onLikeHanlder}>
          {" "}
          {isLiked ? <FaHeart size="1.3rem" /> : <FaRegHeart size="1.3rem" />}
        </button>
      </div>
      <div className="flex items-center mb-2 text-sm">
        <p className="mr-2">{movie.imdb_rating}⭐</p>
        <div className="rounded bg-gray-800 w-1 h-1 mr-2" />
        <p className="mr-2">{movie.classification}</p>
        <div className="rounded bg-gray-800 w-1 h-1 mr-2" />
        <p>{movie.length}</p>
      </div>
      <div className="flex">
        {movie.genres.map((genre, index) => (
          <p
            key={index}
            className="bg-green-200 rounded-lg mr-2 py-0.5 px-2 text-xs mb-5"
          >
            {genre}
          </p>
        ))}
      </div>
      <hr />
      <div className="my-3 text-sm">
        <p>
          Director:{" "}
          {typeof movie.director === "object"
            ? movie.director.join(", ")
            : movie.director}
        </p>
        <p>
          Cast:{" "}
          {typeof movie.cast === "object" ? movie.cast.join(", ") : movie.cast}
        </p>
        <p>Release Date: {Date(movie.released_on)}</p>
      </div>
      <hr />
      <div className="mt-5">
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieDetails;
