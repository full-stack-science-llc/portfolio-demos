import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaperMillApp from '../PaperMillApp';

const Demos = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const demos = [
    {
      id: 'paper-mill',
      title: 'Paper Mill Process Simulator',
      description: 'Real-time industrial process monitoring with predictive analytics, anomaly detection, and automated alerting.',
      technologies: ['React', 'Chart.js', 'Real-time Data', 'Process Simulation'],
      features: [
        'Live sensor data visualization',
        'Interactive process flow diagram',
        'Anomaly detection and alerting',
        'Historical data analysis',
        'Component-level monitoring'
      ],
      businessValue: [
        'Predictive maintenance capabilities',
        'Reduced downtime through early detection',
        'Process optimization insights',
        'Real-time decision support'
      ],
      industries: ['Manufacturing', 'Process Industries', 'Pulp & Paper'],
      complexity: 'Enterprise',
      component: PaperMillApp
    }
  ];

  const futureDemos = [
    {
      title: 'Supply Chain Optimization',
      description: 'ML-powered supply chain analytics with demand forecasting and inventory optimization.',
      status: 'coming-soon'
    },
    {
      title: 'Quality Control Vision System',
      description: 'Computer vision-based quality inspection with real-time defect detection.',
      status: 'coming-soon'
    },
    {
      title: 'Predictive Maintenance Dashboard',
      description: 'IoT sensor data analysis with failure prediction and maintenance scheduling.',
      status: 'coming-soon'
    }
  ];

  if (selectedDemo) {
    const demo = demos.find(d => d.id === selectedDemo);
    const DemoComponent = demo.component;
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Demo Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="flex items-center text-fss-primary hover:text-fss-secondary transition-colors mr-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Demos
                </button>
                <h1 className="text-2xl font-bold text-gray-900">{demo.title}</h1>
              </div>
              <Link
                to="/contact"
                className="bg-fss-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-fss-primary/90 transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
        
        {/* Demo Content */}
        <DemoComponent />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fss-primary to-fss-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Demos
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience our AI/ML and automation solutions in action. These demos showcase 
            real-world applications and demonstrate the tangible value we deliver.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Making the Intangible Tangible
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                One of the biggest challenges in AI/ML is seeing the practical applications. 
                Our interactive demos let you experience the technology in real-world contexts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-fss-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">See It Work</h3>
                <p className="text-gray-600">
                  Interactive demonstrations that show real functionality and business impact.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-fss-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Understand the Value</h3>
                <p className="text-gray-600">
                  Clear examples of how technology translates to business outcomes and ROI.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-fss-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start the Conversation</h3>
                <p className="text-gray-600">
                  Use these examples to discuss how similar solutions could work for your challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Demos */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Available Demos
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore these interactive demonstrations to see our capabilities in action.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8 mb-16">
            {demos.map((demo) => (
              <div key={demo.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{demo.description}</p>
                    </div>
                    <span className="bg-fss-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {demo.complexity}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-1">
                        {demo.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <svg className="w-4 h-4 text-fss-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Business Value</h4>
                      <ul className="space-y-1">
                        {demo.businessValue.map((value, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <svg className="w-4 h-4 text-fss-secondary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {demo.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Industries</h4>
                      <ul className="space-y-1">
                        {demo.industries.map((industry, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            {industry}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setSelectedDemo(demo.id)}
                      className="bg-fss-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-fss-primary/90 transition-colors flex-1 sm:flex-none"
                    >
                      Launch Demo
                    </button>
                    <Link
                      to="/contact"
                      className="border-2 border-fss-primary text-fss-primary px-6 py-3 rounded-lg font-semibold hover:bg-fss-primary hover:text-white transition-colors text-center flex-1 sm:flex-none"
                    >
                      Discuss Similar Solution
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming Soon Demos */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We're continuously expanding our demo library to showcase more capabilities and use cases.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {futureDemos.map((demo, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-2 border-dashed border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{demo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{demo.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fss-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inspired by What You've Seen?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            These demos represent just a fraction of what's possible. Let's discuss how 
            we can create similar solutions tailored to your specific challenges and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-fss-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-fss-primary transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demos;