import React, { useContext } from 'react'
import PageHeading from '../components/PageHeading'
import { LikedMoviesContext } from '../context/MoviesContext'

const LikedMovies = () => {

	const { likedMovies } = useContext(LikedMoviesContext)

	return (
		<div>
			<PageHeading title="Favourite List"/>	
			{ likedMovies.map( likedMovie => {
				return (
					<div>
						<p>{likedMovie.title}</p>
					</div>
				)
			})}
		</div>
	)
}

export default LikedMovies
