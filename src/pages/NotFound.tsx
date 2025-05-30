
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue to-gray-900 text-white p-4">
      <div className="text-center max-w-lg">
        <div className="text-9xl font-bold mb-4 text-brand-teal">404</div>
        <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium text-lg py-6">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg py-6">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
