import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { LikedMoviesContext } from '../context/MoviesContext'
import getMovie from '../utils/getMovie'

const MovieDetails = ({ moviesData }) => {

	const { id } =  useParams()
	const movie = getMovie(moviesData, id)[0]
	const { setLikedMovies } = useContext(LikedMoviesContext)

	return (
		<div>
			<button onClick={() => setLikedMovies(movies => [...movies, movie])}>Like</button>
			<h1>{movie.title}</h1>
			<img src={movie.backdrop} alt="movie backdrop" />
		</div>
	)
}

export default MovieDetails
