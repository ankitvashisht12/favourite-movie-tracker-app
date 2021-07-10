import React from 'react'
import MovieCorousel from './MovieCorousel'

const MovieSection = ({ category, movies}) => {
	return (
		<section>
			<h2>{category} Movies</h2>	
			<MovieCorousel movies={movies} />
		</section>
	)
}

export default MovieSection
