const variants = {
  primary: 'bg-netflix-red hover:bg-netflix-red-hover text-white',
  secondary: 'bg-gray-600/50 hover:bg-gray-600/70 text-white',
  ghost: 'bg-transparent hover:bg-white/10 text-white',
  play: 'bg-white hover:bg-white/80 text-black',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-8 py-3 text-lg',
  full: 'w-full px-5 py-3 text-base',
};

const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
