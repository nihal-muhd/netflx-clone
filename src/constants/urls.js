export const baseUrl = 'https://api.themoviedb.org/3'
export const API_KEY = process.env.REACT_APP_API_KEY
export const imageUrl = 'https://image.tmdb.org/t/p/original'

export const orginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`