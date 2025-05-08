
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
        <div className="flex-1"></div>
        
        <Sheet>
          <SheetTrigger asChild>
            <button className="focus:outline-none p-2 rounded-md hover:bg-black/10 transition-all ml-auto">
              <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full overflow-y-auto bg-white p-0" side="right">
            <div className="h-full flex flex-col">
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <SheetClose className="focus:outline-none hover:bg-black/5 p-2 rounded-full transition-colors">
                  <X size={24} />
                </SheetClose>
              </div>

              {/* Menu content */}
              <div className="py-20 px-12 md:px-20 h-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 max-w-7xl mx-auto">
                  {/* Column 1: Weddings, Videography, Commercial */}
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-normal playfair">Weddings</h2>
                      <div className="flex flex-col space-y-3">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">All Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">New York City Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Hamptons Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Destination Weddings</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h2 className="text-3xl font-normal playfair">Videography</h2>
                      <div className="flex flex-col space-y-3">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">All Videography</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Wedding Videography</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Mitzvah Videography</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h2 className="text-3xl font-normal playfair">Commercial</h2>
                      <div className="flex flex-col space-y-3">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">All Commercial</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Corporate Events</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Headshots</a></SheetClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Engagements, Family Events */}
                  <div className="space-y-12 mt-12 md:mt-0">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-normal playfair">Engagements</h2>
                      <div className="flex flex-col space-y-3">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">All Engagements</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">New York City Engagements</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Hamptons Engagements</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h2 className="text-3xl font-normal playfair">Family Events</h2>
                      <div className="flex flex-col space-y-3">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">All Family Events</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Family Portraits</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity">Bar/Bat Mitzvahs</a></SheetClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 3: About, etc */}
                  <div className="space-y-6 mt-12 md:mt-0">
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity">About Us</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity">Testimonials</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity">Contact</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity">Inquiries</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity">NYT Feature</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity">Client Login</a></SheetClose>
                  </div>
                </div>
              </div>
              
              {/* Footer section */}
              <div className="mt-auto border-t py-10">
                <p className="text-center text-lg">
                  Keep up with Fred Marcus: <a href="#" className="underline hover:opacity-70 transition-opacity">Behind the Lens</a>
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
