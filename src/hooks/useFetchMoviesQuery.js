import { useQuery } from "react-query";
import axios from "axios";

const fetchMovies = async () => {
  const url = "https://wookie.codesubmit.io";
  try {
    const { data: moviesData } = await axios.get(`${url}/movies`, {
      headers: { authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` },
    });

    return moviesData;
  } catch (err) {
    console.log("Error in fetchMovies : ", err.response.data.error);
  }
};

const useFetchMoviesQuery = () =>
  useQuery("movies", fetchMovies, {
    staleTime: 50000,
    refetchOnWindowFocus: false,
  });

export default useFetchMoviesQuery;
