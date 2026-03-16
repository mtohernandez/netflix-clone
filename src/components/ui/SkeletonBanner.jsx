const SkeletonBanner = () => {
  return (
    <div className="relative w-full h-[80vh] bg-netflix-gray animate-pulse">
      <div className="absolute bottom-20 left-4 md:left-12 space-y-4">
        <div className="h-8 w-64 bg-netflix-dark rounded" />
        <div className="h-12 w-96 bg-netflix-dark rounded" />
        <div className="h-4 w-[500px] max-w-[80vw] bg-netflix-dark rounded" />
        <div className="h-4 w-[400px] max-w-[70vw] bg-netflix-dark rounded" />
        <div className="flex gap-3 mt-4">
          <div className="h-12 w-32 bg-netflix-dark rounded" />
          <div className="h-12 w-40 bg-netflix-dark rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBanner;
