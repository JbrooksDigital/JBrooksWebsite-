import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Chelle McAfee",
      title: "Founder & Operations Strategist",
      role: "Operations, Human Resources & Branding",
      experience: "15+ years in consulting, operations, and brand development",
      location: "Kansas City, Kansas",
      passionStatement: "I am passionate about bringing people together through efficient systems and processes. By streamlining operations and fostering meaningful connections, I help teams work more effectively while building strong, collaborative relationships that drive success.",
      education: "University of Kansas – Education",
      certifications: ["Advanced AI Prompt Engineering", "Project Management"],
      coreCompetencies: [
        "Operations Management",
        "Human Resources", 
        "Branding & Storytelling",
        "Strategic Planning",
        "AI-Driven Workflow Automation",
        "Grant Writing"
      ],
      achievements: [
        "Secured $1.4M ADOPT 2.0 Grant (2025) for the Vernon Center",
        "Built and scaled multiple systems in Notion to streamline operations for small businesses and nonprofits",
        "Developed automation strategies now powering J Brooks Digital and community-focused ventures under the McAfee Family Trust"
      ],
      hobbies: "Golf (avid player at Canyon Farms), cooking (known for scratch yogurt and brown-butter Rice Krispie treats), knitting (currently tackling a brioche scarf)",
      funFact: "Once golfed five days a week while running three businesses and still swears by Aldi as her favorite grocery store",
      quote: "Efficiency is not about doing more. It's about clearing the path so the right things can thrive.",
      email: "Contact@jbrooksdigital.com",
      linkedin: "linkedin.com/in/chellemcafee",
      image: "/bios/chelle_pic.jpeg"
    },
    {
      name: "Oluwasola Dugbo",
      title: "Full Stack Software Engineer",
      role: "Software Engineering & Automation", 
      experience: "5 years",
      location: "Overland Park, KS",
      passionStatement: "I am passionate about finding ways to utilize AI and software to make everyday life easier, freeing up time to focus on what matters most.",
      education: "BS Computer Engineering with Mechatronics Minor - Villanova University (May 2024)",
      certifications: ["AWS Cloud Practitioner"],
      previousRoles: ["T-Mobile", "Publicis Sapient", "BearMeUp Software", "Machine Learning Research Assistant at Villanova University"],
      coreCompetencies: [
        "Software Engineering",
        "Automation", 
        "AI Implementation",
        "Full Stack Development",
        "Machine Learning",
        "Agile/SCRUM Methodologies"
      ],
      programmingLanguages: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++", "HTML", "CSS", "Swift", "MATLAB", "MySQL"],
      technologies: ["PyTorch", "TensorFlow", "OpenAI APIs (Whisper, GPT-3)", "Hyperdimensional Computing"],
      notableProjects: ["Scribb.AI (AI note-taking app)", "T-Mobile AI coding assistant", "Formula SAE racing systems", "FIRST Robotics (3rd Place World Champions)"],
      hobbies: "Formula racing, robotics, AI development, web development",
      funFact: "Led a Formula SAE racing team to 2nd place out of 99 international teams at Michigan International Speedway",
      email: "sdugbo@gmail.com",
      linkedin: "https://www.linkedin.com/in/sola-dugbo-8955a31a6",
      github: "https://github.com/DugboTek",
      website: "www.dugbotek.com",
      image: "/bios/sola_bio.jpeg"
    },
    {
      name: "Mkai James Brian Jantz",
      title: "Sales",
      role: "Sales & Customer Experience",
      experience: "4+ years",
      location: "Overland Park, KS",
      passionStatement: "I am passionate about connecting with people and leveraging cutting-edge AI technologies to transform the sales landscape. Building meaningful relationships with clients and exploring innovative solutions energizes me daily. I thrive on discovering new opportunities to help businesses grow through authentic engagement and strategic technology adoption.",
      education: "B.S. in Communications (University of Kansas)",
      certifications: ["Professional Sales - Entrepreneurship"],
      previousRoles: [
        "Fund development & Impact Relations Manager - The Prospect KC",
        "Manager - Reddell Productions", 
        "Supervisor - Country Club of Leawood"
      ],
      coreCompetencies: [
        "Sales Strategy",
        "Customer Experience",
        "AI Technology Integration", 
        "Relationship Building",
        "CRM Management"
      ],
      hobbies: "Avid golfer, lover of food and cooking, spending quality time with family and friends",
      funFact: "A side hobby of mine is DJ'ing and I've been a 'professional' DJ for 5 years",
      quote: "The samurai cries in the dojo to laugh on the battlefield",
      email: "mjantz15@gmail.com",
      linkedin: "https://www.linkedin.com/in/mkai-jantz-493724223",
      image: "/bios/mkai_bio.jpeg"
    },
    {
      name: "John Oyebamiji Tolulope",
      title: "Certified Project Manager & Workspace Systems Expert",
      role: "Workspace & Organizational Development",
      experience: "5+ years",
      location: "Lagos, Nigeria",
      passionStatement: "I am passionate about reducing workplace challenges and fostering human-centered approaches to productivity while creating lasting, sustainable results.",
      education: "Bachelor's degree",
      certifications: [
        "Certified Project Manager (PMP-aligned)",
        "Notion & Monday.com Expert (specialized workspace builder)",
        "Automation & Integration Specialist (Zapier, Make.com)"
      ],
      previousRoles: [
        "CEO & Founder – Smart Hive / Smartive Agency (Current)",
        "Product & Operations Manager – RelaxBites (U.S.-based food company)",
        "System Setup Consultant – Calgary Real Estate (Canada)",
        "Project Manager – Lincoln Holding Company (Dubai/New York)",
        "Workspace Builder for M✶U NYC HQ (Miss Universe Organization division)",
        "Client system development for Avaaz, Findymail, JBrooks Digital, and others"
      ],
      coreCompetencies: [
        "Organizational Development",
        "Workspace Optimization",
        "Human-Centered Design",
        "Productivity Systems",
        "Project Management (Agile, Scrum, Kanban)",
        "CRM Design & Workflow Automation",
        "Cross-platform Integrations (Zapier, Make.com, APIs)",
        "AI & Automation Agent Deployment",
        "Team Training & SOP Development"
      ],
      achievements: [
        "Built centralized project management systems that streamlined team operations across international teams",
        "Designed multi-board workflows for real estate operations integrating Aryeo, Monday.com, and Zapier",
        "Virtually assisted an executive in Findymail for business management and scaling",
        "Developed CEO Dashboards and custom CRMs in Notion for executives and startups",
        "Helped a U.S. startup (RelaxBites) transition from idea to full operational structure including TikTok shop and Amazon strategies",
        "Led system setup for Miss Universe NYC HQ, covering fashion week events, talent, and revenue dashboards",
        "Delivered high-level consulting for clients across 4 continents (Avaaz)",
        "Founder of Smart Hive, building future-ready workspaces for businesses and freelancers"
      ],
      hobbies: "Reading personal development books, creating productivity templates, network marketing, creative design, and exploring AI tools",
      funFact: "I can build an entire productivity system in Notion or Monday.com faster than most people can organize their email inbox",
      quote: "Excellence is not an act, but a habit.",
      email: "oyebamijijohn116@gmail.com",
      linkedin: "https://linkedin.com/in/johnoyebamiji",
      website: "https://thesmartteam116.wixsite.com/smart-hive-1",
      image: "/bios/John Professional.png"
    },
    {
      name: "Christopher Spears",
      title: "Software Engineer",
      role: "Software Engineering & Automation",
      experience: "4 years",
      location: "New York City",
      passionStatement: "I am an innovative thinker, consistently thinking outside the box to devise solutions for humanity, driven by a passion for learning and an unwavering commitment to assisting and uplifting others.",
      education: "Bachelor of Science in Computer Engineering from Villanova University. Currently pursuing Data Science Master's at UCSD",
      previousRoles: ["Software Engineer Intern at JP Morgan", "Freelance Web Developer"],
      coreCompetencies: [
        "Software Engineering",
        "Automation",
        "Data Science and Applied Machine Learning",
        "System Architecture"
      ],
      programmingLanguages: ["Python", "C++", "TypeScript"],
      technologies: ["Linux", "PyTorch", "PySpark", "LangChain", "Docker", "Kubernetes", "NLP", "TensorFlow"],
      notableProjects: [
        "Real-time Radar Sign Language Detection Using a CNN (97% Accuracy)",
        "CrewAI Agentic Financial Forecaster/Researcher for Equities"
      ],
      hobbies: "Running, watching and playing sports, fintech",
      funFact: "I've been interested in entrepreneurship since high school. I remember having a business selling phone cases in high school.",
      quote: "Life is not a process of discovery, but a process of creation… seek to determine Who You Want to Be.",
      email: "spearschristopher2002@gmail.com",
      linkedin: "https://www.linkedin.com/in/christopher-spears-842353211",
      github: "https://github.com/chrismicah",
      image: "/bios/chris_bio.JPEG"
    }
  ];
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
                At J Brooks Digital, we're more than a tech company we're problem solvers who've walked in your shoes. Our journey from hospitality to digital solutions taught us that the best tools aren't just powerful; they're practical, accessible, and designed with real businesses in mind.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We understand the challenges of growing a business without deep pockets or endless resources. That's why our solutions are different: they're battle-tested in our own operations, refined through real-world use, and optimized for businesses that need to make every minute and dollar count.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                What sets us apart isn't just our technology, it's our perspective. We believe that sophisticated business tools shouldn't be reserved for big corporations with massive budgets. Innovation should be accessible to everyone, from the solo entrepreneur just starting out to the established family business looking to scale.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our commitment is simple: to provide you with tools that actually work, support that understands your challenges, and solutions that help you thrive in today's digital landscape. Because when you succeed, we succeed and that's what family businesses are all about.
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
      
      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, operations, and business strategy to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Profile Image */}
                {member.image && (
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-teal/20">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-brand-blue">{member.name}</h3>
                  <p className="text-brand-teal font-semibold mb-1">{member.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.location}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{member.experience}</p>
                </div>
                
                {/* Role & Passion */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{member.role}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {member.passionStatement}
                  </p>
                </div>
                
                {/* Core Competencies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Core Competencies</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.coreCompetencies.slice(0, 4).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-brand-blue/10 text-brand-blue text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.coreCompetencies.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{member.coreCompetencies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Fun Fact */}
                {member.funFact && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Fun Fact</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      {member.funFact}
                    </p>
                  </div>
                )}
                
                {/* Quote */}
                {member.quote && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic text-center border-l-4 border-brand-teal pl-4">
                      "{member.quote}"
                    </p>
                  </div>
                )}
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.website && (
                    <a 
                      href={member.website.startsWith('http') ? member.website : `https://${member.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                      title="Website"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
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
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-2xl p-8 md:p-12 text-white text-center reveal">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Custom AI Solution</h2>
              <p className="text-lg mb-8">
                Ready to streamline your operations with intelligent automation? Get started with a free custom build proposal.
              </p>
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
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
