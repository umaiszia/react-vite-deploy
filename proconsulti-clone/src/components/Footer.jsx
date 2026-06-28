import React from 'react';

function Footer() {
  return (
    <footer className="bg-white p-5 md:p-10 border-t border-slate-100 font-['Poppins',_sans-serif] tracking-wide transition-all duration-300">
      
      {/* 1. THE MAIN BOX (Centers everything) */}
      <div className="max-w-7xl mx-auto">
        
        {/* 2. THE TOP PART (Stacked neatly on mobile, split on desktop) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-8 md:mb-10">
          
          {/* LEFT SIDE: Logo and Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Shrank logo slightly on mobile (h-9 to h-11) */}
            <img src="/proconsulti-logo.webp" alt="Logo" className="h-9 md:h-11 mb-3 md:mb-4 object-contain animate-fadeIn" />
            
            {/* Reduced text size to text-xs on mobile, scaling to text-sm on desktop */}
            <p className="text-slate-500 text-xs md:text-[14px] font-medium mb-5 md:mb-6 max-w-md leading-relaxed">
              Providing expert business consulting services with global standards and local expertise.
            </p>

            {/* Adjusted link fonts to text-[11px] on mobile to prevent massive blocky wrappers */}
            <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2 text-slate-700 font-semibold text-[11px] md:text-[13px]">
              <a href="#" className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600">Request a Demo</a>
              <a href="#" className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600">Contact us</a>
              <a href="#" className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600">FAQs</a>
              <a href="#" className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600">Privacy Policy</a>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Information */}
          {/* Swapped static text-[15px] with responsive text-xs md:text-sm, tightened gaps for mobile */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-slate-600 font-medium text-xs md:text-[14px] self-center md:self-start gap-2 md:gap-3 mt-2 md:mt-0">
            <p className="flex items-center gap-2.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600">
              <i className="fas fa-envelope text-slate-400 text-sm md:text-base w-5 text-center"></i> 
              <span>info@proconsulti.com</span>
            </p>
            <p className="flex items-center gap-2.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600 text-center md:text-left">
              <i className="fas fa-phone-alt text-slate-400 text-sm md:text-base w-5 text-center"></i> 
              <span>+92 51 8442121 | +92 51 2120733</span>
            </p>
            <p className="flex items-center gap-2.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600 text-center md:text-left">
              <i className="fas fa-mobile-alt text-slate-400 text-sm md:text-base w-5 text-center"></i> 
              <span>+92 340 5658884 | +92 321 5171516</span>
            </p>
            <p className="flex items-center gap-2.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-blue-600 text-center md:text-left max-w-xs md:max-w-none">
              <i className="fas fa-globe text-slate-400 text-sm md:text-base w-5 text-center"></i> 
              <span className="leading-relaxed">Pakistan | UAE | UK | Saudi Arabia | Afghanistan</span>
            </p>
          </div>

        </div>

        {/* 3. THE GREY LINE */}
        <hr className="border-slate-100 mb-5 md:mb-6" />

        {/* 4. THE BOTTOM PART (Copyright and Social Icons) */}
        {/* Adjusted tracking and font sizes so text-center looks tight and unified on phones */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 md:gap-6 text-[11px] md:text-xs text-slate-400 font-medium">
          
          <p className="text-center sm:text-left">© 2019-2026 ProConsult International. All rights reserved.</p>

          {/* Social Icons (Reduced from h-12 w-12 down to a compact h-9 w-9 on mobile) */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3">
            {[
              { icon: 'fa-linkedin-in', color: 'hover:bg-[#0077b5]' },
              { icon: 'fa-whatsapp', color: 'hover:bg-[#25D366]' },
              { icon: 'fa-instagram', color: 'hover:bg-[#E1306C]' },
              { icon: 'fa-twitter', color: 'hover:bg-[#1DA1F2]' },
              { icon: 'fa-youtube', color: 'hover:bg-[#FF0000]' },
              { icon: 'fa-tiktok', color: 'hover:bg-slate-900' },
              { icon: 'fa-facebook-f', color: 'hover:bg-[#1877F2]' }
            ].map((social, idx) => (
              <span 
                key={idx} 
                className={`group flex items-center justify-center bg-slate-50 h-8 w-8 md:h-10 md:w-10 rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-sm ${social.color}`}
              >
                <i className={`fab ${social.icon} text-slate-500 text-xs md:text-sm group-hover:text-white transition-colors duration-300`}></i>
              </span>
            ))}
          </div>
          
        </div>

      </div>
    </footer>
  );
}

export default Footer;