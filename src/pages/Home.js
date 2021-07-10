import React, { useEffect, useState } from 'react'
import MovieSection from '../components/MovieSection'
import PageHeading from '../components/PageHeading'
import useFetchMoviesQuery from '../hooks/useFetchMoviesQuery'
import getMoviesByCategories from '../utils/getMoviesByCategories'
import getUniqueCategories from '../utils/getUniqueCategories'

const Home = () => {

	const [moviesByCategory, setMoviesByCategory] = useState({})
	const [categories, setCategories] = useState([])
	const { data: moviesData, status, isLoading, isError } = useFetchMoviesQuery()

	useEffect(() => {
		if(status === "success"){
			const categories = getUniqueCategories(moviesData.movies)
			const moviesByCategory = getMoviesByCategories(moviesData.movies)
			
			setMoviesByCategory(moviesByCategory)
			setCategories(categories)
		}
	}, [status, moviesData])

	return isLoading ? <p>Loading...</p>
		: isError ? <p>Please Try Again.</p> 
		: status === "success" ?
		<>
			<PageHeading title="Browse Movies" />
			{ categories.map( category => 
				<MovieSection key={category} category={category} movies={moviesByCategory[category]} />
			)}
		</> : null
}

export default Home
