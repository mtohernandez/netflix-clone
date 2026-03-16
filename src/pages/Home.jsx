import { useState, useMemo } from 'react';
import { useHomeRows, useTrending } from '@/hooks/useMovies';
import Banner from '@/components/movie/Banner';
import BannerAmbient from '@/components/movie/BannerAmbient';
import MovieRow from '@/components/movie/MovieRow';
import MovieModal from '@/components/movie/MovieModal';
import SkeletonBanner from '@/components/ui/SkeletonBanner';

const Home = () => {
  const { data: trending, isLoading: trendingLoading } = useTrending();
  const { rows } = useHomeRows();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const featuredMovie = useMemo(() => {
    if (!trending?.length) return null;
    return trending[Math.floor(Math.random() * trending.length)];
  }, [trending]);

  return (
    <div className="relative pb-16">
      <BannerAmbient movie={featuredMovie} isTrailerPlaying={false} />

      {trendingLoading ? (
        <SkeletonBanner />
      ) : (
        <Banner
          movie={featuredMovie}
          onMoreInfo={(movie) => setSelectedMovie(movie)}
        />
      )}

      <div className="relative z-10 -mt-16">
        {rows.map((row) => (
          <MovieRow
            key={row.title}
            title={row.title}
            movies={row.data}
            isLoading={row.isLoading}
            isLargeRow={row.isLargeRow}
            onMovieClick={(movie) => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;
