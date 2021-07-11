import React from "react";
import PropTypes from "prop-types";

const Genres = ({ genres }) => {
  console.log("genres ", genres);
  return genres.map((genre, index) => {
    return (
      <p
        key={index}
        className="bg-green-200 rounded-lg mr-2 py-0.5 px-2 text-xs mb-5"
      >
        {genre}
      </p>
    );
  });
};

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default Genres;
