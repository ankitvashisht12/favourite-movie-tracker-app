import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LikedMovies from './LikedMovies'
import Home from './Home'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const Main = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Switch>
					<Route path="/likes">
						<LikedMovies />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</QueryClientProvider>
	)
}

export default Main
