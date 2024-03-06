//const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const baseUrl = 'https://api.themoviedb.org/3/trending/';


const opts = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDMzYjZiMmMxZDUyMTAyNjdjZGJiZTdjYjBiN2VjOCIsInN1YiI6IjY1ZTg2ZDRkZWE0MjYzMDE3YjIyOGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dQ2CPclsDiOIcYoGFY3UrUkeTB2_lCtYIuUQwU9VasM"
    },
};

export const getTrending = async (baseUrl) => {
   
    const response = await fetch(baseUrl + "all/day?language=en-US", opts);


    const data = await response.json();


    return data;
};

/** getTrendingMovies
 * 
 * @param baseUrl
 * 
 * @returns film di tendenza
 */

export const getTrendingMovies = async (baseUrl) => {
   
    const response = await fetch(baseUrl + "movie/day?language=en-US", opts);


    const data = await response.json();


    return data;
};
