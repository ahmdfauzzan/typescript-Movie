import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "@/endpoint/API-ENDPOINT";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTdiNmMzNmI3MjM0MWI5OTIwNDU1ODYzNzZlOGRkYyIsIm5iZiI6MTY5NTkwMTAwMi44MjIsInN1YiI6IjY1MTU2NTRhMDQ5OWYyMDBhYmJkN2ExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IWkWXHN5yTrv9ooUcJzMp0chHXtUyEGxfcQtbcqu3c4";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MovieResponse {
  results: Movie[];
}

export const MoviePlaying = async (): Promise<MovieResponse> => {
  const response = await axios.get(API_ENDPOINT.MOVIE_NOW_PLAYING, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const useMoviePlaying = () => {
  return useQuery<MovieResponse>({
    queryKey: ["movieNowPlaying"],
    queryFn: MoviePlaying,
  });
};
