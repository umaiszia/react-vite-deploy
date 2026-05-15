import React, { useState } from 'react';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  // State to handle mobile sidebar toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Added mx-auto and max-w-7xl to center the content on large screens */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        {/* LOGO & HAMBURGER SECTION */}
        <div className="flex items-center gap-15 ml-5">
          {/* 1. HAMBURGER BUTTON - Visible only on mobile/tablet */}
          <button 
            className="lg:hidden text-blue-900 text-3xl focus:outline-none z-[100]" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="flex-shrink-0">
            <a href="/">
              <img src="proconsulti-logo.webp" alt="ProConsulti Logo" className="h-12 w-auto" />
            </a>
          </div>
        </div>

        {/* NAVIGATION LINKS - Hidden on mobile, flex on desktop */}
        <ul className="hidden lg:flex gap-15 text-blue-900 font-semibold items-center">
          
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

        {/* --- MOBILE SIDEBAR & OVERLAY --- */}
        {/* Overlay Background */}
        <div 
          className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#d1eef8] z-[70] shadow-2xl transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-blue-100 bg-white/50">
            <img src="proconsulti-logo.webp" alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-blue-900 text-2xl">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex flex-col text-blue-900 font-semibold overflow-y-auto h-[calc(100%-80px)]">
            <a href="/capabilities" className="flex justify-between items-center px-6 py-4 bg-blue-900 text-white border-b border-blue-800">
              Capabilities <i className="fas fa-chevron-right text-xs"></i>
            </a>
            <a href="/tech-ai" className="px-6 py-4 border-b border-blue-100 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>Tech & AI</a>
            <a href="/insights" className="px-6 py-4 border-b border-blue-100 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>Insights</a>
            <a href="/about" className="px-6 py-4 border-b border-blue-100 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="/team" className="px-6 py-4 border-b border-blue-100 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
            <a href="/clients" className="px-6 py-4 border-b border-blue-100 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>Client</a>
            <a href="/contact" className="px-6 py-4 border-b border-blue-100 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="/careers" className="px-6 py-4 hover:bg-blue-100" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;