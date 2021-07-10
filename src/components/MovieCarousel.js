import React from 'react'
import MovieCard from './MovieCard'

const MovieCorousel = ({ movies }) => {

	return (
		<div className="flex flex-nowrap overflow-x-auto mb-10 no-scrollbar">
			{ movies.map(movie => <MovieCard key={movie.id} movie={movie} />) }	
		</div>
	)
}

export default MovieCorousel
