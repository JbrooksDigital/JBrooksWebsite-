import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "J. Brooks Digital transformed our operations with AI automation. We've reduced admin work by 70% and can focus on what truly matters - our customers.",
    author: "Sarah Johnson",
    position: "Founder, Vertex Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    quote: "The white-labeled system they built for us has become a competitive advantage. Our clients love the seamless experience and efficiency it provides.",
    author: "Michael Chen",
    position: "CEO, Innovate Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    quote: "As a nonprofit with limited resources, the automation solutions from J. Brooks Digital have been a game-changer. We now serve 40% more people with the same team.",
    author: "Elena Rodriguez",
    position: "Director, Community First",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    quote: "The AI-powered analytics dashboard they built gives us insights we never had before. We've been able to make data-driven decisions that have grown our revenue by 35%.",
    author: "David Wilson",
    position: "Marketing Director, Elevate Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));
    
    return () => {
      revealElements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const handleNext = () => {
    setCurrent(prev => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-indigo-900 to-gray-900">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/20 to-transparent opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0wLTZoNnY2aC02di02em0xMiAwaDZ2Nmg2djZoLTZ2Nmg2djZoLTZ2Nmg2djZoLTEydi02aC02di02aC02di02aC02di02aDZ2LTZoNnYtNmgxMnY2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-3 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-brand-teal font-medium text-sm">
            CLIENT SUCCESS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses that have transformed with our solutions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto reveal">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 text-brand-teal/20">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.0001 56C45.2001 56 56.0001 45.2 56.0001 32C56.0001 18.8 45.2001 8 32.0001 8C18.8001 8 8.00012 18.8 8.00012 32C8.00012 45.2 18.8001 56 32.0001 56Z" fill="currentColor"/>
                <path d="M72.0001 56C72.0001 69.2 61.2001 80 48.0001 80C34.8001 80 24.0001 69.2 24.0001 56C24.0001 42.8 34.8001 32 48.0001 32C61.2001 32 72.0001 42.8 72.0001 56Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 text-purple-500/20">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="64" height="64" rx="8" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
              {/* Quote icon */}
              <svg className="absolute top-6 left-6 h-16 w-16 text-white/10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <div className="px-6 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Rating */}
                    <div className="flex justify-center">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <p className="text-xl md:text-2xl leading-relaxed font-medium text-white text-center">
                      "{testimonials[current].quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-teal p-1">
                        <img 
                          src={testimonials[current].image} 
                          alt={testimonials[current].author} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-white text-lg">{testimonials[current].author}</p>
                        <p className="text-brand-teal">{testimonials[current].position}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
              <button 
                onClick={handlePrev}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all border border-white/20 shadow-lg hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <div className="flex items-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrent(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 10000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current 
                        ? "bg-brand-teal scale-125 shadow-lg shadow-brand-teal/50" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all border border-white/20 shadow-lg hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          {/* Client logos */}
          <div className="mt-20 reveal">
            <p className="text-center text-white/70 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by innovative companies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-center">
                  <div className="h-12 w-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-4">
                    <div className="text-white/80 font-bold">LOGO {i}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
