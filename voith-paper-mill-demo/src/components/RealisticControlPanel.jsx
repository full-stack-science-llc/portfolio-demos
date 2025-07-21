import React, { useState } from 'react';
import { ENHANCED_ISSUES } from '../constants/realisticMillData';

const severityColors = {
  critical: 'bg-red-500 hover:bg-red-600',
  high: 'bg-orange-500 hover:bg-orange-600',
  medium: 'bg-yellow-500 hover:bg-yellow-600',
  low: 'bg-blue-500 hover:bg-blue-600',
};

const severityTextColors = {
  critical: 'text-red-700',
  high: 'text-orange-700',
  medium: 'text-yellow-700',
  low: 'text-blue-700',
};

function RealisticControlPanel({ 
  introduceIssue, 
  clearIssue, 
  resetSimulation, 
  activeIssues,
  getAvailableIssues 
}) {
  const [selectedIssue, setSelectedIssue] = useState('');
  const availableIssues = getAvailableIssues();

  const handleIntroduceIssue = () => {
    if (selectedIssue && !activeIssues.includes(selectedIssue)) {
      introduceIssue(selectedIssue);
    }
  };

  const handleClearIssue = (issueKey) => {
    clearIssue(issueKey);
  };

  const getIssueInfo = (issueKey) => {
    return ENHANCED_ISSUES[issueKey] || { name: issueKey, severity: 'medium' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-voith-gray-800 mb-2">
          Process Control Center
        </h3>
        <p className="text-sm text-voith-gray-600">
          Simulate realistic paper mill issues with industry-authentic sensor responses
        </p>
      </div>

      {/* Issue Introduction */}
      <div className="space-y-4">
        <h4 className="font-medium text-voith-gray-700">Introduce Issue</h4>
        
        <div className="space-y-3">
          <select
            value={selectedIssue}
            onChange={(e) => setSelectedIssue(e.target.value)}
            className="w-full px-3 py-2 border border-voith-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-voith-primary focus:border-transparent text-sm"
          >
            <option value="">Select an issue...</option>
            {availableIssues.map((issue) => (
              <option 
                key={issue.key} 
                value={issue.key}
                disabled={activeIssues.includes(issue.key)}
              >
                {issue.name} ({issue.severity})
              </option>
            ))}
          </select>
          
          <button
            onClick={handleIntroduceIssue}
            disabled={!selectedIssue || activeIssues.includes(selectedIssue)}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
          >
            {activeIssues.includes(selectedIssue) ? 'Issue Already Active' : 'Introduce Issue'}
          </button>
        </div>
      </div>

      {/* Active Issues */}
      <div className="space-y-4">
        <h4 className="font-medium text-voith-gray-700">
          Active Issues 
          {activeIssues.length > 0 && (
            <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
              {activeIssues.length}
            </span>
          )}
        </h4>
        
        {activeIssues.length === 0 ? (
          <div className="text-center py-6 text-voith-gray-500 text-sm bg-green-50 rounded-lg border border-green-200">
            <div className="w-8 h-8 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            All systems operating normally
          </div>
        ) : (
          <div className="space-y-2">
            {activeIssues.map((issueKey) => {
              const issue = getIssueInfo(issueKey);
              return (
                <div 
                  key={issueKey}
                  className="flex items-center justify-between p-3 bg-white border border-voith-gray-200 rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      issue.severity === 'critical' ? 'bg-red-500 animate-pulse' :
                      issue.severity === 'high' ? 'bg-orange-500' :
                      issue.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div>
                      <div className="font-medium text-voith-gray-800 text-sm">
                        {issue.name}
                      </div>
                      <div className={`text-xs ${severityTextColors[issue.severity]}`}>
                        {issue.severity} severity
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleClearIssue(issueKey)}
                    className="px-3 py-1 text-xs bg-voith-gray-100 text-voith-gray-700 rounded hover:bg-voith-gray-200 focus:outline-none focus:ring-2 focus:ring-voith-primary focus:ring-offset-2 transition-colors duration-200"
                  >
                    Resolve
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Issue Information */}
      {selectedIssue && (
        <div className="space-y-3">
          <h4 className="font-medium text-voith-gray-700">Issue Details</h4>
          <div className="p-4 bg-voith-gray-50 rounded-lg border border-voith-gray-200">
            {(() => {
              const issue = getIssueInfo(selectedIssue);
              return (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-voith-gray-800">{issue.name}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      issue.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      issue.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                      issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {issue.severity}
                    </span>
                  </div>
                  
                  {issue.affectedComponents && (
                    <div className="text-xs text-voith-gray-600">
                      <span className="font-medium">Affected Sections:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {issue.affectedComponents.map((component) => (
                          <span 
                            key={component}
                            className="px-2 py-1 bg-white rounded border text-xs"
                          >
                            {component.replace('_', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs text-voith-gray-600">
                    <span className="font-medium">Response Pattern:</span>
                    <div className="mt-1 space-y-1">
                      {issue.primaryEffects && Object.keys(issue.primaryEffects).length > 0 && (
                        <div>• Primary effects: Immediate sensor response</div>
                      )}
                      {issue.secondaryEffects && Object.keys(issue.secondaryEffects).length > 0 && (
                        <div>• Secondary effects: Process propagation (30s-5min)</div>
                      )}
                      {issue.downstreamEffects && Object.keys(issue.downstreamEffects).length > 0 && (
                        <div>• Downstream effects: Quality impact (5-30min)</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Reset Controls */}
      <div className="pt-4 border-t border-voith-gray-200">
        <button
          onClick={resetSimulation}
          className="w-full bg-voith-gray-600 text-white px-4 py-2 rounded-lg hover:bg-voith-gray-700 focus:outline-none focus:ring-2 focus:ring-voith-gray-500 focus:ring-offset-2 transition-colors duration-200 text-sm font-medium"
        >
          Reset All Issues
        </button>
      </div>

      {/* Information Footer */}
      <div className="text-xs text-voith-gray-500 bg-voith-gray-50 p-3 rounded-lg">
        <div className="font-medium mb-1">Realistic Simulation Features:</div>
        <ul className="space-y-1">
          <li>• Industry-authentic sensor ranges and responses</li>
          <li>• Time-delayed cascade effects between sections</li>
          <li>• Primary, secondary, and downstream sensor impacts</li>
          <li>• Realistic sensor noise and dynamics</li>
        </ul>
      </div>
    </div>
  );
}

export default RealisticControlPanel;