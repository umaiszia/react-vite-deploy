import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  // Animation Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Slightly faster stagger for snappier mobile feel
        delayChildren: 0.3,
      },
    },
  };

  // Animation Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Balanced offset for smaller screen bounds
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 20 } 
    },
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      {/* Adjusted heights: 500px on mobile, 650px on tablet, 850px on desktops/small laptops */}
      <div className="relative h-[550px] sm:h-[650px] lg:h-[850px] w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="/procunsult-video.mp4" type="video/mp4" />
          Does not support!
        </video>

        {/* Dynamic Overlay: Darker (70% opacity) on mobile/tablet for stark contrast, standard (40%) on desktops */}
        <div className="absolute z-10 w-full h-full bg-black/70 md:bg-black/40 transition-colors duration-300"></div>

        {/* CONTENT WITH ANIMATIONS */}
        <motion.div 
          className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto flex flex-col justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Responsive Typography: Clean breaks on mobile, normal line flow on desktops */}
          <motion.h1 
            className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            Proactive, <br className="md:hidden" /> 
            <motion.span variants={itemVariants} className="inline-block">Proficient &</motion.span> <br className="md:hidden" /> 
            <motion.span variants={itemVariants} className="inline-block"> Professional</motion.span>
          </motion.h1>

          {/* Paragraph text scaling */}
          <motion.p 
            className="text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-10 text-gray-100 font-medium drop-shadow-sm"
            variants={itemVariants}
          >
            ProConsult International is a multi-disciplinary consulting firm that helps clients achieve success through strategic insights and practical execution.
          </motion.p>

          {/* Interactive Get Started Button */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            {/* Interactive Get Started Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center">
              <a href="/#about-us" rel="noreferrer" className="block w-fit">
                <button className="bg-white text-blue-900 text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold flex items-center gap-2 mx-auto transition-all duration-300 hover:bg-blue-900 hover:text-white shadow-lg group whitespace-nowrap">
                  Get Started 
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <WhyChooseUsSection/>
    </>
  );
}

import React, { useState, useEffect, useRef } from 'react';

// --- COUNTER COMPONENT (Unchanged Logic) ---
const Counter = ({ end, duration = 3000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startCount, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

// --- MAIN SECTION ---
function WhyChooseUsSection() {
  
  // Animation settings to match your Hero component entry behavior
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 15 } 
    },
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER WITH SCROLL ANIMATION */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
              WHY CHOOSE PROCONSULT INTERNATIONAL
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Sets Us Apart</h2>
            <div className="w-16 h-1 bg-blue-900 mx-auto"></div>
          </motion.div>

          {/* TOP ROW: 4 CARDS WITH ENTRY STAGGER */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}>
            
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Expert Team</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-sm pt-0.5"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Senior consultants with Big 4 experience</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Proven Trust</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-sm pt-0.5"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Trusted by leading organizations</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Efficient Delivery</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-sm pt-0.5"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Responsive and cost-effective delivery</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={itemVariants} className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Global Standards</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-sm pt-0.5"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Local presence, global standards</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* BOTTOM ROW: STATS - Fully balanced structural alignment */}
          <motion.div 
            className="bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            
            <div className="bg-[#a3e4fe] p-6 sm:p-8 md:p-10 rounded-lg text-center shadow-inner-sm">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
                <Counter end={7} />+
              </h3>
              <p className="text-blue-900 text-xs sm:text-sm font-semibold mt-1">Years Experience</p>
            </div>

            <div className="bg-[#a3e4fe] p-6 sm:p-8 md:p-10 rounded-lg text-center shadow-inner-sm">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
                <Counter end={100} />+
              </h3>
              <p className="text-blue-900 text-xs sm:text-sm font-semibold mt-1">Clients Worldwide</p>
            </div>

            <div className="bg-[#a3e4fe] p-6 sm:p-8 md:p-10 rounded-lg text-center shadow-inner-sm">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
                <Counter end={95} />%
              </h3>
              <p className="text-blue-900 text-xs sm:text-sm font-semibold mt-1">Client Retention</p>
            </div>

            <div className="bg-[#a3e4fe] p-6 sm:p-8 md:p-10 rounded-lg text-center shadow-inner-sm">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
                <Counter end={20} />+
              </h3>
              <p className="text-blue-900 text-xs sm:text-sm font-semibold mt-1">Expert Consultants</p>
            </div>

          </motion.div>

        </div>
      </section>
      <AboutSection/>
    </>
  );
}

