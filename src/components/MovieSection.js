import React from 'react'
import MovieCarousel from './MovieCarousel'

const MovieSection = ({ category, movies}) => {
	return (
		<section>
			<h2 className="text-sm my-3 font-medium border-2 px-2">{category} Movies &rarr;</h2>	
			<MovieCarousel movies={movies} />
		</section>
	)
}

export default MovieSection
