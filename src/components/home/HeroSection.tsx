import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  // const videoRef = useRef<HTMLVideoElement>(null); // No longer needed for GIF
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false); // For GIF loading error
  
  useEffect(() => {
    // Mark as loaded after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Create particles effect
    if (heroRef.current) {
      const createParticles = () => {
        const heroElement = heroRef.current;
        if (!heroElement) return;
        
        // Clear existing particles
        const existingParticles = heroElement.querySelectorAll('.hero-particle');
        existingParticles.forEach(particle => particle.remove());
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'hero-particles';
        
        // Create particles based on screen size
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'hero-particle';
          
          // Random position
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          // Random size
          const size = Math.random() * 6 + 2;
          
          // Random opacity
          const opacity = Math.random() * 0.5 + 0.2;
          
          // Random animation delay and duration
          const animationDelay = Math.random() * 10;
          const animationDuration = Math.random() * 30 + 10;
          
          particle.style.left = `${x}%`;
          particle.style.top = `${y}%`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.opacity = opacity.toString();
          particle.style.animationDelay = `${animationDelay}s`;
          particle.style.animationDuration = `${animationDuration}s`;
          
          particlesContainer.appendChild(particle);
        }
        
        heroElement.appendChild(particlesContainer);
      };
      
      createParticles();
      
      // Recreate particles on resize
      window.addEventListener('resize', createParticles);
      
      return () => {
        window.removeEventListener('resize', createParticles);
        clearTimeout(timer);
      };
    }
  }, []);
  
  return (
    <section ref={heroRef} className="hero-section pt-24">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!imageError ? (
          <img 
            src="/videos/ai_automation_v2.gif" 
            alt="Background animation" 
            className="absolute w-full h-full object-cover object-center"
            style={{ 
              filter: 'brightness(0.5)',
              imageRendering: 'crisp-edges',
              transform: 'scale(1.1)',
              transformOrigin: 'center',
              minHeight: '100vh',
              width: '100vw'
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback gradient background if GIF fails to load
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900"
            style={{ opacity: 0.95, zIndex: -1 }}
          />
        )}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hero-text-shadow">
              <span className="block mb-2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                AI-Powered Automation Systems
              </span>
              <span className="block gradient-text animate-slide-in" style={{ animationDelay: '0.4s' }}>
                for Businesses That Want to Grow
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in max-w-2xl mx-auto hero-text-shadow" style={{ animationDelay: '0.6s' }}>
              Centralize your tools, automate your processes, and scale with clarity—powered by smart, done-for-you solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button asChild className="hero-button-primary">
                <Link to="/contact">Claim Free Custom Build</Link>
              </Button>
              <Button asChild className="hero-button-secondary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
