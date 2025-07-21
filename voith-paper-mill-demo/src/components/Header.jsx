import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-voith-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-voith-primary tracking-tight">VOITH</h1>
          </div>
          
          {/* Title Section */}
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-voith-gray-700">Paper Mill Operations</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
