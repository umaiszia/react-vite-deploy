import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const toggleMobileSubMenu = (name) => {
    setMobileSubMenu(mobileSubMenu === name ? null : name);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
        
        {/* HAMBURGER (Left) */}
        <div className="lg:hidden flex items-center z-[100]">
          <button 
            className="text-blue-900 text-3xl focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* LOGO (Centered on Mobile, Left on Desktop) */}
        <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:ml-5">
          <a href="/">
            <img src="proconsulti-logo.webp" alt="ProConsulti Logo" className="h-10 md:h-12 w-auto" />
          </a>
        </div>

        {/* --- DESKTOP NAVIGATION (Restored all dropdowns) --- */}
        <ul className="hidden lg:flex gap-10 text-blue-900 font-semibold items-center">
          {/* 1. Capabilities */}
          <li className="relative group">
            <button className="flex items-center gap-2 py-2 hover:text-blue-600 transition-all">
              Capabilities <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
            <div className="absolute left-0 mt-0 w-72 bg-white shadow-xl border border-gray-100 rounded-b-lg py-4 hidden group-hover:block animate-fadeIn">
              <a href="/strategy" className="block px-6 py-2 hover:bg-blue-50">Strategy, Transformation & Growth</a>
              <a href="/governance" className="block px-6 py-2 hover:bg-blue-50">Governance, Risk & Resilience</a>
              <a href="/esg" className="block px-6 py-2 hover:bg-blue-50">ESG, Climate Risk & Reporting</a>
              <a href="/digital" className="block px-6 py-2 hover:bg-blue-50">Digital, Technology, ERP & IFRS</a>
            </div>
          </li>

          <li><a href="/tech-ai" className="hover:text-blue-600">Tech & AI</a></li>

          {/* 2. Insights */}
          <li className="relative group">
            <button className="flex items-center gap-2 py-2 hover:text-blue-600 transition-all">
              Insights <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg py-4 hidden group-hover:block animate-fadeIn">
              <a href="/case-studies" className="block px-6 py-2 hover:bg-blue-50">Case Study</a>
              <a href="/news" className="block px-6 py-2 hover:bg-blue-50">News & Events</a>
              <a href="/tax-guidelines" className="block px-6 py-2 hover:bg-blue-50">Tax Guidelines</a>
            </div>
          </li>

          {/* 3. About Us */}
          <li className="relative group">
            <button className="flex items-center gap-2 py-2 hover:text-blue-600 transition-all">
              About Us <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
            <div className="absolute left-0 mt-0 w-60 bg-white shadow-xl border border-gray-100 rounded-b-lg py-4 hidden group-hover:block animate-fadeIn">
              <a href="/about" className="block px-6 py-2 hover:bg-blue-50">About Us</a>
              <a href="/journey" className="block px-6 py-2 hover:bg-blue-50">Our Journey</a>
              <a href="/locations" className="block px-6 py-2 hover:bg-blue-50">Locations</a>
            </div>
          </li>

          <li><a href="/team" className="hover:text-blue-600">Team</a></li>
          <li><a href="/clients" className="hover:text-blue-600">Clients</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        
        <div className="hidden lg:block w-10"></div>

        {/* --- MOBILE SIDEBAR --- */}
        <div 
          className={`fixed inset-0 bg-black/60 z-[110] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div className={`fixed top-0 left-0 h-full w-[300px] bg-[#d1eef8] z-[120] shadow-2xl transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          <div className="flex items-center justify-between p-5 border-b border-blue-100 bg-white">
            <img src="proconsulti-logo.webp" alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-blue-900 text-3xl">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex flex-col text-blue-900 font-semibold overflow-y-auto h-[calc(100%-80px)]">
            
            {/* MOBILE CAPABILITIES */}
            <button 
              onClick={() => toggleMobileSubMenu('capabilities')}
              className={`w-full flex justify-between items-center px-6 py-4 border-b border-blue-100 ${mobileSubMenu === 'capabilities' ? 'bg-blue-900 text-white' : ''}`}
            >
              Capabilities <i className={`fas ${mobileSubMenu === 'capabilities' ? 'fa-chevron-down' : 'fa-chevron-right'} text-xs`}></i>
            </button>
            {mobileSubMenu === 'capabilities' && (
              <div className="bg-white/40">
                <a href="/strategy" className="block px-10 py-3 text-sm border-b border-blue-50">Strategy & Growth</a>
                <a href="/governance" className="block px-10 py-3 text-sm border-b border-blue-50">Governance & Risk</a>
                <a href="/digital" className="block px-10 py-3 text-sm">Digital & Tech</a>
              </div>
            )}

            <a href="/tech-ai" className="px-6 py-4 border-b border-blue-100">Tech & AI</a>

            {/* MOBILE INSIGHTS */}
            <button 
              onClick={() => toggleMobileSubMenu('insights')}
              className={`w-full flex justify-between items-center px-6 py-4 border-b border-blue-100 ${mobileSubMenu === 'insights' ? 'bg-blue-900 text-white' : ''}`}
            >
              Insights <i className={`fas ${mobileSubMenu === 'insights' ? 'fa-chevron-down' : 'fa-chevron-right'} text-xs`}></i>
            </button>
            {mobileSubMenu === 'insights' && (
              <div className="bg-white/40">
                <a href="/case-studies" className="block px-10 py-3 text-sm">Case Studies</a>
                <a href="/news" className="block px-10 py-3 text-sm">News & Events</a>
              </div>
            )}

            {/* MOBILE ABOUT US */}
            <button 
              onClick={() => toggleMobileSubMenu('about')}
              className={`w-full flex justify-between items-center px-6 py-4 border-b border-blue-100 ${mobileSubMenu === 'about' ? 'bg-blue-900 text-white' : ''}`}
            >
              About Us <i className={`fas ${mobileSubMenu === 'about' ? 'fa-chevron-down' : 'fa-chevron-right'} text-xs`}></i>
            </button>
            {mobileSubMenu === 'about' && (
              <div className="bg-white/40">
                <a href="/about" className="block px-10 py-3 text-sm border-b border-blue-50">About Us</a>
                <a href="/locations" className="block px-10 py-3 text-sm">Locations</a>
              </div>
            )}

            <a href="/team" className="px-6 py-4 border-b border-blue-100">Team</a>
            <a href="/clients" className="px-6 py-4 border-b border-blue-100">Clients</a>
            <a href="/contact" className="px-6 py-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;