import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How AI Automation Is Transforming Small Business Operations",
      excerpt: "Discover how artificial intelligence is helping small businesses compete with larger companies by automating time-consuming tasks...",
      category: "AI",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The ROI of Workflow Automation: A Case Study",
      excerpt: "See how a marketing agency saved 30+ hours per week and increased client satisfaction by implementing custom workflow automation...",
      category: "Case Studies",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "White-Label Solutions: Expanding Your Service Offerings",
      excerpt: "Learn how consultants and agencies are using white-label AI tools to provide additional value to clients without increasing workload...",
      category: "Business Growth",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "5 AI Tools Every Solopreneur Needs in 2025",
      excerpt: "From customer service chatbots to automated social media management, these AI tools are helping solopreneurs do more with less...",
      category: "Tools",
      date: "April 22, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Securing Your Business Data in the Age of AI",
      excerpt: "Best practices for maintaining data security and privacy when implementing AI automation systems in your business...",
      category: "Security",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Nonprofit Success Story: How AI Helped Increase Community Impact",
      excerpt: "This environmental nonprofit used automation to reduce administrative overhead and reinvest time and resources into their mission...",
      category: "Case Studies",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Categories for filter
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "AI", label: "AI" },
    { value: "Case Studies", label: "Case Studies" },
    { value: "Business Growth", label: "Business Growth" },
    { value: "Tools", label: "Tools" },
    { value: "Security", label: "Security" }
  ];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Blog & Resources</h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Insights, case studies, and guides on AI automation and business optimization.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Filter Posts</h2>
                
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Search
                  </label>
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold mb-4">Subscribe to Updates</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get the latest articles and resources directly to your inbox.
                  </p>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="w-full mb-4"
                  />
                  <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all reveal">
                      <Link to={`/blog/${post.id}`} className="block">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                        </div>
                        <Link to={`/blog/${post.id}`} className="block">
                          <h2 className="text-xl font-bold mb-3 hover:text-brand-blue transition-colors">{post.title}</h2>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="text-brand-blue hover:text-brand-teal font-medium inline-flex items-center transition-colors">
                          Read More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">No posts found</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search or filter criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to Apply These Insights?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how the strategies from our articles can be implemented in your business.
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

export default Blog;
