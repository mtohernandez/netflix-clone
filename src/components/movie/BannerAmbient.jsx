import { img } from '@/api/tmdb';

const BannerAmbient = ({ movie, isTrailerPlaying }) => {
  if (!movie) return null;

  const backdropUrl = img.backdrop(movie.backdrop_path);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 scale-110 transition-opacity duration-2000"
        style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(80px) saturate(1.5)',
          opacity: isTrailerPlaying ? 0.4 : 0.3,
          transitionDuration: '2s',
        }}
      />
    </div>
  );
};

export default BannerAmbient;