// Keep this function outside, but now it is being called above!
function AboutSection() {
  
  // Animation settings matching your site's consistent behavior
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 15 } 
    },
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* SECTION HEADER WITH SCROLL ANIMATION */}
        <motion.div 
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 inline-block border-b-2 pb-3">
            About Us
          </h2>
        </motion.div>

        {/* MAIN BODY CONFIGURATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT SIDE: IMAGE COMPONENT WITH ROLL-IN AND HOVER EFFECT */}
          <motion.div 
            className="overflow-hidden rounded-2xl shadow-xl group w-full aspect-[4/3] lg:aspect-auto"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          >
            <img
              src="/Our-Team.webp"
              alt="ProConsult Team"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* RIGHT SIDE: CONTENT WITH CONTAINER STAGGER */}
          <motion.div 
            className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight max-w-xl lg:max-w-none"
              variants={itemVariants}
            >
              Your Trusted Advisors - International Expertise. Local Insights.
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base font-medium max-w-2xl lg:max-w-none"
              variants={itemVariants}
            >
              At ProConsult International, we empower organizations with our strategic consulting, financial advisory, legal services, and technology-enabled solutions.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base font-medium max-w-2xl lg:max-w-none"
              variants={itemVariants}
            >
              With a sizeable presence in Pakistan, Afghanistan and with offices in Dubai, KSA, and the UK, we are ready, willing and able to help clients across international borders.
            </motion.p>

            {/* FULLY RESPONSIVE ACTION BUTTONS */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mt-2 w-full sm:w-auto"
              variants={itemVariants}
            >
              <Link 
                to="/about" 
                className="w-full sm:w-fit min-w-[150px] px-6 py-2.5 sm:py-3 text-xs sm:text-sm border-2 border-blue-900 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white flex justify-center items-center gap-2 whitespace-nowrap shadow-sm"
              >
                Read More →
              </Link>

              <Link 
                to="/team" 
                className="w-full sm:w-fit min-w-[150px] px-6 py-2.5 sm:py-3 text-xs sm:text-sm bg-blue-900 text-white border-2 border-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-blue-900 flex justify-center items-center gap-2 whitespace-nowrap shadow-md"
              >
                Meet Our Team →
              </Link>
              
              <Link 
                to="/services" 
                className="w-full sm:w-fit min-w-[150px] px-6 py-2.5 sm:py-3 text-xs sm:text-sm border-2 border-blue-900 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white flex justify-center items-center gap-2 whitespace-nowrap shadow-sm"
              >
                Explore Our Services →
              </Link>

            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <ServicesSection />
    </>
  );
}


