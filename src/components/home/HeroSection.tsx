import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
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
    <section ref={heroRef} className="hero-section min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            {/* Left Column - Main Content */}
            <div className="text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 mb-4">
                <span className="text-brand-teal text-sm font-medium">AI-Powered Business Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight hero-text-shadow">
                <span className="block mb-2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  Transform Your Business
                </span>
                <span className="block gradient-text animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  With Smart Automation
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 animate-fade-in max-w-xl hero-text-shadow" style={{ animationDelay: '0.6s' }}>
                Streamline operations, reduce costs, and scale your business with custom AI automation solutions designed specifically for your needs.
              </p>

              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-teal h-5 w-5" />
                  <span className="text-gray-200">Cut operational costs by up to 40%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-teal h-5 w-5" />
                  <span className="text-gray-200">Save 15+ hours per week on manual tasks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-teal h-5 w-5" />
                  <span className="text-gray-200">24/7 automated business processes</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Claim Free Consultation
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 transition-all duration-300"
                >
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Social Proof */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Rapid Implementation</h3>
                    <p className="text-gray-300 text-sm">Get your automation solution up and running in days, not months</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Custom-Built for You</h3>
                    <p className="text-gray-300 text-sm">Solutions tailored to your specific business needs and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Proven Results</h3>
                    <p className="text-gray-300 text-sm">Join businesses achieving 300% ROI with our automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
