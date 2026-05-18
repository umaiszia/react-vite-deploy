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

// --- COUNTER COMPONENT ---
// This handles the animation logic for the numbers
const Counter = ({ end, duration = 3000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.5 } // Starts when 50% of the element is visible
    );

    if (countRef.current) observer.observe(countRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const increment = end / (duration / 16); // 16ms interval for 60fps
    
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
  return (
    <>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-8xl mx-auto">
          
          {/* SECTION HEADER */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
              WHY CHOOSE PROCONSULT INTERNATIONAL
            </p>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What Sets Us Apart</h2>
            <div className="w-16 h-1 bg-blue-900 mx-auto"></div>
          </div>

          {/* TOP ROW: 4 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex"></div>
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">Expert Team</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-xl pr-2"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Senior consultants with Big 4 experience</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">Proven Trust</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-xl pr-2"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Trusted by leading organizations</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">Efficient Delivery</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-xl pr-2"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Responsive and cost-effective delivery</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-1 h-auto bg-blue-900 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">Global Standards</h4>
                <div className="flex items-start gap-2">
                  <span className="text-blue-900 text-xl pr-2"><i className="fas fa-check"></i></span>
                  <p className="text-gray-600 text-sm">Local presence, global standards</p>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: STATS WITH ANIMATED COUNTERS */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-[#a3e4fe] p-10 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                <Counter end={7} />+
              </h3>
              <p className="text-blue-900 text-sm">Years Experience</p>
            </div>

            <div className="bg-[#a3e4fe] p-10 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                <Counter end={100} />+
              </h3>
              <p className="text-blue-900 text-sm">Clients Worldwide</p>
            </div>

            <div className="bg-[#a3e4fe] p-10 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                <Counter end={95} />%
              </h3>
              <p className="text-blue-900 text-sm">Client Retention</p>
            </div>

            <div className="bg-[#a3e4fe] p-10 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                <Counter end={20} />+
              </h3>
              <p className="text-blue-900 text-sm">Expert Consultants</p>
            </div>

          </div>

        </div>
      </section>
      {<AboutSection/>}
    </>
  );
}

// Keep this function outside, but now it is being called above!
function AboutSection() {
  return (
    <>
      <section className="py-16 px-4 max-w-8x1 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 inline-block border-b-3 pb-3">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE: IMAGE WITH ZOOM ANIMATION */}
          <div className="overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/Our-Team.webp"
              alt="ProConsult Team"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-blue-900 leading-tight">
              Your Trusted Advisors - International Expertise. Local Insights.
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At ProConsult International, we empower organizations with our strategic consulting, financial advisory, legal services, and technology-enabled solutions.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              With a sizeable presence in Pakistan, Afghanistan and with offices in Dubai, KSA, and the UK, we are ready, willing and able to help clients across international borders.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/about" className="flex-1 min-w-[140px] py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white flex justify-center items-center gap-2">
                Read More →
              </Link>

              <Link to="/team" className="flex-1 min-w-[140px] py-3 bg-blue-900 text-white border-2 border-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-blue-900 flex justify-center items-center gap-2 shadow-lg">
                Meet Our Team →
              </Link>
              
              <Link to="/services" className="flex-1 min-w-[140px] py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white flex justify-center items-center gap-2">
                Explore Our Services →
              </Link>

            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
}

function ServicesSection() {
  
  return (
    <>
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-blue-900 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Our Services</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-center">
            At ProConsult International, we partner with clients to deliver tailored solutions that drive sustainable growth, operational excellence, and long-term value.
          </p>
        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              IFRS 16 Leases Compliance Software Solution
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our IFRS 16 Leases Compliance Software is a robust, automated solution designed to simplify lease accounting and ensure full compliance with IFRS 16 standards. Tailored for financial institutions, telecom operators, leasing companies, and asset-intensive organizations, our software enables accurate lease classification, liability recognition, and right-of-use asset tracking.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Explore more about IFRS 16 Compliance Solution
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo1.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo2.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              IFRS 9 Impairment Solution Pro (ISP)
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our innovative IFRS 9 Impairment Solution Pro (ISP) helps financial institutions calculate expected credit losses (ECL) in compliance with IFRS 9 requirements. ISP integrates advanced ECL engines, including PD, LGD, and Staging modules, while incorporating forward-looking macroeconomic factors. Designed for banks, fintechs, and financial companies, ISP ensures accurate impairment calculations and regulatory compliance.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about IFRS 9 Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Financial Reporting & Advisory Solutions
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of accounting specialists provides end-to-end financial reporting advisory services, including assistance with IFRS and GAAP compliance, preparation of financial statements, and implementation of best practices. We help organizations navigate complex accounting standards, optimize financial reporting processes, and achieve regulatory compliance. Our solutions are tailored to banks, fintechs, and large corporations seeking expert guidance on accounting treatments and disclosures.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about Financial Reporting & Advisory Solutions
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo3.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo4.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Expert Business Consulting Services for Sustainable Growth
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of seasoned business advisory consultants combines financial expertise, strategic planning, and industry-specific knowledge to help organizations navigate complexity, optimize performance, and achieve sustainable growth. We deliver actionable solutions tailored to your unique business challenges and industry requirements.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about Our Business Advisory Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Expert Audit & Assurance Services
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our certified audit professionals offer comprehensive audit and assurance services designed to enhance financial transparency, strengthen regulatory compliance, and drive operational excellence. With a deep understanding of industry-specific challenges, we deliver independent, high-quality audits that build stakeholder trust and empower confident decision-making. Partner with us to ensure your financial statements meet global standards and support sustainable business growth.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about our Audit & Assurances services.
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo5.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo6.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Tax Compliance & Advisory Services
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Stay ahead of complex tax regulations with our expert tax compliance and advisory services. Our team ensures accurate and timely business income tax filings, reducing risk and enhancing regulatory compliance. We handle every aspect of corporate tax filing-from preparation to submission-minimizing errors and ensuring your business remains compliant with the latest tax laws. Let us simplify tax management so you can focus on growth.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about our Tax Compliance & Advisory Services.
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Legal Advisory & Expert Opinions
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Navigate complex corporate and regulatory challenges with confidence through our expert legal advisory services. We provide authoritative guidance on compliance, corporate governance, and strategic business decisions. Our actionable opinions are backed by thorough research and legal precedent, empowering your organization to make informed decisions and mitigate risks effectively.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about our Legal Advisory & Expert Opinions.
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo7.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo8.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Empowering Sustainable Business Practices
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We help organizations build resilient, sustainable operations that align with global standards. Our services cover every aspect of sustainability, from strategy to implementation, ensuring your business thrives in an evolving regulatory landscape.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about our Empowering Sustainable Business.
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Human Resource Services
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Unlock the full potential of your workforce with our comprehensive human resource services designed to drive organizational excellence. From executive search and C-level assessments to performance appraisals and total reward design, we provide tailored solutions that enhance leadership effectiveness and workforce engagement. Our expertise extends to HR technology implementation, international employee mobility, and training programs-including technical, vocational, and industry-specific IFRS training. Whether it’s HR audits, corporate restructuring, compensation strategy, or diversity and inclusion initiatives, we empower businesses to thrive in today’s dynamic landscape. Let our team of experts transform your HR challenges into opportunities for growth.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about our Human Resource services.
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo9.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

        </div>

        {/* SERVICE CARD (Wide Layout) */}
        <div className="bg-white rounded-xl border border-gray-100 mt-10 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow duration-300">

          {/* RIGHT: CIRCULAR GRAPHIC */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative p-4 rounded-full group">
              {/* Replace with your actual circular image asset */}
              <img
                src="/logo10.webp"
                alt="IFRS 16 Diagram"
                className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>
          </div>

          {/* LEFT: TEXT CONTENT (Takes up more space for that 8x1 feel) */}
          <div className="flex-1 border-l-4 border-blue-400 pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Professional IT Services for Businesses
            </h3>
            <div className="w-16 h-0.5 bg-green-400 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Empower your organization with cutting-edge IT solutions designed to boost productivity, enhance security, and drive sustainable growth. Our team of finance and technology experts delivers enterprise-grade systems that integrate seamlessly with your financial workflows and business goals. From ERP implementation to data management, we build IT infrastructures that provide measurable ROI and support your evolving needs in an ever-changing digital landscape.
            </p>

            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group">
              Learn more about our Information Technology Solutions.
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
    
    <MembershipSection/>  
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

  return (
    <>
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER - Matches Services Style */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-blue-900 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Membership & Associations</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Proconsult International is an SECP-incorporated consulting firm, registered with leading financial and trade bodies.
          </p>
        </div>

        {/* 3x3 GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {associations.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300">
              <div className="h-24 flex items-center justify-center mb-6">
                <img src={item.img} alt={item.name} className="max-h-full w-auto object-contain" />
              </div>
              <h4 className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                {item.desc}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
    <TestimonialSection/>
    </>
  );
  
} 

function TestimonialSection() {
  return (
  <>
    <section className="py-20 px-4 bg-blue-900 text-white relative overflow-hidden">

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* The Quote */}
        <h2 className="text-xl md:text-3xl italic font-medium leading-relaxed mb-8">
          "ProConsult played a critical role in transforming our finance function. 
          Their strategic insight and hands-on approach helped us scale with confidence."
        </h2>

        {/* The Author */}
        <div className="mb-10">
          <p className="font-bold text-lg">- CFO, Regional Logistics Group</p>
          <p className="text-blue-200 text-sm">Leading logistics company with 500+ employees</p>
        </div>

        {/* The Button */}
        <a href="#" target="_blank" rel="noreferrer" >
          <button className="bg-blue-700 hover:bg-white text-white hover:text-blue-900 font-semibold py-3 px-8 rounded-md transition-colors duration-300 flex items-center gap-2 mx-auto">
            Read More Case Studies 
            <span>→</span>
          </button>
        </a>
      </div>

    </section>
    <InternationalPresenceSection/>
    </>
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