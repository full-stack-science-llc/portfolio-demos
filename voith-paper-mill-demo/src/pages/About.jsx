import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fss-primary to-fss-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Full Stack Science
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between AI/ML theory and practical business value, 
            guided by our core principles of approachability, trust, communication, and clarity.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Full Stack Science, we believe that the most powerful AI and automation solutions 
                are those that solve real business problems. Our mission is simple: turn your theoretical 
                ideas into practical, value-generating implementations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work across the entire spectrum - from enterprise leaders seeking strategic advantage, 
                to startups needing rapid prototyping, to small businesses wanting practical integrations 
                without the technical complexity.
              </p>
              <div className="bg-fss-primary/5 border border-fss-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-fss-primary mb-3">Our Guiding Philosophy</h3>
                <p className="text-gray-700 italic">
                  "Simpler usually equals better, and solutioning together usually leads to better 
                  outcomes with shared commitment to delivering something of value."
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-fss-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Approachability</h4>
                    <p className="text-gray-600">
                      Making complex AI/ML concepts accessible to business leaders at every level, 
                      from C-suite to workforce.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-fss-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Trust</h4>
                    <p className="text-gray-600">
                      Providing honest assessments and recommendations, even when it means sharing 
                      difficult truths or simpler alternatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-fss-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Communication</h4>
                    <p className="text-gray-600">
                      Clear, jargon-free explanations and regular updates throughout every project, 
                      ensuring everyone stays aligned.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-fss-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Clarity</h4>
                    <p className="text-gray-600">
                      Well-defined objectives, transparent processes, and measurable outcomes 
                      that deliver tangible business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ask the hard questions first, then build solutions that actually work.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Right Questions</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 border-l-4 border-fss-primary p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "Is this a traditional automation problem or does it need bespoke ML work?"
                  </h4>
                  <p className="text-gray-600">
                    Not every problem needs machine learning. Sometimes a well-designed automation 
                    solution delivers better ROI and reliability.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-fss-secondary p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "Will a simpler solution get you 80% of the way there?"
                  </h4>
                  <p className="text-gray-600">
                    After understanding your actual goals and objectives, we often find that 
                    elegant, simple solutions provide tremendous value.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-fss-accent p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "What does success actually look like for your business?"
                  </h4>
                  <p className="text-gray-600">
                    We focus on measurable business outcomes, not just technical achievements. 
                    Every solution must deliver tangible value.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-fss-primary to-fss-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Solution-Oriented Mindset</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>We won't sell you something over-engineered for personal financial gain</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>We believe in finding solutions that actually work, even if it means sharing things you don't want to hear</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>Solutioning together leads to better outcomes with shared commitment to value delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep background in physical sciences with practical experience across diverse technologies and domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI/ML Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• LLM-based applications</li>
                <li>• Agentic AI systems</li>
                <li>• Forecasting models</li>
                <li>• Anomaly detection</li>
                <li>• Traditional NLP</li>
                <li>• Classification systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Physics-informed models</li>
                <li>• Bayesian modeling</li>
                <li>• Structured learning</li>
                <li>• Clustering algorithms</li>
                <li>• Edge computing</li>
                <li>• Real-time processing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Deployment Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cloud architectures</li>
                <li>• On-premises solutions</li>
                <li>• Edge deployments</li>
                <li>• CI/CD pipelines</li>
                <li>• Monitoring & scaling</li>
                <li>• Production optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Full Stack Science?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay on the cutting edge and we like to teach folks, but we're not here to impress you with complexity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-fss-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cutting-Edge Knowledge</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay current with the latest advances in AI/ML, but we apply them judiciously 
                where they add real value to your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-fss-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in empowering our clients with knowledge, offering training and guidance 
                that builds internal capabilities alongside our implementations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-fss-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions deliver measurable business outcomes because we focus on solving 
                the right problems with appropriate technology and clear success metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-fss-primary to-fss-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Solve Problems Together
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ready to turn your AI/ML ideas into practical, value-generating solutions? 
            Let's start with an honest conversation about your challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-fss-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Conversation
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-fss-primary transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;