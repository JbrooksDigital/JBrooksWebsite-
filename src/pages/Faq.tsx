import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Faq = () => {
  const faqs = [
    {
      question: "What exactly do you mean by AI-powered business systems?",
      answer: "AI-powered business systems are software solutions that utilize artificial intelligence to automate tasks, analyze data, make predictions, and streamline business processes. Our systems can handle everything from customer service chatbots to predictive inventory management to automated document processing, allowing you to focus on growth instead of repetitive tasks."
    },
    {
      question: "How can AI automation benefit my small business?",
      answer: "Small businesses often have limited resources and team members wearing multiple hats. AI automation can help by handling routine tasks like data entry, customer follow-ups, appointment scheduling, and basic customer service. This lets your team focus on high-value activities like strategy, relationship building, and business development. Our clients typically report 15-30 hours saved per week after implementing our solutions."
    },
    {
      question: "What does 'white-labeled' mean?",
      answer: "White-labeled means the systems we build for you can be branded with your company's name, logo, and visual identity. This is particularly valuable if you're a consultant or agency providing services to your own clients. You can offer these AI systems as part of your service package, with your branding throughout the experience, enhancing your professional image and service offerings."
    },
    {
      question: "Do I need technical knowledge to use these systems?",
      answer: "No. We design all our systems with user-friendliness in mind. While they're powered by sophisticated AI technology, the interfaces are intuitive and easy to use. We also provide comprehensive training and documentation. That said, if you're interested in the technical aspects, we're always happy to explain how things work under the hood."
    },
    {
      question: "How much does it cost to implement an AI automation system?",
      answer: "Costs vary based on the complexity of your needs, but we offer flexible pricing models to accommodate different business sizes. For solopreneurs, we have starter packages beginning at $1,500 for initial setup plus a monthly maintenance fee. For more comprehensive enterprise systems, investments typically range from $5,000-$25,000 with corresponding maintenance plans. We'll provide a detailed quote after understanding your specific requirements during the free consultation."
    },
    {
      question: "How long does it take to implement a system?",
      answer: "The timeline depends on the complexity of your project. A basic automation system can be up and running in 2-3 weeks. More complex, customized solutions typically take 4-8 weeks for development, testing, and deployment. We'll provide a specific timeline estimate during your consultation based on your unique needs and requirements."
    },
    {
      question: "Will these systems integrate with the software I already use?",
      answer: "Yes, our systems are designed to integrate with most popular business software. We have established integrations with tools like Salesforce, QuickBooks, Google Workspace, Microsoft 365, Slack, Asana, Trello, Shopify, and many others. If you use more specialized software, we can usually build custom integrations to ensure everything works together seamlessly."
    },
    {
      question: "How secure is my business data with your AI systems?",
      answer: "Security is our top priority. We implement enterprise-grade encryption, secure authentication protocols, and regular security audits. All systems are built with data privacy regulations (like GDPR and CCPA) in mind. We can also sign custom data processing agreements and provide detailed information about our security practices during the consultation."
    },
    {
      question: "Do you provide ongoing support after the system is implemented?",
      answer: "Absolutely. We offer various support packages to meet different needs, from basic email support to dedicated account management with 24/7 emergency response. All our implementations come with at least 30 days of free support to ensure everything is working smoothly. We also provide regular updates and improvements to keep your system running optimally."
    },
    {
      question: "What's included in the free custom build consultation?",
      answer: "The free consultation is a comprehensive 60-90 minute session where we discuss your business challenges, current processes, and goals. We'll identify specific areas where automation can help, outline potential solutions, and provide a rough estimate of costs and implementation timeline. You'll receive a summary document afterward with our recommendations, completely free and with no obligation."
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Find answers to common questions about our AI automation services and solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 reveal">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-2 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12 reveal">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Don't see your question answered here? Contact us directly.
            </p>
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Get a free custom build proposal and see how AI automation can streamline your operations.
            </p>
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium text-lg py-6 px-8">
              <Link to="/contact">Claim Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
