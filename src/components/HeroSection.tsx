
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto fade-in">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          TIMELESS ELEGANCE
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto">
          Discover our collection of premium clothing designed for the modern individual
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6">
            SHOP NOW
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 rounded-none px-8 py-6">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
