import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { img } from '@/api/tmdb';
import { useMovieImages, useMovieVideos } from '@/hooks/useMovies';
import TrailerPlayer from './TrailerPlayer';
import Button from '@/components/ui/Button';
import SkeletonBanner from '@/components/ui/SkeletonBanner';
import { PlayIcon, InformationIcon } from '@/icons';

const truncate = (str, n) => (str && str.length > n ? str.substring(0, n - 1) + '...' : str);

const Banner = ({ movie, onMoreInfo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const { data: images } = useMovieImages(movie?.id);
  const { data: videos } = useMovieVideos(movie?.id);

  const trailerKey = videos?.find(v => v.type === 'Trailer' && v.site === 'YouTube')?.key
    || videos?.[0]?.key;

  const logoPath = images?.logos?.[0]?.file_path;
  const backdropUrl = img.backdrop(movie?.backdrop_path);

  useEffect(() => {
    if (!trailerKey) return;
    const timer = setTimeout(() => {
      setIsPlaying(true);
      setShowTrailer(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [trailerKey]);

  const handleTrailerEnd = useCallback(() => {
    setIsPlaying(false);
    setShowTrailer(false);
    setTimeout(() => {
      setIsPlaying(true);
      setShowTrailer(true);
    }, 20000);
  }, []);

  if (!movie) return <SkeletonBanner />;

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Backdrop image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />

      {/* Trailer overlay */}
      <AnimatePresence>
        {showTrailer && trailerKey && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <TrailerPlayer
              videoKey={trailerKey}
              playing={isPlaying}
              muted={isMuted}
              onEnded={handleTrailerEnd}
              className="w-full h-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-netflix-black to-transparent" />

      {/* Content */}
      <div className="absolute bottom-28 left-4 md:left-12 z-10 max-w-xl space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-netflix-red font-bold text-lg">N</span>
          <span className="uppercase tracking-widest text-xs text-gray-300 font-semibold">
            {movie.media_type === 'tv' ? 'S E R I E S' : 'M O V I E'}
          </span>
        </div>

        {logoPath ? (
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            src={img.logo(logoPath)}
            alt={movie.title || movie.name}
            className="max-w-[350px] w-auto max-h-[120px] object-contain drop-shadow-2xl"
          />
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            {movie.title || movie.name}
          </motion.h1>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-gray-200 line-clamp-3 max-w-lg drop-shadow-md"
        >
          {truncate(movie.overview || '', 200)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="play"
            size="lg"
            onClick={() => {
              setIsPlaying(true);
              setShowTrailer(true);
              setIsMuted(false);
            }}
          >
            <PlayIcon /> Play
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onMoreInfo?.(movie)}
          >
            <InformationIcon /> More Info
          </Button>
        </motion.div>
      </div>

      {/* Mute / Replay control */}
      {trailerKey && (
        <div className="absolute bottom-28 right-4 md:right-12 z-10 flex items-center gap-3">
          {showTrailer && (
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors text-sm"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          )}
          <button
            onClick={() => {
              if (showTrailer) {
                setIsPlaying(false);
                setShowTrailer(false);
              } else {
                setIsPlaying(true);
                setShowTrailer(true);
              }
            }}
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors text-sm"
            title={showTrailer ? 'Stop trailer' : 'Play trailer'}
          >
            {showTrailer ? '⏹' : '▶'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
