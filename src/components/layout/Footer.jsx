const footerLinks = [
  'Audio Description', 'Help Center', 'Gift Cards', 'Media Center',
  'Investor Relations', 'Jobs', 'Terms of Use', 'Privacy',
  'Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us',
];

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-8 py-12 mt-16">
      <p className="text-gray-400 text-sm mb-6">Questions? Call 1-844-505-2993</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {footerLinks.map((link) => (
          <a key={link} href="#" className="text-gray-400 text-xs hover:text-gray-200 underline transition-colors">
            {link}
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-xs">
        Netflix Clone — Built for educational purposes. Not affiliated with Netflix, Inc.
      </p>
      <p className="text-gray-600 text-xs mt-2">
        Movie data provided by TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
