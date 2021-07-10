import React from 'react'

const PageHeading = ({ title }) => {
	return (
		<div className="my-5">
			<h1 className="font-semibold">{title}</h1>
			<div className="w-12 h-1 bg-green-500" />
		</div>
	)
}

export default PageHeading
