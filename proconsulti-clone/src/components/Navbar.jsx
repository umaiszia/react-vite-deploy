import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const toggleMobileSubMenu = (name) => {
    setMobileSubMenu(mobileSubMenu === name ? null : name);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100 font-['Montserrat'] tracking-wide">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
        
        {/* HAMBURGER (Left) */}
        <div className="lg:hidden flex items-center z-[100]">
          <button 
            className="text-slate-900 text-2xl focus:outline-none transition-all duration-200 hover:text-blue-600 active:scale-95" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* LOGO (Centered on Mobile, Left on Desktop) */}
        <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:ml-5">
          <a href="/" className="transition-opacity hover:opacity-90">
            <img src="proconsulti-logo.webp" alt="ProConsulti Logo" className="h-10 md:h-11 w-auto object-contain" />
          </a>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <ul className="hidden lg:flex gap-2 text-slate-800 text-[15px] font-semibold items-center">
          {/* 1. Capabilities */}
          <li className="relative group px-1">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">
              Capabilities <i className="fas fa-chevron-down text-[9px] opacity-70"></i>
            </button>
            <div className="absolute left-0 mt-0 w-72 bg-white shadow-xl border border-slate-100 rounded-xl py-2 hidden group-hover:block animate-fadeIn">
              <a href="/strategy" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Strategy, Transformation & Growth</a>
              <a href="/governance" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Governance, Risk & Resilience</a>
              <a href="/esg" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">ESG, Climate Risk & Reporting</a>
              <a href="/digital" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Digital, Technology, ERP & IFRS</a>
            </div>
          </li>

          <li className="px-1">
            <a href="/tech-ai" className="block px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">Tech & AI</a>
          </li>

          {/* 2. Insights */}
          <li className="relative group px-1">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">
              Insights <i className="fas fa-chevron-down text-[9px] opacity-70"></i>
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-slate-100 rounded-xl py-2 hidden group-hover:block animate-fadeIn">
              <a href="/case-studies" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Case Study</a>
              <a href="/news" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">News & Events</a>
              <a href="/tax-guidelines" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Tax Guidelines</a>
            </div>
          </li>

          {/* 3. About Us */}
          <li className="relative group px-1">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">
              About Us <i className="fas fa-chevron-down text-[9px] opacity-70"></i>
            </button>
            <div className="absolute left-0 mt-0 w-60 bg-white shadow-xl border border-slate-100 rounded-xl py-2 hidden group-hover:block animate-fadeIn">
              <a href="/about" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">About Us</a>
              <a href="/journey" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Our Journey</a>
              <a href="/locations" className="block mx-2 px-4 py-2.5 text-[14px] text-slate-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white">Locations</a>
            </div>
          </li>

          <li className="px-1"><a href="/team" className="block px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">Team</a></li>
          <li className="px-1"><a href="/clients" className="block px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">Clients</a></li>
          <li className="px-1"><a href="/contact" className="block px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-200 hover:text-blue-600">Contact</a></li>
        </ul>
        
        <div className="hidden lg:block w-10"></div>

        {/* --- MOBILE SIDEBAR --- */}
        <div 
          className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[110] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[120] shadow-2xl transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-white">
            <img src="proconsulti-logo.webp" alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-2xl hover:text-blue-600 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex flex-col text-slate-800 text-[13px] font-semibold overflow-y-auto h-[calc(100%-80px)] bg-white p-3 gap-1">
            
            {/* MOBILE CAPABILITIES */}
            <div>
              <button 
                onClick={() => toggleMobileSubMenu('capabilities')}
                className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${mobileSubMenu === 'capabilities' ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'hover:bg-slate-50 text-slate-800'}`}
              >
                Capabilities <i className={`fas ${mobileSubMenu === 'capabilities' ? 'fa-chevron-down' : 'fa-chevron-right'} text-[10px]`}></i>
              </button>
              {mobileSubMenu === 'capabilities' && (
                <div className="mt-1 ml-2 pl-2 border-l-2 border-blue-100 flex flex-col gap-0.5">
                  <a href="/strategy" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">Strategy & Growth</a>
                  <a href="/governance" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">Governance & Risk</a>
                  <a href="/digital" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">Digital & Tech</a>
                </div>
              )}
            </div>

            <a href="/tech-ai" className="px-4 py-3.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all">Tech & AI</a>

            {/* MOBILE INSIGHTS */}
            <div>
              <button 
                onClick={() => toggleMobileSubMenu('insights')}
                className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${mobileSubMenu === 'insights' ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'hover:bg-slate-50 text-slate-800'}`}
              >
                Insights <i className={`fas ${mobileSubMenu === 'insights' ? 'fa-chevron-down' : 'fa-chevron-right'} text-[10px]`}></i>
              </button>
              {mobileSubMenu === 'insights' && (
                <div className="mt-1 ml-2 pl-2 border-l-2 border-blue-100 flex flex-col gap-0.5">
                  <a href="/case-studies" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">Case Studies</a>
                  <a href="/news" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">News & Events</a>
                </div>
              )}
            </div>

            {/* MOBILE ABOUT US */}
            <div>
              <button 
                onClick={() => toggleMobileSubMenu('about')}
                className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${mobileSubMenu === 'about' ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'hover:bg-slate-50 text-slate-800'}`}
              >
                About Us <i className={`fas ${mobileSubMenu === 'about' ? 'fa-chevron-down' : 'fa-chevron-right'} text-[10px]`}></i>
              </button>
              {mobileSubMenu === 'about' && (
                <div className="mt-1 ml-2 pl-2 border-l-2 border-blue-100 flex flex-col gap-0.5">
                  <a href="/about" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">About Us</a>
                  <a href="/locations" className="block px-4 py-2.5 text-xs text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all">Locations</a>
                </div>
              )}
            </div>

            <a href="/team" className="px-4 py-3.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all">Team</a>
            <a href="/clients" className="px-4 py-3.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all">Clients</a>
            <a href="/contact" className="px-4 py-3.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;