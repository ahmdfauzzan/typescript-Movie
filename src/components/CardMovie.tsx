import React from "react";

type CardMovieProps = {
  title: string;
  poster_path: string;
  overview: string;
};

const CardMovie: React.FC<CardMovieProps> = ({
  title,
  poster_path,
  overview,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden w-full sm:w-64 hover:scale-[1.02] transition-all">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default CardMovie;
