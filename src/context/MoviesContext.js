import React, { createContext, useState } from "react";

export const LikedMoviesContext = createContext({});

const LikedMoviesContextProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);

  return (
    <LikedMoviesContext.Provider value={{ likedMovies, setLikedMovies }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};

export default LikedMoviesContextProvider;
