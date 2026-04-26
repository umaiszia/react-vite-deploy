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
                    className="w-full h-auto rounded-lg"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="/iso.webp" 
                alt="ISO 27001 Certification" 
                className="w-64 h-auto"/>
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Commitment to Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We prioritize client confidentiality and adhere to ISO 27001 standards, ensuring the highest level of data security and compliance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our Information Security Management System (ISMS) safeguards non-public client information, including working papers and deliverables, during and after engagements. As part of our continuous improvement, we have initiated the ISO 27001 certification process to reinforce our commitment to data security.
              </p>
            </div>
          </div>

          {/* --- VISION AND MISSION --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-blue-900 text-white rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 border-b border-blue-400 pb-2">Our Mission</h3>
              <p className="leading-relaxed">
                Our mission is to foster the growth of both our nation and our clients by nurturing the development of our professionals across all disciplines. We are committed to establishing a robust consulting platform that empowers our professionals and clients alike, serving as a valuable asset not only to our country but also to the global community.
              </p>
            </div>
            <div className="p-8 bg-gray-50 border border-blue-100 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be the premier consulting firm, renowned for our unwavering commitment to excellence and client satisfaction. We aspire to be the go-to advisors for businesses seeking innovative solutions and strategic guidance. By leveraging our expertise and fostering a culture of collaboration and continuous improvement, we aim to drive meaningful impact and contribute to the success and growth of our clients across diverse industries.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default AboutPage;