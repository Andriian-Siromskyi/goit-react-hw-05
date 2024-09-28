import axios from "axios";

export async function getTrendingMovie() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdmYTk2MGU3Nzk4YjU4NDFiMzkzZTBmM2Q2NTdlZSIsIm5iZiI6MTcyNzU0ODY4NS4zMDAzOTUsInN1YiI6IjY2ZjU4M2MwZTE0YTNjOGU2MjczZmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.irTEJrEJcvEh1ORhb9soo0B4VF-6MZl703nEpCcz4Hc",
      },
    }
  );
  return response.data;
}

export function searchMovie(query) {
  return axios.get("https://api.themoviedb.org/3/search/movie", {
    params: { language: "en-US", query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdmYTk2MGU3Nzk4YjU4NDFiMzkzZTBmM2Q2NTdlZSIsIm5iZiI6MTcyNzU0ODY4NS4zMDAzOTUsInN1YiI6IjY2ZjU4M2MwZTE0YTNjOGU2MjczZmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.irTEJrEJcvEh1ORhb9soo0B4VF-6MZl703nEpCcz4Hc",
    },
  });
}

export async function getMovieDetail(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdmYTk2MGU3Nzk4YjU4NDFiMzkzZTBmM2Q2NTdlZSIsIm5iZiI6MTcyNzU0ODY4NS4zMDAzOTUsInN1YiI6IjY2ZjU4M2MwZTE0YTNjOGU2MjczZmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.irTEJrEJcvEh1ORhb9soo0B4VF-6MZl703nEpCcz4Hc",
      },
    }
  );
  return response.data;
}

export async function getMovieCast(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdmYTk2MGU3Nzk4YjU4NDFiMzkzZTBmM2Q2NTdlZSIsIm5iZiI6MTcyNzU0ODY4NS4zMDAzOTUsInN1YiI6IjY2ZjU4M2MwZTE0YTNjOGU2MjczZmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.irTEJrEJcvEh1ORhb9soo0B4VF-6MZl703nEpCcz4Hc",
      },
    }
  );
}

export async function getReviews(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdmYTk2MGU3Nzk4YjU4NDFiMzkzZTBmM2Q2NTdlZSIsIm5iZiI6MTcyNzU0ODY4NS4zMDAzOTUsInN1YiI6IjY2ZjU4M2MwZTE0YTNjOGU2MjczZmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.irTEJrEJcvEh1ORhb9soo0B4VF-6MZl703nEpCcz4Hc",
      },
    }
  );
}
