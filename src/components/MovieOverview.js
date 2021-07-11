import React from 'react'
import PropTypes from 'prop-types'

const MovieOverview = ({ overview }) => {
	return (
      <div className="mt-5">
        <p>{overview}</p>
      </div>
	)
}

MovieOverview.propTypes = {
	overview: PropTypes.string.isRequired
}

export default MovieOverview
