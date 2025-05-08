
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
        {/* Logo could be added here */}
        <div className="flex-1"></div>
        
        <Sheet>
          <SheetTrigger asChild>
            <button className="focus:outline-none p-2 rounded-md hover:bg-black/10 transition-all ml-auto">
              <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full p-0 border-none bg-white overflow-y-auto" side="right">
            <div className="h-full flex flex-col overflow-auto">
              <div className="px-6 py-6 flex justify-end">
                <SheetClose className="p-2 rounded-full hover:bg-black/5">
                  <X size={24} />
                </SheetClose>
              </div>

              <div className="flex-1 px-10 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
                  {/* Column 1: Weddings, Videography, Commercial */}
                  <div className="space-y-10">
                    <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <h2 className="text-2xl font-light playfair border-b pb-2">Weddings</h2>
                      <div className="flex flex-col space-y-3 pl-1">
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">New York City Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Hamptons Weddings</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Destination Weddings</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                      <h2 className="text-2xl font-light playfair border-b pb-2">Videography</h2>
                      <div className="flex flex-col space-y-3 pl-1">
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Videography</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Wedding Videography</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Mitzvah Videography</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                      <h2 className="text-2xl font-light playfair border-b pb-2">Commercial</h2>
                      <div className="flex flex-col space-y-3 pl-1">
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Commercial</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Corporate Events</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Headshots</a></SheetClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Engagements, Family Events */}
                  <div className="space-y-10">
                    <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <h2 className="text-2xl font-light playfair border-b pb-2">Engagements</h2>
                      <div className="flex flex-col space-y-3 pl-1">
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Engagements</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">New York City Engagements</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Hamptons Engagements</a></SheetClose>
                      </div>
                    </div>
                    
                    <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      <h2 className="text-2xl font-light playfair border-b pb-2">Family Events</h2>
                      <div className="flex flex-col space-y-3 pl-1">
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">All Family Events</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Family Portraits</a></SheetClose>
                        <SheetClose asChild><a href="#" className="hover:underline transform hover:translate-x-1 transition-transform">Bar/Bat Mitzvahs</a></SheetClose>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 3: About Us, etc. */}
                  <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">About Us</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Testimonials</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Contact</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Inquiries</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">NYT Feature</a></SheetClose>
                    <SheetClose asChild><a href="#" className="block text-2xl font-light playfair hover:underline transform hover:translate-x-1 transition-transform">Client Login</a></SheetClose>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-12 pb-8 text-center border-t">
                <p className="text-lg font-light animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
