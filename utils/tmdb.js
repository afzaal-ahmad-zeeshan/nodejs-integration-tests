// Set the variables
const TMDB_API = process.env.TMDB_API;

// Create the middleware
let tmdb = {
    getPopularMovies: async () => {
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API}&language=en-US&page=1`);
        let _json = await response.json();
        return _json;
    }
};

module.exports = tmdb;
