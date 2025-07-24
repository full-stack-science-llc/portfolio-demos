import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your interest! This form is not yet connected to a backend. Please connect with us via LinkedIn for now.');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fss-primary to-fss-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your AI/ML ideas into practical, value-generating solutions? 
            Let's discuss your challenges and explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h2>
              <p className="text-gray-600 mb-8">
                The more details you provide, the better we can understand your needs and provide relevant insights.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fss-primary focus:border-fss-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fss-primary focus:border-fss-primary transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fss-primary focus:border-fss-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fss-primary focus:border-fss-primary transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="ai-ml-development">AI/ML Development</option>
                      <option value="process-automation">Process Automation</option>
                      <option value="training-consulting">Training & Consulting</option>
                      <option value="strategic-planning">Strategic Planning</option>
                      <option value="feasibility-study">Feasibility Study</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fss-primary focus:border-fss-primary transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 1 month)</option>
                      <option value="short-term">Short term (1-3 months)</option>
                      <option value="medium-term">Medium term (3-6 months)</option>
                      <option value="long-term">Long term (6+ months)</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fss-primary focus:border-fss-primary transition-colors resize-none"
                    placeholder="Tell us about your challenge, objectives, and what success looks like. The more context you provide, the better we can help."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-fss-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-fss-primary/90 transition-colors shadow-lg"
                >
                  Send Message
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Note: This form is currently a prototype. For immediate contact, please reach out via LinkedIn.
                </p>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-fss-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h4>
                      <p className="text-gray-600 mb-2">
                        Connect with us on LinkedIn for immediate communication and to learn more about our work.
                      </p>
                      <a 
                        href="#" 
                        className="text-fss-primary font-medium hover:text-fss-secondary transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('LinkedIn profile link will be added soon. Please search for Full Stack Science on LinkedIn.');
                        }}
                      >
                        Find us on LinkedIn →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-fss-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h4>
                      <p className="text-gray-600">
                        We typically respond to inquiries within 24-48 hours. For urgent matters, 
                        LinkedIn direct message is the fastest way to reach us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-fss-primary to-fss-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Initial Conversation</h4>
                      <p className="text-white/90 text-sm">
                        We'll discuss your challenges, objectives, and what success looks like for your organization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Honest Assessment</h4>
                      <p className="text-white/90 text-sm">
                        We'll provide frank feedback on whether your problem needs ML, traditional automation, or a different approach entirely.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Collaborative Planning</h4>
                      <p className="text-white/90 text-sm">
                        If we're a good fit, we'll work together to design a solution that delivers real business value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQs */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Do you work with small businesses?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! We work with organizations of all sizes, from enterprise to startups to small businesses 
                      that want practical AI/ML integrations without technical complexity.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What if I'm not sure if I need AI/ML?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Perfect! We specialize in helping organizations determine the right approach. 
                      Sometimes traditional automation is more effective and cost-efficient.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Do you provide training?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Absolutely. We offer training from C-suite to workforce level, focusing on practical 
                      application and strategic planning for AI adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;