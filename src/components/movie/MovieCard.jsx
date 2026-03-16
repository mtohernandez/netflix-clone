import { useState } from 'react';
import { motion } from 'framer-motion';
import { img } from '@/api/tmdb';

const MovieCard = ({ movie, isLargeRow = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const posterUrl = isLargeRow
    ? img.poster(movie.poster_path)
    : img.backdrop(movie.backdrop_path, 'w780') || img.poster(movie.poster_path);

  if (!posterUrl) return null;

  return (
    <motion.div
      className="relative flex-shrink-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick?.(movie)}
      whileHover={{ scale: 1.08, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={posterUrl}
        alt={movie.title || movie.name}
        className={`rounded-md object-cover transition-shadow duration-300 ${
          isLargeRow ? 'h-[250px] w-[170px]' : 'h-[160px] w-[280px]'
        } ${isHovered ? 'shadow-2xl shadow-black/50 ring-1 ring-white/20' : ''}`}
        loading="lazy"
      />
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent rounded-b-md"
        >
          <p className="text-white text-xs font-medium truncate">
            {movie.title || movie.name}
          </p>
          {movie.vote_average > 0 && (
            <p className="text-green-400 text-xs">
              {Math.round(movie.vote_average * 10)}% Match
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default MovieCard;
