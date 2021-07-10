import React from 'react'
import MovieCard from './MovieCard'

const MovieCorousel = ({ movies }) => {
	
	return (
		<div className="flex flex-nowrap">
			{ movies.map(movie => <MovieCard key={movie.id} movie={movie} />) }	
		</div>
	)
}

export default MovieCorousel
