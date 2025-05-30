import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-blue-900/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-3"
        >
          <img 
            src="/jbrooks_logo.PNG" 
            alt="J. Brooks Digital Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-blue-900 dark:text-white">
            J. Brooks <span className="text-brand-teal">Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors">
            Home
          </Link>
          <Link to="/services" className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors">
            Services
          </Link>
          <Link to="/about" className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors">
            About
          </Link>
          <Link to="/blog" className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors">
            Blog
          </Link>
          <Link to="/faq" className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors">
            FAQ
          </Link>
          <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium">
            Claim Free Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-blue-900 shadow-lg py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/faq" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Claim Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
