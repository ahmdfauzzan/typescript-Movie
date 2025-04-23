import Navbar from "@/components/navbar";
import { useMoviePlaying } from "@/services/MoviePlaying";
import CardMovie from "@/components/CardMovie";

const HomePage = () => {
  const { data, isLoading, error } = useMoviePlaying();

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Now Playing Movies
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.results.map((movie) => (
          <CardMovie
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
