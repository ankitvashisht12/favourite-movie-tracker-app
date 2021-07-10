export default function getMovie(moviesData, id){
	return moviesData.filter(movie => movie.id === id)
}