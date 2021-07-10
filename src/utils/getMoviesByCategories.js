export default function getMoviesByCategories(movies) {
	const moviesByCategory = {}

	movies.forEach(movie => {
		if(!(movie.classification in moviesByCategory)) 
			moviesByCategory[movie.classification] = []

		moviesByCategory[movie.classification].push(movie) 
	})

	return moviesByCategory
}