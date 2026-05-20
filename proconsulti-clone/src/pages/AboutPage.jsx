import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPage() {
  
  // Reuse our clean fade-and-rise orchestration config
  const elementVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.9,
        delay: customDelay
      }
    })
  };

  const listContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="bg-blue-900 py-16 sm:py-20 md:py-28 px-4 text-center relative overflow-hidden">
        {/* Subtle background dynamic abstract asset mask */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            ProConsult International is an SECP-registered leading consultancy firm specializing in 
            outsourcing for management advisory services, tax functions, legal services, and 
            comprehensive business solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. BREADCRUMB BAR */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center text-xs sm:text-sm font-medium">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="mx-2 sm:mx-3 text-gray-400">/</span>
          <span className="text-gray-500 cursor-default">About Us</span>
        </div>
      </nav>

      {/* 3. CORE CONTENT SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* --- JOURNEY SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-24 items-start">
            <motion.div 
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 leading-tight">
                Our Journey: The History of ProConsult International
              </h2>
              <div className="w-16 h-1 rounded-full bg-blue-900 mb-4"></div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Founded on November 19, 2019, ProConsult International was established with a vision to 
                redefine consulting services by offering innovative, client-centric solutions in 
                management advisory, tax, legal, audit, and business outsourcing.
              </p>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0.2}
            >
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">
                Growth and Expansion
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-5 leading-relaxed">
                Starting in Pakistan, ProConsult International quickly gained recognition for its 
                high-quality services. Our success led to rapid expansion, enabling us to establish 
                a global footprint in:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {["Afghanistan", "United Kingdom", "Kingdom of Saudi Arabia", "United Arab Emirates (UAE)"].map((location) => (
                  <div key={location} className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 bg-blue-900 rounded-full flex-shrink-0"></span>
                    <span className="font-semibold text-blue-900 text-xs sm:text-sm">{location}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed border-l-2 border-blue-500 pl-3">
                Recognizing the growing demand for specialized consulting services, we further 
                strengthen our Middle East presence with the formation of ABUD Management 
                Consultancy in Dubai, UAE.
              </p>
            </motion.div>
          </div>

          {/* --- WHO WE ARE SECTION --- */}
          <div className="mb-16 sm:mb-24">
            <motion.div 
              className="mb-6 sm:mb-8 text-center sm:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">Who We Are</h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-4xl leading-relaxed">
                ProConsult International is a leading consultancy firm specializing in outsourcing for management advisory services, tax functions, legal services, and business solutions. Our company is registered with the Securities and Exchange Commission of Pakistan (SECP) and operates through a network of global member firms.
              </p>
            </motion.div>

            <motion.ul 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {[
                "Chartered Accountants (CAs, ACCAs, CPAs)",
                "Legal Experts & Tax Specialists",
                "Professional Trainers & HR Consultants",
                "IT & Marketing Strategists",
                "Corporate Affairs Specialists",
                "Value & Cost Engineers"
              ].map((item) => (
                <motion.li 
                  key={item} 
                  variants={listItem}
                  className="flex items-center gap-3 text-gray-700 bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <span className="w-7 h-7 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span> 
                  <span className="text-xs sm:text-sm font-medium text-gray-800">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p 
              className="mt-6 sm:mt-8 text-gray-600 text-xs sm:text-sm italic border-l-4 border-blue-900 pl-4 max-w-3xl leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0.2}
            >
              Our professionals, sourced primarily from Big 4 accounting firms and other prestigious organizations, bring a wealth of expertise to serve our clients effectively.
            </motion.p>
          </div>

          {/* --- GLOBAL PRESENCE SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gray-50 p-5 sm:p-8 md:p-10 rounded-2xl mb-16 sm:mb-24">
            <motion.div 
              className="lg:col-span-5 overflow-hidden rounded-xl bg-white p-2 border border-gray-100 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <img 
                src="/proconsultimap.webp" 
                alt="ProConsult Global Map" 
                className="w-full h-auto rounded-lg object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0.2}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Our Global Presence</h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-6 leading-relaxed">
                We operate through a network of member firms, delivering top-tier consulting and advisory services worldwide. Our key entities include:
              </p>
              
              <div className="space-y-4">
                {[
                  { name: "ProConsult International UK", desc: "Providing global consulting and advisory services" },
                  { name: "Shafiq Umar Daraz & Co.", desc: "Chartered Accountants – Offering audit and financial services in Pakistan and Afghanistan" },
                  { name: "ProConsult International", desc: "Legal Services – Specializing in legal and corporate affairs in Pakistan and Afghanistan" },
                  { name: "ABUD", desc: "Management Consultancy (Dubai, UAE) – Delivering management consulting, IFRS advisory, sustainability consulting, tax compliance, internal audit, and business advisory services" }
                ].map((entity, i) => (
                  <div className="flex gap-2.5 items-start" key={i}>
                    <span className="text-blue-900 font-bold text-sm mt-0.5 flex-shrink-0">▪</span>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <span className="font-bold text-blue-800 hover:text-blue-600 transition-colors cursor-pointer">
                        {entity.name}
                      </span> – {entity.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- COMMITMENT TO EXCELLENCE (ISO SECTION) --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 sm:mb-24 bg-white border border-gray-100 p-5 sm:p-8 rounded-2xl shadow-sm">
            <motion.div 
              className="md:col-span-4 flex justify-center md:order-2"
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.9 }}
            >
              <img 
                src="/iso.webp" 
                alt="ISO 27001 Certification" 
                className="w-40 sm:w-48 md:w-full max-w-[200px] h-auto object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="md:col-span-8 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0.15}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Commitment to Excellence</h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                We prioritize client confidentiality and adhere to ISO 27001 standards, ensuring the highest level of data security and compliance.
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                Our Information Security Management System (ISMS) safeguards non-public client information during and after engagements. We have initiated the ISO 27001 certification process to reinforce our commitment to data security.
              </p>
            </motion.div>
          </div>

          {/* --- VISION AND MISSION --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-24">
            <motion.div 
              className="p-6 sm:p-8 bg-blue-900 text-white rounded-2xl shadow-md text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 border-b border-blue-400 pb-2">Our Mission</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-blue-50">
                Our mission is to foster the growth of both our nation and our clients by nurturing the development of our professionals across all disciplines. We are committed to establishing a robust consulting platform that serves as a valuable asset to the global community.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 sm:p-8 bg-gray-50 border border-blue-100 rounded-2xl shadow-sm text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0.15}
            >
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">Our Vision</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Our vision is to be the premier consulting firm, renowned for our unwavering commitment to excellence and client satisfaction. We aim to drive meaningful impact and contribute to the success of our clients across diverse industries.
              </p>
            </motion.div>
          </div>

          {/* --- CEO MESSAGE --- */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-8 mb-16 sm:mb-24 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <motion.div 
                className="w-full lg:w-1/3 text-center lg:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={elementVariant}
                custom={0}
              >
                <div className="p-2 bg-gray-50 rounded-2xl border border-gray-100 inline-block w-full max-w-[260px] lg:max-w-none">
                  <img 
                    src="/umer-ceo.webp" 
                    alt="Umar Daraz, CEO" 
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-900">Umar Daraz, FCA</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Chief Executive Officer</p>
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-2/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={elementVariant}
                custom={0.2}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-b pb-2">
                  CEO Message
                </h2>
                <div className="space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
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
              </motion.div>
            </div>
          </div>

          {/* --- OUR PRODUCTS --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-blue-50 p-5 sm:p-8 md:p-10 rounded-2xl mb-16 sm:mb-20">
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <img 
                src="/pci-logo.webp" 
                alt="Digital Solutions and Software" 
                className="w-full max-w-[280px] sm:max-w-md h-auto rounded-xl shadow-md"
              />
            </motion.div>
            
            <motion.div 
              className="lg:col-span-7 text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={elementVariant}
              custom={0.2}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Our Products</h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-6 leading-relaxed">
                We empower accounting consultancies and HR professionals with advanced software solutions designed to streamline operations, enhance efficiency, and drive business growth. Our cutting-edge technology automates routine tasks, provides data-driven analytics, and optimizes workforce management.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-bold text-blue-900 text-sm sm:text-base">Our key products include:</h4>

                {/* Product 1 */}
                <div className="flex gap-2.5 items-center">
                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full flex-shrink-0"></span>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-bold text-blue-800 hover:underline cursor-pointer">
                      IFRS 9 Solution Pro
                    </span> – Advanced Financial Compliance & Risk Management
                  </p>
                </div>

                {/* Product 2 */}
                <div className="flex gap-2.5 items-center">
                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full flex-shrink-0"></span>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-bold text-blue-800 hover:underline cursor-pointer">
                      FPA LMS
                    </span> – Transforming Learning Through Innovation
                  </p>
                </div>

                {/* Product 3 */}
                <div className="flex gap-2.5 items-center">
                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full flex-shrink-0"></span>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-bold text-blue-800 hover:underline cursor-pointer">
                      PAK MUASH
                    </span> – Empowering Careers, Connecting Talent
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- LOOKING AHEAD --- */}
          <motion.div 
            className="text-center border-t border-gray-200 pt-12 sm:pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elementVariant}
            custom={0}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Looking Ahead</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 px-2">
                As we continue to evolve, ProConsult International remains dedicated to delivering world-class consulting services, fostering professional growth, and empowering businesses globally. With a strong foundation and a clear vision, we are set to shape the future of consulting on a global scale.
              </p>
              
              {/* COMPACT INTERACTION BUTTON */}
              <div className="w-full flex justify-center">
                <motion.a 
                  href="/contact" 
                  className="group inline-flex items-center justify-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md shadow-sm transition-colors duration-300 text-[11px] sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Work With Us
                  <span className="text-xs sm:text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default AboutPage;