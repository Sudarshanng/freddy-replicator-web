
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <button className="focus:outline-none p-2 rounded-md hover:bg-black/10 transition-all">
              <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md overflow-y-auto" side="right">
            <div className="flex flex-col h-full py-10 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - Weddings & Videography */}
                <div className="space-y-8">
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-2xl font-light playfair">Weddings</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Weddings</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">New York City Weddings</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Hamptons Weddings</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Destination Weddings</a></SheetClose>
                    </div>
                  </div>
                  
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-2xl font-light playfair">Videography</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Videography</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Wedding Videography</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Mitzvah Videography</a></SheetClose>
                    </div>
                  </div>
                  
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <h2 className="text-2xl font-light playfair">Commercial</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Commercial</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Corporate Events</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Headshots</a></SheetClose>
                    </div>
                  </div>
                </div>
                
                {/* Column 2 - Engagements & Family Events */}
                <div className="space-y-8">
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-light playfair">Engagements</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Engagements</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">New York City Engagements</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Hamptons Engagements</a></SheetClose>
                    </div>
                  </div>
                  
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-2xl font-light playfair">Family Events</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Family Events</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Family Portraits</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Bar/Bat Mitzvahs</a></SheetClose>
                    </div>
                  </div>
                </div>
                
                {/* Column 3 - About, Contact, etc */}
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">About Us</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Testimonials</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Contact</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Inquiries</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">NYT Feature</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Client Login</a></SheetClose>
                </div>
              </div>
              
              <div className="mt-auto pt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-lg font-light">
                  Keep up with Fred Marcus: <a href="#" className="underline hover:text-gray-600 transition-colors">Behind the Lens</a>
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
