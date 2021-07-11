import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { LikedMoviesContext } from "../context/MoviesContext";
import getMovie from "../utils/getMovie";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import PropTypes from 'prop-types';
import MovieHighlights from "../components/MovieHighlights";
import CastAndDirector from "../components/CastAndDirector";
import MovieOverview from "../components/MovieOverview";

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
      <MovieHighlights imdb_rating={movie.imdb_rating} classification={movie.classification} length={movie.length} genres={movie.genres} />
      <CastAndDirector director={movie.director} cast={movie.cast} released_on={movie.released_on} />
      <MovieOverview overview={movie.overview} />
    </div>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieDetails;
