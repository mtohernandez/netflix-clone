import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrolled } from '@/hooks/useScrolled';
import { NetflixIcon, SearchIcon, BellIcon, ArrowDownIcon } from '@/icons';
import { auth } from '@/firebase';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const scrolled = useScrolled();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-3 transition-all duration-300 ${
        scrolled ? 'bg-netflix-black/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        <Link to="/" className="flex-shrink-0">
          <NetflixIcon />
        </Link>
        <ul className="hidden md:flex items-center gap-5">
          <li><Link to="/" className="text-sm text-white hover:text-gray-300 transition-colors">Home</Link></li>
          <li><Link to="/search" className="text-sm text-gray-300 hover:text-white transition-colors">TV Shows</Link></li>
          <li><Link to="/search" className="text-sm text-gray-300 hover:text-white transition-colors">Movies</Link></li>
          <li><Link to="/search" className="text-sm text-gray-300 hover:text-white transition-colors">New & Popular</Link></li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <AnimatePresence>
          {searchOpen ? (
            <motion.form
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 260, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-black/80 border border-white/50 overflow-hidden"
            >
              <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="px-2 bg-transparent">
                <SearchIcon />
              </button>
              <input
                autoFocus
                type="text"
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => !searchQuery && setSearchOpen(false)}
                className="w-full py-1.5 pr-3 bg-transparent text-white text-sm outline-none placeholder-gray-400"
              />
            </motion.form>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="bg-transparent p-1 hover:opacity-80 transition-opacity">
              <SearchIcon />
            </button>
          )}
        </AnimatePresence>

        <button className="bg-transparent hidden sm:block hover:opacity-80 transition-opacity"><BellIcon /></button>

        {/* Profile dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setProfileMenuOpen(true)}
          onMouseLeave={() => setProfileMenuOpen(false)}
        >
          <button className="flex items-center gap-1 bg-transparent">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
              alt="Profile"
              className="w-8 h-8 rounded object-cover"
            />
            <ArrowDownIcon />
          </button>

          <AnimatePresence>
            {profileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 w-48 bg-netflix-dark/95 backdrop-blur-sm border border-gray-700 rounded-md shadow-xl overflow-hidden"
              >
                <Link to="/profile" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                  Account
                </Link>
                <hr className="border-gray-700" />
                <button
                  onClick={() => auth.signOut()}
                  className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors bg-transparent"
                >
                  Sign out of Netflix
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
