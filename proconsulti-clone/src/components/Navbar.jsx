import React, { useState } from 'react';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close dropdown when clicking outside (optional but helpful)
  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl flex justify-between items-center p-4">
        
        {/* LOGO */}
        <div className="flex-shrink-0 ml-5">
          <a href="/">
            <img src="proconsulti-logo.webp" alt="ProConsulti Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className="flex gap-15 text-blue-900 font-semibold items-center">
          
          {/* 1. CAPABILITIES (Dropdown) */}
          <li className="relative group">
            <button className="flex items-center gap-4 py-2 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300">
              Capabilities <i className="fas fa-chevron-down text-[10px] ml-1"></i>
            </button>
            
            <div className="absolute left-0 mt-0 w-72 bg-white shadow-xl border border-gray-100 rounded-b-lg py-4 hidden group-hover:block animate-fadeIn">
              <a href="/strategy" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Strategy, Transformation & Growth</a>
              <a href="/governance" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Governance, Risk & Resilience</a>
              <a href="/esg" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">ESG, Climate Risk & Reporting</a>
              <a href="/digital" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Digital, Technology, ERP & IFRS</a>
              <a href="/pricing" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Cross-Border Transactions & Transfer Pricing</a>
            </div>
          </li>

          <li>
            <a href="/tech-ai" className="py-2 hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">Tech & AI</a>
          </li>

          {/* 2. INSIGHTS (Dropdown) */}
          <li className="relative group">
            <button className="flex items-center gap-4 py-2 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300">
              Insights <i className="fas fa-chevron-down text-[10px] ml-1"></i>
            </button>
            
            <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg py-4 hidden group-hover:block animate-fadeIn">
              {/* Heading Section */}
              <div className="px-6 py-2">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-widest">Research & Publications</span>
                <a href="/case-studies" className="block mt-1 pl-2 text-sm hover:text-blue-600 hover:underline">Case Study</a>
              </div>
              <div className="px-6 py-2">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-widest">Events</span>
                <a href="/news" className="block mt-1 pl-2 text-sm hover:text-blue-600 hover:underline">News & Events</a>
              </div>
              <div className="px-6 py-2">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-widest">Guidelines</span>
                <a href="/tax-comparison" className="block mt-1 pl-2 text-sm hover:text-blue-600 hover:underline">Tax Rates Comparison</a>
                <a href="/tax-guidelines" className="block mt-1 pl-2 text-sm hover:text-blue-600 hover:underline">Tax Guidelines</a>
              </div>
            </div>
          </li>

          {/* 3. ABOUT US (Dropdown) */}
          <li className="relative group">
            <button className="flex items-center gap-4 py-2 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300">
              About Us <i className="fas fa-chevron-down text-[10px] ml-1"></i>
            </button>
            
            <div className="absolute left-0 mt-0 w-60 bg-white shadow-xl border border-gray-100 rounded-b-lg py-4 hidden group-hover:block animate-fadeIn">
              <a href="/about" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">About Us</a>
              <a href="/affiliates" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Affiliates & Partners</a>
              <a href="/journey" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Journey of Our Firm</a>
              <a href="/locations" className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors">Our Contacts & Locations</a>
              <a href="/demo" className="block px-6 py-2 text-blue-600 font-bold hover:bg-blue-50 transition-colors">Request a Demo</a>
            </div>
          </li>

          <li>
            <a href="/team" className="py-2 hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">Team</a>
          </li>
          <li>
            <a href="/clients" className="py-2 hover:text-blue-600 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">Clients</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;