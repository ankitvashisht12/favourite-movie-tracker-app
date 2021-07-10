import React  from 'react'
import MovieSection from '../components/MovieSection'
import PageHeading from '../components/PageHeading'
import getMoviesByCategories from '../utils/getMoviesByCategories'
import getUniqueCategories from '../utils/getUniqueCategories'

const Home = ({ moviesData }) => {

	const moviesByCategory = getMoviesByCategories(moviesData.movies)
	const categories = getUniqueCategories(moviesData.movies)

	return (
		<>
			<PageHeading title="Browse Movies" />
			{ categories.map( category => 
				<MovieSection key={category} category={category} movies={moviesByCategory[category]} />
			)}
		</> 
	)
}

export default Home
