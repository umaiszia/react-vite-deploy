import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 p-6 md:p-10 border-t border-gray-300 transition-all duration-300">
      
      {/* 1. THE MAIN BOX (Centers everything) */}
      <div className="max-w-7xl mx-auto">
        
        {/* 2. THE TOP PART (Split into Left and Right on desktop, stacked on mobile) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          
          {/* LEFT SIDE: Logo and Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/proconsulti-logo.webp" alt="Logo" className="h-12 mb-4 object-contain animate-fadeIn" />
            <p className="text-gray-600 mb-6 max-w-md">
              Providing expert business consulting services with global standards and local expertise.
            </p>

            {/* Simple blue links - wraps automatically on small viewports */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-blue-900 font-bold text-sm">
              <a href="#" className="hover:text-blue-600 hover:underline transition-colors duration-200">Request a Demo</a>
              <a href="#" className="hover:text-blue-600 hover:underline transition-colors duration-200">Contact us</a>
              <a href="#" className="hover:text-blue-600 hover:underline transition-colors duration-200">FAQs</a>
              <a href="#" className="hover:text-blue-600 hover:underline transition-colors duration-200">Privacy Policy</a>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Information */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-gray-700 text-sm md:text-base self-center md:self-start gap-3 mt-4 md:mt-0">
            <p className="flex items-center gap-3 hover:text-blue-900 transition-colors duration-200">
              <i className="fas fa-envelope text-blue-900 text-xl w-6 text-center"></i> 
              <span>info@proconsulti.com</span>
            </p>
            <p className="flex items-center gap-3 hover:text-blue-900 transition-colors duration-200 text-center md:text-left">
              <i className="fas fa-phone-alt text-blue-900 text-xl w-6 text-center"></i> 
              <span>+92 51 8442121 | +92 51 2120733</span>
            </p>
            <p className="flex items-center gap-3 hover:text-blue-900 transition-colors duration-200 text-center md:text-left">
              <i className="fas fa-mobile-alt text-blue-900 text-xl w-6 text-center"></i> 
              <span>+92 340 5658884 | +92 321 5171516</span>
            </p>
            <p className="flex items-center gap-3 hover:text-blue-900 transition-colors duration-200 text-center md:text-left max-w-sm md:max-w-none">
              <i className="fas fa-globe text-blue-900 text-xl w-6 text-center"></i> 
              <span>Pakistan | UAE | UK | Saudi Arabia | Afghanistan</span>
            </p>
          </div>

        </div>

        {/* 3. THE GREY LINE */}
        <hr className="border-gray-300 mb-6" />

        {/* 4. THE BOTTOM PART (Copyright and Social Icons) */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          
          <p className="text-center sm:text-left">© 2019-2026 ProConsult International. All rights reserved.</p>

          {/* Social Icons with Micro-animations */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: 'fa-linkedin-in', color: 'hover:bg-[#0077b5]' },
              { icon: 'fa-whatsapp', color: 'hover:bg-[#25D366]' },
              { icon: 'fa-instagram', color: 'hover:bg-[#E1306C]' },
              { icon: 'fa-twitter', color: 'hover:bg-[#1DA1F2]' },
              { icon: 'fa-youtube', color: 'hover:bg-[#FF0000]' },
              { icon: 'fa-tiktok', color: 'hover:bg-black' },
              { icon: 'fa-facebook-f', color: 'hover:bg-[#1877F2]' }
            ].map((social, idx) => (
              <span 
                key={idx} 
                className={`group flex items-center justify-center bg-gray-200 h-10 w-10 rounded-full cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-md ${social.color}`}
              >
                <i className={`fab ${social.icon} text-blue-900 text-base group-hover:text-white transition-colors duration-300`}></i>
              </span>
            ))}
          </div>
          
        </div>

      </div>
    </footer>
  );
}

export default Footer;