function ServicesSection() {
  
  // Custom, slightly longer animations (duration: 0.85s) with a smooth spring feel
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 45, damping: 14, duration: 0.85 } 
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 45, damping: 14, duration: 0.85 } 
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 40, damping: 15, duration: 0.85 } 
    }
  };

  const slideUpSmooth = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { ease: 'easeOut', duration: 0.85 } 
    }
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <motion.div 
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-1 bg-blue-900 mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2">
              At ProConsult International, we partner with clients to deliver tailored solutions that drive sustainable growth, operational excellence, and long-term value.
            </p>
          </motion.div>

          {/* SERVICE CARDS CONTAINER */}
          <div className="flex flex-col gap-6 sm:gap-10">

            {/* CARD 1: Slide In Left */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  IFRS 16 Leases Compliance Software Solution
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Our IFRS 16 Leases Compliance Software is a robust, automated solution designed to simplify lease accounting and ensure full compliance with IFRS 16 standards. Tailored for financial institutions, telecom operators, leasing companies, and asset-intensive organizations, our software enables accurate lease classification, liability recognition, and right-of-use asset tracking.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Explore more about IFRS 16 Compliance Solution
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo1.webp" alt="IFRS 16 Diagram" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Slide In Right */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo2.webp" alt="IFRS 9 Diagram" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  IFRS 9 Impairment Solution Pro (ISP)
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Our innovative IFRS 9 Impairment Solution Pro (ISP) helps financial institutions calculate expected credit losses (ECL) in compliance with IFRS 9 requirements. ISP integrates advanced ECL engines, including PD, LGD, and Staging modules, while incorporating forward-looking macroeconomic factors. Designed for banks, fintechs, and financial companies, ISP ensures accurate impairment calculations and regulatory compliance.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about IFRS 9 Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* CARD 3: Scale Up Feel */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Financial Reporting & Advisory Solutions
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Our team of accounting specialists provides end-to-end financial reporting advisory services, including assistance with IFRS and GAAP compliance, preparation of financial statements, and implementation of best practices. We help organizations navigate complex accounting standards, optimize financial reporting processes, and achieve regulatory compliance.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about Financial Reporting & Advisory Solutions
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo3.webp" alt="Financial Reporting Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Smooth Slide Up */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideUpSmooth}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo4.webp" alt="Business Consulting Graphic" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Expert Business Consulting Services for Sustainable Growth
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Our team of seasoned business advisory consultants combines financial expertise, strategic planning, and industry-specific knowledge to help organizations navigate complexity, optimize performance, and achieve sustainable growth. We deliver actionable solutions tailored to your unique business challenges.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about Our Business Advisory Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* CARD 5: Slide In Left */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Expert Audit & Assurance Services
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Our certified audit professionals offer comprehensive audit and assurance services designed to enhance financial transparency, strengthen regulatory compliance, and drive operational excellence. Partner with us to ensure your financial statements meet global standards and support sustainable business growth.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about our Audit & Assurances services.
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo5.webp" alt="Audit & Assurance Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 6: Slide In Right */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo6.webp" alt="Tax Compliance Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Tax Compliance & Advisory Services
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Stay ahead of complex tax regulations with our expert tax compliance and advisory services. Our team ensures accurate and timely business income tax filings, reducing risk and enhancing regulatory compliance. We handle every aspect of corporate tax filing from preparation to submission.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about our Tax Compliance & Advisory Services.
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* CARD 7: Scale Up Feel */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Legal Advisory & Expert Opinions
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Navigate complex corporate and regulatory challenges with confidence through our expert legal advisory services. We provide authoritative guidance on compliance, corporate governance, and strategic business decisions. Our actionable opinions are backed by thorough research.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about our Legal Advisory & Expert Opinions.
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo7.webp" alt="Legal Advisory Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 8: Smooth Slide Up */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideUpSmooth}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo8.webp" alt="Sustainability Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Empowering Sustainable Business Practices
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  We help organizations build resilient, sustainable operations that align with global standards. Our services cover every aspect of sustainability, from strategy to implementation, ensuring your business thrives in an evolving regulatory landscape.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about our Empowering Sustainable Business.
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* CARD 9: Slide In Left */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Human Resource Services
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Unlock the full potential of your workforce with our comprehensive human resource services designed to drive organizational excellence. From executive search and C-level assessments to performance appraisals and total reward design, we provide tailored solutions that enhance leadership effectiveness and workforce engagement.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about our Human Resource services.
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo9.webp" alt="Human Resource Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 10: Slide In Right */}
            <motion.div 
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-md transition-shadow duration-300"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 rounded-full group transition-transform duration-500 hover:scale-105">
                  <img src="/logo10.webp" alt="Information Technology Asset" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain" />
                </div>
              </div>
              <div className="flex-1 border-l-4 border-blue-400 pl-4 sm:pl-6 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Professional IT Services for Businesses
                </h3>
                <div className="w-16 h-0.5 bg-green-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Empower your organization with cutting-edge IT solutions designed to boost productivity, enhance security, and drive sustainable growth. Our team of finance and technology experts delivers enterprise-grade systems that integrate seamlessly with your financial workflows and business goals.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 flex items-center justify-center md:justify-start gap-2 group">
                  Learn more about our Information Technology Solutions.
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      <MembershipSection />   
    </>
  );
}



function MembershipSection() {
  const associations = [
    { name: "ICAP", desc: <a href="#" className="text-black hover:text-blue-500">Institute of Chartered Accountants of Pakistan (ICAP)</a>, img: "/membershiplogo1.webp" },
    { name: "ICMAP", desc: <a href="#" className="text-black hover:text-blue-500">Institute of Cost and Management Accountants of Pakistan (ICMAP)</a>, img: "/membershiplogo2.webp" },
    { name: "ICAEW", desc: <a href="#" className="text-black hover:text-blue-500">Institute of Chartered Accountants in England and Wales (ICAEW)</a>, img: "/membershiplogo3.webp" },
    { name: "ACCA", desc: <a href="#" className="text-black hover:text-blue-500">Association of Chartered Certified Accountants (ACCA)</a>, img: "/membershiplogo4.webp" },
    { name: "SECP", desc: <a href="#" className="text-black hover:text-blue-500">Securities and Exchange Commission of Pakistan (SECP)</a>, img: "/membershiplogo5.webp" },
    { name: "BOI", desc: <a href="#" className="text-black hover:text-blue-500">Board of Investment Pakistan (BOI)</a>, img: "/membershiplogo6.webp" }
  ];

  // Slightly elongated, smooth fade-and-rise variant
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        duration: 0.9,
        // Staggers the animation slightly depending on its position in the grid
        delay: (index % 3) * 0.25 
      }
    })
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER - Fully responsive text & matching services layout */}
          <motion.div 
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-12 h-1 bg-blue-900 mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              Membership & Associations
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2">
              Proconsult International is an SECP-incorporated consulting firm, registered with leading financial and trade bodies.
            </p>
          </motion.div>

          {/* RESPONSIVE GRID LAYOUT */}
          {/* 1 col on Mobile, 2 cols on Tablets, 3 cols on small laptops and up */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {associations.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300"
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Responsive logo container with auto-scaling behavior */}
                <div className="h-16 sm:h-20 md:h-24 w-full flex items-center justify-center mb-4 sm:mb-6">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="max-h-full max-w-[80%] sm:max-w-full w-auto object-contain transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <h4 className="text-gray-700 font-medium text-xs sm:text-sm md:text-base leading-relaxed px-1">
                  {item.desc}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <TestimonialSection />
    </>
  );
}


