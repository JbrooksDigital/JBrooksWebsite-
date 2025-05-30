import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            J. Brooks Digital
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-brand-teal transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-brand-teal transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-brand-teal transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-brand-teal transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-white hover:text-brand-teal transition-colors">
              FAQ
            </Link>
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link to="/contact">Claim Free Custom Build</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-white hover:text-brand-teal transition-colors">
            Home
          </Link>
          <Link to="/services" className="block px-3 py-2 text-white hover:text-brand-teal transition-colors">
            Services
          </Link>
          <Link to="/about" className="block px-3 py-2 text-white hover:text-brand-teal transition-colors">
            About
          </Link>
          <Link to="/blog" className="block px-3 py-2 text-white hover:text-brand-teal transition-colors">
            Blog
          </Link>
          <Link to="/faq" className="block px-3 py-2 text-white hover:text-brand-teal transition-colors">
            FAQ
          </Link>
          <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white">
            <Link to="/contact">Claim Free Custom Build</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 