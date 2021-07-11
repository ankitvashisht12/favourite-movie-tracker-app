import React from 'react'
import PropTypes from 'prop-types'

const CastAndDirector = ({ director, cast, released_on }) => {
	return (
		<>
			<hr />
			<div className="my-3 text-sm">
				<p>
				Director:{" "}
				{typeof director === "object"
					? director.join(", ")
					: director}
				</p>
				<p>
				Cast:{" "}
				{typeof cast === "object" ? cast.join(", ") : cast}
				</p>
				<p>Release Date: {Date(released_on)}</p>
			</div>
			<hr />
		</>
	)
}

CastAndDirector.propTypes = {
	director: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	]),
	cast: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	]),
	released_on: PropTypes.string
}

export default CastAndDirector
