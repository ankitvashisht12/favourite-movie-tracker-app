import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movie/${movie.slug}`}>
			<div className="mr-5 w-52">
				<img src={movie.poster} alt="" />
				<p className="mt-2 text-lg font-semibold">{movie.title}</p>
				<p className="text-sm">{movie.imdb_rating}⭐</p>
			</div>
		</Link>
	)
}

export default MovieCard
