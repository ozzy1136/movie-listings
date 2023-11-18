// READ THE REQUESTS.md file for API route information and example of usage
// Use this file to make Http request using the fetch API

const MOVIE_API_KEY = "9d2acf4d7102536ac39921aa41b1a275";
const BASE_URL = "https://api.themoviedb.org/3/";

getTrendingMovies = `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;
getMovies = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
getMovieDetails = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
getSimilarMovies = `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;
