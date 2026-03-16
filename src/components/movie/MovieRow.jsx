import { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import SkeletonRow from '@/components/ui/SkeletonRow';

const MovieRow = ({ title, movies, isLoading, isLargeRow = false, onMovieClick }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  if (isLoading) return <SkeletonRow />;
  if (!movies?.length) return null;

  const scroll = (direction) => {
    if (!rowRef.current) return;
    const scrollAmount = rowRef.current.clientWidth * 0.8;
    rowRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);
  };

  return (
    <div className="relative px-4 md:px-12 my-6 group">
      <h2 className="text-lg md:text-xl font-bold text-white mb-2 hover:text-gray-300 cursor-pointer transition-colors inline-flex items-center gap-2">
        {title}
        <span className="text-sm text-netflix-red opacity-0 group-hover:opacity-100 transition-opacity">
          Explore All ›
        </span>
      </h2>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-r-md"
          >
            ‹
          </button>
        )}

        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-auto py-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isLargeRow={isLargeRow}
              onClick={onMovieClick}
            />
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-l-md"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
