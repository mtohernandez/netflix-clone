const SkeletonRow = () => {
  return (
    <div className="px-4 md:px-12 my-6">
      <div className="h-6 w-48 bg-netflix-gray rounded mb-4 animate-pulse" />
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] h-[300px] bg-netflix-gray rounded-md animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonRow;
