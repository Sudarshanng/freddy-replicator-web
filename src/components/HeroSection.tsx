
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This will help us debug if the video is loading
    console.log("Video loading status:", isVideoLoaded);
    
    // Add animation delay to match fredmarcus.com style
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source 
            src="https://cdn.gpteng.co/video/fashion-video-bg.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 
          className="text-4xl md:text-6xl font-light text-white mb-6 transform transition-transform duration-700 delay-300"
          style={{ 
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.7s ease, opacity 0.7s ease"
          }}
        >
          TIMELESS ELEGANCE
        </h1>
        <p 
          className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto"
          style={{ 
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.7s ease 0.4s, opacity 0.7s ease 0.4s"
          }}
        >
          Discover our collection of premium clothing designed for the modern individual
        </p>
        <div 
          className="flex justify-center gap-4"
          style={{ 
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.7s ease 0.6s, opacity 0.7s ease 0.6s"
          }}
        >
          <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 transition-all duration-300 hover:transform hover:scale-105">
            SHOP NOW
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 rounded-none px-8 py-6 transition-all duration-300 hover:transform hover:scale-105">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