function TestimonialSection() {
  
  // Clean text and element fade-and-rise animation variant
  const elementVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.8,
        delay: customDelay
      }
    })
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-blue-900 text-white overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* THE QUOTE TEXT */}
        <motion.p 
          className="font-medium italic leading-relaxed text-base sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mb-6 sm:mb-8 px-2 sm:px-4"
          variants={elementVariant}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          "ProConsult played a critical role in transforming our finance function. Their strategic insight and hands-on approach helped us scale with confidence."
        </motion.p>

        {/* AUTHOR NAME */}
        <motion.h4 
          className="font-bold tracking-wide text-sm sm:text-base md:text-lg mb-1"
          variants={elementVariant}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          - CFO, Regional Logistics Group
        </motion.h4>

        {/* AUTHOR SUBTITLE */}
        <motion.p 
          className="text-blue-200 font-light tracking-normal text-xs sm:text-sm mb-8 sm:mb-10"
          variants={elementVariant}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Leading logistics company with 500+ employees
        </motion.p>

        {/* ANIMATED & RESPONSIVE BUTTON */}
        <div className="w-full flex justify-center px-4">
          <motion.a 
            href="#" 
            className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 w-full max-w-xs sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5"
            variants={elementVariant}
            custom={0.45} // Triggers cleanly right after the subtitle completes its entrance
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More Case Studies
            <span className="text-sm sm:text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}


function InternationalPresenceSection() {
  return (
    <>
    <section className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-blue-900 tracking-widest uppercase mb-2">
            INTERNATIONAL PRESENCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-5">
            Our Reach Across Regions
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            With offices and associates across key markets, we provide localized service backed by global expertise.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: OFFICE LISTS (The simple "Manual Way") */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-300 pb-2 inline-block">
              Office Locations:
            </h4>
            
            {/* Location 1 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              <p className="text-gray-700 font-medium">Islamabad</p>
            </div>

            {/* Location 2 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              <p className="text-gray-700 font-medium">Kabul</p>
            </div>

            {/* Location 3 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              <p className="text-gray-700 font-medium">Dubai</p>
            </div>

            {/* Location 4 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              <p className="text-gray-700 font-medium">Manchester</p>
            </div>

            {/* Location 5 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              <p className="text-gray-700 font-medium">Jeddah</p>
            </div>

          </div>

          {/* RIGHT: ANIMATED MAP AND BUTTON (Clean Design) */}
          <div className="relative p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg bg-white overflow-hidden flex flex-col items-center">
            
            {/* The Animated Map Image - Wraps around the image for simplicity */}
            <div className="overflow-hidden rounded-xl mb-10 w-full flex justify-center">
              <img 
                src="/proconsultimap.webp" // --- PLACE YOUR MAP IMAGE HERE ---
                alt="Global Reach Map" 
                className="w-full h-auto max-w-xl object-contain animate-fade-in-down transition-transform duration-1000 ease-out hover:scale-105"
              />
            </div>

            {/* The Working Link Button (Matches Testimonial Style) */}
            <a href="#" target="_blank" rel="noreferrer" >
          <button className="bg-blue-700 hover:bg-blue-500 text-white hover:text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 flex items-center gap-2 mx-auto">
            Learn More 
            <span>→</span>
          </button>
          </a>

          </div>

        </div>

      </div>
    </section>
    <GrowTogetherSection/>
    </>
  );
}
function GrowTogetherSection() {
  return (
    <section className="py-20 px-4 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header Text */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Grow Together
        </h2>

        {/* Subtext */}
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to move your organization forward? Let's explore how the ProConsult group can help you.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Contact Us Button (White) */}
          <a href="#" target="_blank" rel="noreferrer">
            <button className="bg-white text-blue-900 px-12 py-4 rounded-full font-bold flex items-center gap-2 mx-auto transition-all duration-300 hover:bg-blue-600 hover:text-white">
              Contact Us <span>→</span>
            </button>
          </a>

          {/* Request a Demo Button (Outline) */}
          <a href="/demo" target="_blank" rel="noreferrer">
            <button className="w-full sm:w-auto border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 text-center">
              Request a Demo
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}
export default Home;