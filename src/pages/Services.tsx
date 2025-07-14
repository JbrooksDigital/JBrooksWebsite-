import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const servicesRef = useRef<{[key: string]: HTMLDivElement | null}>({
    workflow: null,
    workspace: null,
    "ai-tools": null,
    "white-label": null,
    security: null
  });
  
  // Scroll to section based on hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = servicesRef.current[sectionId];
      
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  const services = [
    {
      id: "workflow",
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks and streamline business processes with intelligent automation that learns and adapts to your specific needs.",
      features: [
        "Custom workflow design and implementation",
        "Process analysis and optimization",
        "Integration with existing software tools",
        "Automated reporting and analytics",
        "Continuous improvement and refinement"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "workspace",
      title: "Centralized Workspaces",
      description: "Bring all your tools, data, and team members together in one collaborative environment designed for maximum productivity and coordination.",
      features: [
        "Customized dashboard development",
        "Team and client collaboration tools",
        "Document management and version control",
        "Project tracking and management",
        "Knowledge base and resource library"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ai-tools",
      title: "AI Tools",
      description: "Leverage machine learning and artificial intelligence to make better decisions, predict trends, and automate complex tasks that previously required human intervention.",
      features: [
        "Personalized AI assistants and chatbots",
        "Predictive analytics and forecasting",
        "Natural language processing solutions",
        "Computer vision and image recognition",
        "Machine learning model development"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "white-label",
      title: "Custom White-Label Systems",
      description: "Deploy branded solutions for your clients or team with custom interfaces that maintain your visual identity while providing powerful functionality.",
      features: [
        "Branded user interface design",
        "Custom domain and logo integration",
        "Client onboarding and management tools",
        "Scalable architecture for growing needs",
        "White-label documentation and guides"
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "security",
      title: "Security & Support",
      description: "Enterprise-grade security with ongoing support ensures your systems stay secure, up-to-date, and performing optimally at all times.",
      features: [
        "End-to-end encryption and data protection",
        "Compliance assistance (GDPR, HIPAA, etc.)",
        "Regular security audits and monitoring",
        "24/7 technical support and troubleshooting",
        "System maintenance and updates"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive AI and automation solutions designed to transform your business operations.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="py-3 px-4 hover:bg-brand-teal hover:text-white rounded-md transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              ref={el => servicesRef.current[service.id] = el}
              className={`py-20 ${index % 2 === 1 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
                  <div className={`${index % 2 === 1 ? 'order-2' : 'order-1'} lg:order-1`}>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-10">
                      <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                      <Link to="/contact">Request Custom Build</Link>
                    </Button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'order-1' : 'order-2'} lg:order-2`}>
                    <div className="overflow-hidden rounded-xl shadow-xl bg-white p-2">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-80 lg:h-96 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Book your free consultation today and discover how our services can transform your business operations.
            </p>
            <Button 
              asChild 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link to="/contact">Claim Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
