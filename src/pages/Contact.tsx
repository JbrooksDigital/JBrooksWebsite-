import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    serviceInterest: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send via FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/jbrooksdigital@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: "New Website Consultation Request",
          _template: "table",
          // Optionally disable captcha
          _captcha: "false",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          businessType: formData.businessType,
          serviceInterest: formData.serviceInterest,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Your message has been sent successfully! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        businessType: "",
        serviceInterest: "",
        message: ""
      });
    } catch (error) {
      toast.error("There was an issue sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const businessTypes = [
    { value: "solopreneur", label: "Solopreneur" },
    { value: "startup", label: "Startup (1-10 employees)" },
    { value: "small", label: "Small Business (11-50 employees)" },
    { value: "medium", label: "Medium Business (51-200 employees)" },
    { value: "large", label: "Large Business (201+ employees)" },
    { value: "nonprofit", label: "Nonprofit Organization" },
    { value: "agency", label: "Agency or Consultancy" }
  ];
  
  const serviceInterests = [
    { value: "workflow", label: "Workflow Automation" },
    { value: "workspace", label: "Centralized Workspaces" },
    { value: "ai-tools", label: "AI Tools" },
    { value: "white-label", label: "Custom White-Label Systems" },
    { value: "security", label: "Security & Support" },
    { value: "consultation", label: "General Consultation" }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get your free consultation and start your automation journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 reveal order-2 lg:order-1">
              <h2 className="text-2xl font-bold mb-6">Claim Your Free Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text sm font-medium mb-2">
                    Business Type
                  </label>
                  <Select 
                    value={formData.businessType} 
                    onValueChange={(value) => handleSelectChange("businessType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <Select 
                    value={formData.serviceInterest} 
                    onValueChange={(value) => handleSelectChange("serviceInterest", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceInterests.map(service => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your project/needs
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="order-1 lg:order-2 reveal">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Have questions or want to discuss your project? We're here to help. Fill out the form or contact us directly.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-teal/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">9132059846</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-teal/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">jbrooksdigital@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM PST</li>
                  <li>Saturday: By appointment only</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section hidden for now */}
      
    </>
  );
};

export default Contact;
