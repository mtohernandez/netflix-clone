import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMovieDetails, useTVDetails } from '@/hooks/useMovies';
import { img } from '@/api/tmdb';
import TrailerPlayer from './TrailerPlayer';
import Button from '@/components/ui/Button';
import { PlayIcon } from '@/icons';

const MovieModal = ({ movie, onClose }) => {
  const isTV = movie.media_type === 'tv' || !!movie.first_air_date;

  const movieQuery = useMovieDetails(!isTV ? movie.id : null);
  const tvQuery = useTVDetails(isTV ? movie.id : null);
  const { data: details } = isTV ? tvQuery : movieQuery;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const trailerKey = details?.videos?.results?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  )?.key || details?.videos?.results?.[0]?.key;

  const cast = details?.credits?.cast?.slice(0, 12) || [];
  const similar = details?.similar?.results?.slice(0, 9) || [];
  const genres = details?.genres?.map((g) => g.name).join(', ') || '';
  const rating = details?.vote_average ? `${Math.round(details.vote_average * 10)}%` : '';
  const year = (details?.release_date || details?.first_air_date || '').slice(0, 4);
  const runtime = details?.runtime ? `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m` : '';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm pt-8 pb-16 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-netflix-dark rounded-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-netflix-dark/80 flex items-center justify-center text-white hover:bg-netflix-gray transition-colors text-xl"
          >
            ✕
          </button>

          {/* Trailer or backdrop */}
          <div className="relative w-full aspect-video bg-netflix-black">
            {trailerKey ? (
              <TrailerPlayer
                videoKey={trailerKey}
                playing
                muted
                className="w-full h-full"
              />
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img.backdrop(movie.backdrop_path)})` }}
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-netflix-dark to-transparent" />
            <div className="absolute bottom-6 left-8 flex items-center gap-3">
              <Button variant="play" size="lg">
                <PlayIcon /> Play
              </Button>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              {details?.title || details?.name || movie.title || movie.name}
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                  {rating && <span className="text-green-400 font-semibold">{rating} Match</span>}
                  {year && <span className="text-gray-400">{year}</span>}
                  {runtime && <span className="text-gray-400">{runtime}</span>}
                  <span className="border border-gray-500 px-1.5 py-0.5 text-xs text-gray-400 rounded">HD</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {details?.overview || movie.overview}
                </p>
              </div>
              <div className="md:w-64 text-sm space-y-2">
                {cast.length > 0 && (
                  <p className="text-gray-400">
                    <span className="text-gray-500">Cast: </span>
                    {cast.slice(0, 4).map((c) => c.name).join(', ')}
                    {cast.length > 4 && ', more...'}
                  </p>
                )}
                {genres && (
                  <p className="text-gray-400">
                    <span className="text-gray-500">Genres: </span>{genres}
                  </p>
                )}
              </div>
            </div>

            {/* Cast */}
            {cast.length > 0 && (
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4">Cast</h3>
                <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                  {cast.map((person) => (
                    <div key={person.id} className="flex-shrink-0 w-20 text-center">
                      {person.profile_path ? (
                        <img
                          src={img.profile(person.profile_path)}
                          alt={person.name}
                          className="w-16 h-16 rounded-full object-cover mx-auto mb-1"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-netflix-gray mx-auto mb-1 flex items-center justify-center text-gray-500 text-xs">
                          N/A
                        </div>
                      )}
                      <p className="text-xs text-gray-300 truncate">{person.name}</p>
                      <p className="text-xs text-gray-500 truncate">{person.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Similar */}
            {similar.length > 0 && (
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4">More Like This</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {similar.map((item) => (
                    <div key={item.id} className="bg-netflix-gray rounded-md overflow-hidden hover:ring-1 hover:ring-white/20 transition-all">
                      {item.backdrop_path ? (
                        <div
                          className="w-full aspect-video bg-cover bg-center"
                          style={{ backgroundImage: `url(${img.backdrop(item.backdrop_path, 'w500')})` }}
                        />
                      ) : (
                        <div className="w-full aspect-video bg-netflix-black flex items-center justify-center text-gray-600 text-sm">
                          No Image
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-white text-sm font-medium truncate">{item.title || item.name}</p>
                        <p className="text-gray-400 text-xs mt-1 line-clamp-3">{item.overview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieModal;
