import React from 'react'
import Genres from './Genres'
import PropTypes from 'prop-types'

const MovieHighlights = ({ imdb_rating, classification, length, genres }) => {
	return (
		<>
			<div className="flex items-center mb-2 text-sm">
				<p className="mr-2">{imdb_rating}⭐</p>
				<div className="rounded bg-gray-800 w-1 h-1 mr-2" />
				<p className="mr-2">{classification}</p>
				<div className="rounded bg-gray-800 w-1 h-1 mr-2" />
				<p>{length}</p>
			</div>
			<div className="flex">
				<Genres genres={genres} />
			</div>
		</>
	)
}

MovieHighlights.propTypes = {
	imdb_rating: PropTypes.string.isRequired,
	classification: PropTypes.string.isRequired,
	length: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired
}

export default MovieHighlights
