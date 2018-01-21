export const API_KEY = "a822a507e1a399edde9a6f1652ffc60b";
export const TMDB_DEFAULT_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const TMDB_FILTER_BY_QUERY_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
export const TMDB_FILTER_BY_GENRE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`
export const TMDB_GENRES_LIST = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
export const TMDB_MOVIE_URL = `https://api.themoviedb.org/3/movie/`