import Button from './Button';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-netflix-black flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-gray-400 mb-6">{error?.message || 'An unexpected error occurred.'}</p>
        {resetErrorBoundary && (
          <Button onClick={resetErrorBoundary} variant="primary">
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback;
