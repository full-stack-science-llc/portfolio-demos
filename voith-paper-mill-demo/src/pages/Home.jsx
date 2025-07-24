import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-fss-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fss-primary via-fss-secondary to-fss-charcoal"></div>
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="technical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#technical-grid)" />
          </svg>
        </div>
        {/* Data Visualization Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,400 Q200,350 400,380 T800,360 L1200,340 L1400,320" 
                  fill="none" stroke="white" strokeWidth="2" opacity="0.4"/>
            <path d="M0,500 Q250,450 500,470 T1000,450 L1400,430" 
                  fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
            <path d="M0,600 Q300,520 600,550 T1200,530 L1400,510" 
                  fill="none" stroke="white" strokeWidth="1" opacity="0.2"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turning Theory
              <span className="block text-fss-success">Into Value</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help enterprise, startups, and businesses transform AI/ML ideas into practical, 
              revenue-generating solutions that deliver measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demos"
                className="bg-white text-fss-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                See Demos
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-fss-primary transition-colors"
              >
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="rgb(249, 250, 251)" 
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ideation to implementation, we solve the right problems with the right solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-fss-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI/ML Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom models, LLM applications, agentic systems, and physics-informed solutions 
                tailored to your specific business challenges.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-fss-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Manufacturing process optimization, edge computing solutions, and traditional 
                automation that doesn't require ML when simpler solutions work better.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-fss-charcoal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training & Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Executive training, team building, AI roadmapping, and strategic planning 
                to help organizations successfully adopt and scale AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Simple Usually Equals Better
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We ask the hard questions first: "Is this a traditional automation problem or does it need bespoke ML work?" 
                "Will a simpler solution get you 80% of the way there?"
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach is solution-oriented, not technology-driven. We won't sell you something over-engineered 
                for personal financial gain. We believe in finding solutions that actually work, even if it means 
                sharing things you don't want to hear.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-fss-primary font-semibold hover:text-fss-secondary transition-colors"
              >
                Learn About Our Approach
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-fss-primary to-fss-charcoal rounded-2xl p-8 text-white border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-fss-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Approachability</h4>
                    <p className="text-white/90">Making complex AI/ML accessible to all business levels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-fss-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Trust</h4>
                    <p className="text-white/90">Honest assessments and recommendations for your success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-fss-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Communication</h4>
                    <p className="text-white/90">Clear, jargon-free explanations and regular updates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-fss-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Clarity</h4>
                    <p className="text-white/90">Well-defined objectives and measurable outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            One of the biggest challenges in AI/ML is seeing the tangible. 
            Our demos showcase real possibilities and practical applications.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paper Mill Process Simulator</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Real-time industrial process monitoring with predictive analytics, 
                anomaly detection, and automated alerting - demonstrating our expertise 
                in manufacturing automation and ML integration.
              </p>
              <Link 
                to="/demos"
                className="inline-block bg-fss-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-fss-primary/90 transition-colors"
              >
                Explore Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fss-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Turn Your Ideas Into Value?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how we can solve your specific challenges with practical, 
            results-driven AI and automation solutions.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-fss-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;