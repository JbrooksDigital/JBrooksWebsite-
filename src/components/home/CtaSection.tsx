import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

const CtaSection = () => {
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
  
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjEyMTIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0wLTZoNnY2aC02di02em0xMiAwaDZ2Nmg2djZoLTZ2Nmg2djZoLTZ2Nmg2djZoLTEydi02aC02di02aC02di02aC02di02aDZ2LTZoNnYtNmgxMnY2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative reveal">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 text-brand-teal/20 hidden md:block">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="48" cy="48" r="48" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute -bottom-12 -right-12 w-24 h-24 text-brand-teal/20 hidden md:block">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="96" height="96" rx="12" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900/90 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-teal/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-xl"></div>
            </div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-brand-teal font-medium text-sm">
                GET STARTED TODAY
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-10 text-white/90">
                Get a free custom build proposal and see how AI automation can streamline your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link to="/contact">Claim Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/20 bg-white/10 font-bold text-lg py-7 px-10 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-white/90">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-teal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-teal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-teal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom solution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
