import React from 'react'
import {  Switch, Route } from 'react-router-dom'
import LikedMovies from './LikedMovies'
import MovieDetails from './MovieDetails'
import Home from './Home'
import useFetchMoviesQuery from '../hooks/useFetchMoviesQuery'


const Main = () => {
	const { data: moviesData, status, isLoading, isError } = useFetchMoviesQuery()

	return isLoading ? <p>Loading...</p>
		: isError ? <p>Please Try Again.</p> 
		: status === "success" ?
				<Switch>
					<Route path="/likes">
							<LikedMovies />
					</Route>
					<Route path="/movie/:id" >
							<MovieDetails moviesData={moviesData.movies}/>
					</Route>
					<Route path="/">
						<Home moviesData={moviesData} />
					</Route>
				</Switch>
		 : null
}

export default Main
