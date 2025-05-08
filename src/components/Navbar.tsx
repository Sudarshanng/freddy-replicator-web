
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
          <SheetContent className="w-full p-0 overflow-y-auto bg-white" side="right">
            <div className="h-full flex flex-col">
              {/* Close button */}
              <div className="absolute top-8 right-8 z-10">
                <SheetClose className="focus:outline-none hover:bg-black/5 p-2 rounded-full transition-colors">
                  <X size={24} />
                </SheetClose>
              </div>

              {/* Menu content */}
              <div className="flex-1 py-24 px-12 md:px-20 h-full overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-16 md:gap-y-0 max-w-7xl mx-auto">
                  {/* Column 1: Weddings, Videography, Commercial */}
                  <div className="space-y-12">
                    <div className="menu-category">
                      <h2 className="text-3xl font-normal playfair mb-6">Weddings</h2>
                      <div className="flex flex-col space-y-4">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">All Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">New York City Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Hamptons Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Destination Weddings</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-3xl font-normal playfair mb-6">Videography</h2>
                      <div className="flex flex-col space-y-4">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">All Videography</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Wedding Videography</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Mitzvah Videography</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-3xl font-normal playfair mb-6">Commercial</h2>
                      <div className="flex flex-col space-y-4">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">All Commercial</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Corporate Events</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Headshots</a></SheetClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Engagements, Family Events */}
                  <div className="space-y-12">
                    <div className="menu-category">
                      <h2 className="text-3xl font-normal playfair mb-6">Engagements</h2>
                      <div className="flex flex-col space-y-4">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">All Engagements</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">New York City Engagements</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Hamptons Engagements</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="menu-category">
                      <h2 className="text-3xl font-normal playfair mb-6">Family Events</h2>
                      <div className="flex flex-col space-y-4">
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">All Family Events</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Family Portraits</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:opacity-60 transition-opacity text-lg">Bar/Bat Mitzvahs</a></SheetClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 3: About, etc */}
                  <div className="space-y-5">
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity mb-4">About Us</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity mb-4">Testimonials</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity mb-4">Contact</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity mb-4">Inquiries</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity mb-4">NYT Feature</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-3xl font-normal playfair hover:opacity-60 transition-opacity mb-4">Client Login</a></SheetClose>
                  </div>
                </div>
              </div>
              
              {/* Footer section */}
              <div className="border-t py-8">
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
