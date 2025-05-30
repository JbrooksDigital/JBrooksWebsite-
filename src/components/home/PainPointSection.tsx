import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PainPointSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Too Many Tools. Not Enough Time.
          </h2>
          <p className="text-lg text-gray-300">
            Most small teams juggle 5–10 apps just to stay organized—leads in spreadsheets, content in docs, calendars in chaos. 
            J. Brooks Digital replaces that chaos with an intelligent, integrated system tailored to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Core Benefits */}
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-brand-teal/50 transition-colors">
            <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Automate Repetitive Tasks</h3>
            <p className="text-gray-400">Replace manual busywork with fully automated workflows.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-brand-teal/50 transition-colors">
            <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Centralize Information</h3>
            <p className="text-gray-400">Keep your CRM, tasks, docs, and data in one secure workspace.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-brand-teal/50 transition-colors">
            <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Built-In AI</h3>
            <p className="text-gray-400">Generate content, answer data questions, and run voice assistants trained on your needs.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-brand-teal/50 transition-colors">
            <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Custom Systems That Grow</h3>
            <p className="text-gray-400">Your dashboard, your tools—custom-configured for how you work.</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <blockquote className="text-xl text-gray-300 italic mb-6">
            "We were running everything out of Google Sheets, email, and memory. Now we have a real system—and more time to actually grow."
          </blockquote>
          <cite className="text-brand-teal font-medium">— Alex P., Business Owner</cite>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Choose Your Free Custom Build</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">For Nonprofits</h4>
              <p className="text-gray-400 mb-4">Receive a tailored GPT-based assistant built to support grant writing.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">For Small Businesses & Solopreneurs</h4>
              <p className="text-gray-400 mb-4">Receive a free AI-readiness report that maps how automation and AI could streamline or scale their operations.</p>
            </div>
          </div>
          <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <Link to="/contact">Claim Free Custom Build</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection; 