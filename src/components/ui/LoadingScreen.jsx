const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-netflix-black flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default LoadingScreen;
