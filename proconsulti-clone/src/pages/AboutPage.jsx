import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="bg-blue-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
            ProConsult International is a SECP-registered leading consultancy firm specializing in 
            outsourcing for management advisory services, tax functions, legal services, and 
            comprehensive business solutions.
          </p>
        </div>
      </section>

      {/* 2. BREADCRUMB BAR */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center text-sm font-medium">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="mx-3 text-gray-400">/</span>
          <span className="text-gray-500 cursor-default">About Us</span>
        </div>
      </nav>

      {/* 3. CORE CONTENT SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* --- JOURNEY SECTION --- */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Journey: The History of ProConsult International
            </h2>
            <div className="w-20 h-1 rounded-full bg-blue-900"></div>
          </div>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed mb-20">
            <p>
              Founded on November 19, 2019, ProConsult International was established with a vision to 
              redefine consulting services by offering innovative, client-centric solutions in 
              management advisory, tax, legal, audit, and business outsourcing.
            </p>

            <div className="bg-white">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-900 w-fit pr-1">Growth and Expansion</h3>
              <p className="mb-6">
                Starting in Pakistan, ProConsult International quickly gained recognition for its 
                high-quality services. Our success led to rapid expansion, enabling us to establish 
                a global footprint in:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Afghanistan", "United Kingdom", "Kingdom of Saudi Arabia", "United Arab Emirates (UAE)"].map((location) => (
                  <div key={location} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
                    <span className="font-semibold text-blue-900">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Recognizing the growing demand for specialized consulting services, we further 
              strengthened our Middle East presence with the formation of ABUD Management 
              Consultancy in Dubai, UAE.
            </p>
          </div>

          {/* --- WHO WE ARE SECTION --- */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6">
                ProConsult International is a leading consultancy firm specializing in outsourcing for management advisory services, tax functions, legal services, and business solutions. Our company is registered with the Securities and Exchange Commission of Pakistan (SECP) and operates through a network of global member firms. We take pride in our exceptional team of professionals, including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {[
                    "Chartered Accountants (CAs, ACCAs, CPAs)",
                    "Legal Experts & Tax Specialists",
                    "Professional Trainers & HR Consultants",
                    "IT & Marketing Strategists",
                    "Corporate Affairs Specialists",
                    "Value & Cost Engineers"
                ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                        <span className="text-blue-900">•</span> {item}
                    </li>
                ))}
            </ul>
            <p className="mt-8 text-gray-600 italic border-l-4 border-blue-900 pl-4">
                Our professionals, sourced primarily from Big 4 accounting firms and other prestigious organizations, bring a wealth of expertise to serve our clients effectively.
            </p>
          </div>

          {/* --- GLOBAL PRESENCE SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-2xl mb-20">
            <div>
                <img 
                    src="/proconsultimap.webp" 
                    alt="ProConsult Global Map" 
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Global Presence</h2>
                <p className="text-gray-600 mb-6">
                    We operate through a network of member firms, delivering top-tier consulting and advisory services worldwide. Our key entities include:
                </p>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <span className="text-blue-600 mt-1">
                            <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
                        </span>
                        <p className="text-gray-700">
                            <span className="font-bold text-blue-800">
                                <a href="#" className="hover:underline hover:text-blue-600 transition-colors">
                                    ProConsult International UK
                                </a>
                            </span> – Providing global consulting and advisory services
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-blue-600 mt-1">
                            <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
                        </span>
                        <p className="text-gray-700">
                            <span className="font-bold text-blue-800">
                                <a href="#" className="hover:underline hover:text-blue-600 transition-colors">
                                    Shafiq Umar Daraz & Co.
                                </a>
                            </span> Chartered Accountants – Offering audit and financial services in Pakistan and Afghanistan
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-blue-600 mt-1">
                            <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
                        </span>
                        <p className="text-gray-700">
                            <span className="font-bold text-blue-800">
                                <a href="#" className="hover:underline hover:text-blue-600 transition-colors">
                                    ProConsult International
                                </a>
                            </span> Legal Services – Specializing in legal and corporate affairs in Pakistan and Afghanistan
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-blue-600 mt-1">
                            <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
                        </span>
                        <p className="text-gray-700">
                            <span className="font-bold text-blue-800">
                                <a href="#" className="hover:underline hover:text-blue-600 transition-colors">
                                    ABUD
                                </a>
                            </span> Management Consultancy (Dubai, UAE) – Delivering management consulting, IFRS advisory, sustainability consulting, tax compliance, internal audit, and business advisory services
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* --- COMMITMENT TO EXCELLENCE (ISO SECTION) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="/iso.webp" 
                alt="ISO 27001 Certification" 
                className="w-64 h-auto"
              />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Commitment to Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We prioritize client confidentiality and adhere to ISO 27001 standards, ensuring the highest level of data security and compliance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our Information Security Management System (ISMS) safeguards non-public client information during and after engagements. We have initiated the ISO 27001 certification process to reinforce our commitment to data security.
              </p>
            </div>
          </div>

          {/* --- VISION AND MISSION --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-blue-900 text-white rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 border-b border-blue-400 pb-2">Our Mission</h3>
              <p className="leading-relaxed">
                Our mission is to foster the growth of both our nation and our clients by nurturing the development of our professionals across all disciplines. We are committed to establishing a robust consulting platform that serves as a valuable asset to the global community.
              </p>
            </div>
            <div className="p-8 bg-gray-50 border border-blue-100 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be the premier consulting firm, renowned for our unwavering commitment to excellence and client satisfaction. We aim to drive meaningful impact and contribute to the success of our clients across diverse industries.
              </p>
            </div>
          </div>

          {/* --- CEO MESSAGE --- */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-20 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/3">
                <img 
                  src="/umer-ceo.webp" 
                  alt="Umar Daraz, CEO" 
                  className="w-full h-auto rounded-xl shadow-md border-4 border-white"
                />
                <div className="mt-4 text-center lg:text-left">
                  <h4 className="text-xl font-bold text-blue-900">Umar Daraz, FCA</h4>
                  <p className="text-gray-500 font-medium">Chief Executive Officer</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide">CEO Message</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Dear Friends, Seniors, and Colleagues, this is Umar Daraz, FCA. I am a fellow member of ICAP, Founder of ProConsult International and Senior Partner of Shafiq Umar Daraz & Co. Chartered Accountants.
                  </p>
                  <p>
                    ProConsult was established in 2020 when I took early retirement from Deloitte, one of the Big 4 Audit firms. I also have extensive work experience with renowned Audit Firms in the world including PWC, KPMG, and EY.
                  </p>
                  <p>
                    Welcome to ProConsult | Shafiq Umar Daraz & Co, where strategic insights meet transformational solutions. As the CEO, I am honored to lead a team of brilliant minds dedicated to propelling businesses to new heights.
                  </p>
                  <p>
                    We believe in the power of collaboration, working side by side with our clients to craft tailored solutions that deliver tangible results. Our commitment to excellence, integrity, and a client-first approach sets us apart from other organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- OUR PRODUCTS --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-50 p-10 rounded-2xl mb-20">
            <div className="flex justify-center">
                <img 
                    src="/pci-logo.webp" 
                    alt="Digital Solutions and Software" 
                    className="w-full max-w-md h-auto rounded-xl shadow-lg"
                />
            </div>
            <div>
  <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Products</h2>
  <p className="text-gray-700 mb-8 leading-relaxed">
    We empower accounting consultancies and HR professionals with advanced software solutions designed to streamline operations, enhance efficiency, and drive business growth. Our cutting-edge technology automates routine tasks, provides data-driven analytics, and optimizes workforce management.
  </p>
  
  <div className="space-y-4">
    <h4 className="font-bold text-blue-900 text-lg">Our key products include:</h4>

    {/* Product 1 */}
    <div className="flex gap-3 items-start">
      <span className="text-blue-600 mt-1">
        <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
      </span>
      <p className="text-gray-700">
        <span className="font-bold text-blue-800">
          <a href="/products/ifrs9" className="hover:underline hover:text-blue-600 transition-colors">
            IFRS 9 Solution Pro
          </a>
        </span> – Advanced Financial Compliance & Risk Management
      </p>
    </div>

    {/* Product 2 */}
    <div className="flex gap-3 items-start">
      <span className="text-blue-600 mt-1">
        <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
      </span>
      <p className="text-gray-700">
        <span className="font-bold text-blue-800">
          <a href="/products/lms" className="hover:underline hover:text-blue-600 transition-colors">
            FPA LMS
          </a>
        </span> – Transforming Learning Through Innovation
      </p>
    </div>

    {/* Product 3 */}
    <div className="flex gap-3 items-start">
      <span className="text-blue-600 mt-1">
        <i className="fas fa-check text-blue-900 text-xl pr-2"></i>
      </span>
      <p className="text-gray-700">
        <span className="font-bold text-blue-800">
          <a href="/products/pak-muash" className="hover:underline hover:text-blue-600 transition-colors">
            PAK MUASH
          </a>
        </span> – Empowering Careers, Connecting Talent
      </p>
    </div>

  </div>
</div>
          </div>

          {/* --- LOOKING AHEAD --- */}
          <div className="text-center border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Looking Ahead</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                As we continue to evolve, ProConsult International remains dedicated to delivering world-class consulting services, fostering professional growth, and empowering businesses globally. With a strong foundation and a clear vision, we are set to shape the future of consulting on a global scale.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default AboutPage;