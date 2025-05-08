
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          FRED MARCUS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Home</Link>
          <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Shop</Link>
          <Link to="/about" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">About</Link>
          <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-black" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-8 space-y-6 text-center">
          <Link 
            to="/" 
            className="text-lg uppercase tracking-wider py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="text-lg uppercase tracking-wider py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className="text-lg uppercase tracking-wider py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-lg uppercase tracking-wider py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
