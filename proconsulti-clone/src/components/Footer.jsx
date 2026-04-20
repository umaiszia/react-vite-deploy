function Footer() {
  return (
    <footer className="bg-white-100 p-10 border-t border-gray-300">
      
      {/* 1. THE MAIN BOX (Centers everything) */}

      <div className="max-w-7xl mx-auto">
        
        {/* 2. THE TOP PART (Split into Left and Right) */}
      
        <div className="flex justify-between items-start mb-10">
          
          {/* LEFT SIDE: Logo and Text */}
      
          <div className="w-1/2">
            <img src="/proconsulti-logo.webp" alt="Logo" className="h-12 mb-4" />
            <p className="text-gray-600 mb-4">
              Providing expert business consulting services with global standards and local expertise.
            </p>

            {/* Simple blue links */}
            <div className="flex gap-4 text-blue-900 font-bold text-sm">
              <a href="#">Request a Demo</a>
              <a href="#">Contact us</a>
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Information */}
          
          <div className="text-unset text-gray-700">
            <p className="mb-2 "><i className="fas fa-envelope text-blue-900 text-xl pr-2"></i> <span>info@proconsulti.com</span></p>
            <p className="mb-2"><i className="fas fa-phone-alt text-blue-900 text-xl pr-1"></i> <span> +92 51 8442121 | +92 51 2120733</span></p>
            <p className="mb-2"><i className="fas fa-mobile-alt text-blue-900 text-xl pr-2"></i> <span> +92 340 5658884 | +92 321 5171516</span></p>
            <p><i className="fas fa-globe text-blue-900 text-xl pr-2"></i> Pakistan | UAE | UK | Saudi Arabia | Afghanistan</p>
          </div>

        </div>

        {/* 3. THE GREY LINE */}

        <hr className="border-gray-300 mb-6" />

        {/* 4. THE BOTTOM PART (Copyright and Social Icons) */}

        <div className="flex justify-between items-center text-sm text-gray-500">
          
          <p>© 2019-2026 ProConsult International. All rights reserved.</p>

          {/* Social Icons (Using Emoji for now to keep it simple!) */}

          <div className="flex gap-7">
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-linkedin-in text-blue-900 text-xl p-1 text-white"></i></span>
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-whatsapp text-blue-900 text-xl p-1 text-white"></i></span>
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-instagram text-blue-900 text-xl p-1 text-white"></i></span>
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-twitter text-blue-900 text-xl p-1 text-white"></i></span>
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-youtube text-blue-900 text-xl p-1 text-white"></i></span>
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-tiktok text-blue-900 text-xl p-1 text-white"></i></span>
            <span className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-blue-900 hover:text-white"><i className="fab fa-facebook-f text-blue-900 text-xl p-1 text-white"></i></span>
          </div>
          
        </div>

      </div>
    </footer>
  );
}

export default Footer;