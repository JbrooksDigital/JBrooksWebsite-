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
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
        >
          <img 
            src="/jbrooks_logo.PNG" 
            alt="J. Brooks Digital Logo" 
            className={`transition-all duration-300 ${
              isScrolled ? "h-14 w-auto" : "h-16 w-auto"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            to="/" 
            className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            About
          </Link>
          <Link 
            to="/blog" 
            className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Blog
          </Link>
          <Link 
            to="/faq" 
            className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            FAQ
          </Link>
          <Button 
            asChild 
            className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Link to="/contact">Claim Free Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-blue-900 shadow-lg py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-6">
              <Link 
                to="/" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/faq" 
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                asChild 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium w-full rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/contact">Claim Free Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
