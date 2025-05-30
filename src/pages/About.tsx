import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore and implement cutting-edge technologies to provide the most effective solutions for our clients."
    },
    {
      title: "Reliability",
      description: "We build robust systems that our clients can depend on, with reliability and security at the core of every solution."
    },
    {
      title: "Client Success",
      description: "Our ultimate goal is your success. We measure our achievements through the positive impact we have on your business."
    },
    {
      title: "Simplicity",
      description: "We believe in making complex technology accessible and user-friendly, with intuitive interfaces and clear documentation."
    }
  ];
  
  const teamMembers = [
    {
      name: "Jennifer Brooks",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in technology and business optimization, Jennifer founded J. Brooks Digital to help small businesses harness the power of AI.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Chen",
      position: "Chief Technology Officer",
      bio: "David brings expertise in AI development and system architecture, ensuring our solutions are both cutting-edge and reliable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sophia Rodriguez",
      position: "Client Success Manager",
      bio: "Dedicated to ensuring client satisfaction, Sophia works closely with every client to understand their unique needs and ensure optimal results.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const timeline = [
    {
      year: 2018,
      title: "Company Founded",
      description: "J. Brooks Digital was established with a mission to make AI technology accessible to small and medium businesses."
    },
    {
      year: 2019,
      title: "First Major Client",
      description: "Secured first enterprise client and delivered a customized workflow automation solution that reduced operational costs by 35%."
    },
    {
      year: 2020,
      title: "Team Expansion",
      description: "Expanded our team of experts to include specialists in AI, workflow optimization, and client success management."
    },
    {
      year: 2021,
      title: "White-Label Platform Launch",
      description: "Launched our proprietary white-label platform, enabling clients to offer branded automation tools to their customers."
    },
    {
      year: 2022,
      title: "AI Innovation Award",
      description: "Recognized with the Regional AI Innovation Award for our contribution to business process automation."
    },
    {
      year: 2023,
      title: "Global Expansion",
      description: "Extended our services to international clients, with projects in Europe, Asia, and Australia."
    },
    {
      year: 2024,
      title: "Next-Gen AI Integration",
      description: "Incorporated advanced large language models and predictive analytics into our core service offerings."
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About J. Brooks Digital</h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're on a mission to empower businesses with intelligent automation solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                J. Brooks Digital was founded with a clear purpose: to make powerful AI and automation technology accessible to businesses of all sizes, not just large enterprises with massive budgets.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our founder, Jennifer Brooks, saw firsthand how smaller businesses were being left behind in the AI revolution despite having the most to gain from efficiency improvements. This realization sparked the creation of our company.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, we work with solopreneurs, startups, and nonprofit organizations to implement custom, white-labeled AI solutions that streamline operations, reduce costs, and create exceptional customer experiences.
              </p>
            </div>
            <div className="reveal">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                  alt="J. Brooks Digital team working" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do, from client interactions to product development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-brand-blue">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From our founding to today, we've been focused on innovation and client success.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto reveal">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline items */}
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-brand-teal rounded-full z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ${
                    index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'
                  }`}>
                    <span className="inline-block text-brand-teal font-bold text-lg mb-2">{item.year}</span>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate experts dedicated to helping your business succeed with AI-powered solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-teal font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-2xl p-8 md:p-12 text-white text-center reveal">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Custom AI Solution</h2>
              <p className="text-lg mb-8">
                Ready to streamline your operations with intelligent automation? Get started with a free custom build proposal.
              </p>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium text-lg py-6 px-8">
                <Link to="/contact">Claim Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
