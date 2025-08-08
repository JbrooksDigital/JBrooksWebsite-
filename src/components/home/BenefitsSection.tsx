import { useEffect, useRef } from "react";
import { Zap, Star, Rocket, BarChart3 } from "lucide-react";

const BenefitsSection = () => {
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
  
  const benefits = [
    {
      icon: <Zap size={36} className="text-brand-teal" />,
      title: "Increase Efficiency",
      description: "Automate repetitive tasks and streamline workflows to save up to 20 hours per week.",
      color: "from-brand-teal to-blue-500"
    },
    {
      icon: <Star size={36} className="text-yellow-500" />,
      title: "Enhance Customer Experience",
      description: "Deliver consistent, personalized service with intelligent automation and AI tools.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Rocket size={36} className="text-purple-500" />,
      title: "Scale Without Stress",
      description: "Build systems that grow with your business without requiring significant new resources.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 size={36} className="text-green-500" />,
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze data and extract actionable insights for better decision making.",
      color: "from-green-500 to-brand-sage"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-800 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent opacity-70"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-3 px-4 py-1 bg-brand-teal/10 rounded-full text-brand-teal font-medium text-sm">
            POWERFUL BENEFITS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Why Choose AI Automation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered solutions deliver measurable results for businesses of all sizes, helping you stay competitive in today's digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="reveal glass-card rounded-2xl shadow-lg p-8 transition-all transform hover:-translate-y-2 hover:shadow-xl duration-300 border border-white/20 dark:border-white/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.color} p-0.5 shadow-md`}>
                <div className="bg-white dark:bg-gray-900 w-full h-full rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              
              <div className="mt-6 flex items-center text-brand-teal font-medium">
                <span className="mr-2">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-2xl shadow-xl reveal relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-teal/90"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your business?</h3>
              <p className="text-white/80">Get started with our AI solutions today.</p>
            </div>
            <button className="px-8 py-4 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
