export const TMDB_CONFIG = {
	baseUrl: 'https://api.themoviedb.org/3',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
	},
}

export const fetchMovies = async ({ query }: { query: string }) => {
	const endpoint = query
		? `${TMDB_CONFIG.baseUrl}/search/movie?query=${encodeURIComponent(query)}`
		: `${TMDB_CONFIG.baseUrl}/discover/movie?sort_by=popularity.desc`

	const response = await fetch(endpoint, {
		method: 'GET',
		headers: TMDB_CONFIG.headers,
	})

	if (!response.ok) {
		throw new Error(`Failed to fetch movies: ${response.statusText}`)
	}

	const data = await response.json()

	return data.results
}

// /discover/movie
