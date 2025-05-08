
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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1">
          <a href="/" className="text-lg font-light tracking-wider">
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10H25M10 20H20M10 30H25M40 10H55M40 20H50M40 30H55M70 10H85M70 20H80M70 30H85" stroke={scrolled ? "black" : "white"} strokeWidth="2"/>
            </svg>
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="focus:outline-none">
              <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md overflow-y-auto" side="right">
            <div className="flex flex-col h-full py-10 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - Weddings & Videography */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-light playfair">Weddings</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline">All Weddings</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">New York City Weddings</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Hamptons Weddings</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Destination Weddings</a></SheetClose>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-light playfair">Videography</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline">All Videography</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Wedding Videography</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Mitzvah Videography</a></SheetClose>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-light playfair">Commercial</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline">All Commercial</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Corporate Events</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Headshots</a></SheetClose>
                    </div>
                  </div>
                </div>
                
                {/* Column 2 - Engagements & Family Events */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-light playfair">Engagements</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline">All Engagements</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">New York City Engagements</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Hamptons Engagements</a></SheetClose>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-light playfair">Family Events</h2>
                    <div className="flex flex-col space-y-2">
                      <SheetClose asChild><a href="#" className="hover:underline">All Family Events</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Family Portraits</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:underline">Bar/Bat Mitzvahs</a></SheetClose>
                    </div>
                  </div>
                </div>
                
                {/* Column 3 - About, Contact, etc */}
                <div className="space-y-4">
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline">About Us</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline">Testimonials</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline">Contact</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline">Inquiries</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline">NYT Feature</a></SheetClose>
                  <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline">Client Login</a></SheetClose>
                </div>
              </div>
              
              <div className="mt-auto pt-12 text-center">
                <p className="text-lg font-light">
                  Keep up with Fred Marcus: <a href="#" className="underline">Behind the Lens</a>
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
