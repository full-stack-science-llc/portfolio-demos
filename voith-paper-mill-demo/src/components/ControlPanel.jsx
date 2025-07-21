import React from 'react';
import { ISSUES } from '../constants/millData';

const issueKeys = Object.keys(ISSUES);

function ControlPanel({ introduceIssue, resetSimulation, activeIssue }) {
  const handleIntroduceIssue = () => {
    const randomIssueKey = issueKeys[Math.floor(Math.random() * issueKeys.length)];
    introduceIssue(randomIssueKey);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-voith-gray-700 mb-4">Simulation Controls</h3>
      
      <div className="space-y-3">
        <button
          onClick={handleIntroduceIssue}
          className="w-full voith-btn-primary text-sm"
          disabled={activeIssue}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Introduce Issue
        </button>
        
        <button
          onClick={resetSimulation}
          className="w-full voith-btn-secondary text-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Simulation
        </button>
      </div>
      
      {activeIssue && (
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-amber-800">Active Issue</h4>
              <p className="text-xs text-amber-700">{ISSUES[activeIssue].name}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-voith-gray-200">
        <p className="text-xs text-voith-gray-500">
          Simulate operational scenarios to test the system's response.
        </p>
      </div>
    </div>
  );
}

export default ControlPanel;
