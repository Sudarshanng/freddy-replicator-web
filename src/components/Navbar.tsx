
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'social' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <RouterLink to="/" className="text-lg font-light tracking-wider">
          <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10H25M10 20H20M10 30H25M40 10H55M40 20H50M40 30H55M70 10H85M70 20H80M70 30H85" stroke={scrolled ? "black" : "white"} strokeWidth="2"/>
          </svg>
        </RouterLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={800}
              className={`text-sm uppercase tracking-wider ${
                scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'
              } transition-colors cursor-pointer`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 
            <X size={24} className={scrolled ? "text-black" : "text-white"} /> : 
            <Menu size={24} className={scrolled ? "text-black" : "text-white"} />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-8 space-y-6 text-center">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={800}
              className="text-lg uppercase tracking-wider py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
