import { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-4 py-3 bg-netflix-gray/70 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-netflix-red focus:ring-1 focus:ring-netflix-red transition-colors ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-netflix-red">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
