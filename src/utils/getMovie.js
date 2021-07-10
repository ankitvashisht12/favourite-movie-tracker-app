export default function getMovie(moviesData, slug){
	return moviesData.filter(movie => movie.slug === slug)
}