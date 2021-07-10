import React from 'react'

const MovieCard = ({ movie }) => {
	return (
		<div className="mr-5 w-52">
			<img src={movie.poster} alt="" />
			<p className="mt-2 text-lg font-semibold">{movie.title}</p>
			<p className="text-sm">IMDB Ratings {movie.imdb_rating}⭐</p>
		</div>
	)
}

export default MovieCard
