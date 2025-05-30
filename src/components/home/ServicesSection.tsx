import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  
  const services = [
    {
      id: "workflow",
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and business processes with intelligent automation. Reduce manual work and increase accuracy.",
      features: [
        "Custom automation workflows",
        "Integration with existing tools",
        "Process optimization",
        "Real-time reporting"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "workspace",
      title: "Centralized Workspaces",
      description: "Bring all your tools, data, and team members together in one collaborative environment designed for maximum productivity.",
      features: [
        "All-in-one dashboard",
        "Custom team workspaces",
        "Shared knowledge base",
        "Project management"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      color: "from-green-500 to-brand-sage"
    },
    {
      id: "ai-tools",
      title: "AI Tools",
      description: "Leverage machine learning and artificial intelligence to make better decisions, predict trends, and automate complex tasks.",
      features: [
        "Custom AI assistants",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-brand-teal to-blue-500"
    },
    {
      id: "white-label",
      title: "Custom White-Label Systems",
      description: "Deploy branded solutions for your clients or team with custom interfaces that maintain your visual identity.",
      features: [
        "Branded user interfaces",
        "Custom domain integration",
        "Seamless client onboarding",
        "Scalable architecture"
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "security",
      title: "Security & Support",
      description: "Enterprise-grade security with ongoing support ensures your systems stay secure, up-to-date, and performing optimally.",
      features: [
        "End-to-end encryption",
        "Compliance assistance",
        "Regular security audits",
        "24/7 technical support"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-red-500 to-orange-500"
    }
  ];
  
  const activeService = services[activeIndex];
  
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-3 px-4 py-1 bg-brand-blue/10 rounded-full text-brand-blue font-medium text-sm">
            OUR SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of AI and automation solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12 reveal">
          {services.map((service, index) => (
            <button
              key={index}
              className={`py-4 px-6 rounded-xl transition-all duration-300 flex flex-col items-center ${
                index === activeIndex
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center ${
                index === activeIndex ? "bg-white/20" : `bg-gradient-to-r ${service.color} bg-opacity-10`
              }`}>
                {service.icon}
              </div>
              <span className="text-lg font-medium text-center">{service.title}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-4">{activeService.title}</h3>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${activeService.color} mb-6`}></div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{activeService.description}</p>
                
                <ul className="mb-8 space-y-4">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-center bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg shadow-sm">
                      <div className={`h-8 w-8 rounded-full bg-gradient-to-r ${activeService.color} flex items-center justify-center mr-4 text-white`}>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={`bg-gradient-to-r ${activeService.color} hover:opacity-90 text-white font-medium py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}>
                  <Link to={`/services#${activeService.id}`}>Learn More About {activeService.title}</Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${activeService.color} rounded-2xl opacity-20 blur-xl`}></div>
                <div className="overflow-hidden rounded-xl shadow-xl bg-white dark:bg-gray-800 p-2 relative">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-64 md:h-96 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                  <div className={`absolute bottom-6 right-6 bg-gradient-to-r ${activeService.color} text-white p-3 rounded-full shadow-lg`}>
                    {activeService.icon}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
