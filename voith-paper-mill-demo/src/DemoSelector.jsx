import React, { useState } from 'react';
import App from './App';
import RealisticApp from './RealisticApp';

function DemoSelector() {
  const [selectedDemo, setSelectedDemo] = useState('realistic');

  if (selectedDemo === 'original') {
    return <App />;
  }

  if (selectedDemo === 'realistic') {
    return <RealisticApp />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-voith-primary to-blue-700 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Voith Paper Mill Demo
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Choose your simulation experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Original Demo */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Original Demo</h2>
              <p className="text-gray-600 mb-6">
                Basic sensor simulation with simple issue effects
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Simple sensor types
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic issue simulation
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quick to understand
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Immediate effects
              </div>
            </div>

            <button
              onClick={() => setSelectedDemo('original')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Launch Original Demo
            </button>
          </div>

          {/* Realistic Demo */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-voith-primary">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-voith-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-voith-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Realistic Simulation
                <span className="ml-2 bg-voith-primary text-white text-xs px-2 py-1 rounded-full">ENHANCED</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Industry-authentic sensor simulation with realistic dynamics
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-voith-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>40+ industry-realistic sensors</strong>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-voith-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Authentic sensor ranges & units</strong>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-voith-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Time-delayed cascade effects</strong>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-voith-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Primary/secondary responses</strong>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-voith-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Realistic sensor dynamics</strong>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-voith-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <strong>Industry-researched issues</strong>
              </div>
            </div>

            <button
              onClick={() => setSelectedDemo('realistic')}
              className="w-full bg-voith-primary text-white py-3 px-6 rounded-lg hover:bg-voith-primary-dark transition-colors duration-200 font-medium"
            >
              Launch Realistic Demo ⚡
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-100 text-sm">
            The realistic simulation is based on comprehensive research of actual paper mill operations,
            <br />
            sensor ranges, and failure patterns for authentic operator experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DemoSelector;