//sample movie object inside the array
//    {
//     "adult": false,
//     "backdrop_path": "/xzwNTmJzCxn4gBpAsV9o2Krkx0C.jpg",
//     "genre_ids": [
//         28,
//         53
//     ],
//     "id": 1215938,
//     "original_language": "hi",
//     "original_title": "Crakk: Jeetega... Toh Jiyegaa",
//     "overview": "",
//     "popularity": 6.354,
//     "poster_path": "/rQs5OpTLLXPp0iyIPuI0RqvnNnZ.jpg",
//     "release_date": "2024-02-23",
//     "title": "Crakk: Jeetega... Toh Jiyegaa",
//     "video": false,
//     "vote_average": 0.0,
//     "vote_count": 0
// }import axios from "axios";
//search for upcoming movies
export const searchUpcomingMovies = async (pages) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?language=hi-IN&page=${pages}&region=IN`,
    {
      headers: { Authorization: import.meta.env.VITE_TMDB_TOKEN },
    }
  );
  //returns the array of movies
  return response.data.results;
};
//search a movie name, expects a movie title as input
export const searchMovie = async (title) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=hi-IN&page=1&region=IN`,
    {
      headers: { Authorization: import.meta.env.VITE_TMDB_TOKEN },
    }
  );
  //returns the array of objects matching the query
  return response.data.results;
};
//function for generating 1 month old date
function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth().toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
//function for displaying movies that released one month ago the current date
export const discoverMovies = async (pages) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?certification_country=IN&include_adult=false&include_video=false&language=hi-IN&page=${pages}&primary_release_date.gte=${getFormattedDate}&region=IN&with_origin_country=IN`,
    {
      headers: { Authorization: import.meta.env.VITE_TMDB_TOKEN },
    }
  );
  return response.data.results;
};
