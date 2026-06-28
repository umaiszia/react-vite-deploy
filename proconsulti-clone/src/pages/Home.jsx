import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  // Animation Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.3,
      },
    },
  };

  // Animation Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 22 } 
    },
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <div className="relative h-[480px] sm:h-[600px] lg:h-[800px] w-full overflow-hidden flex items-center">
        
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

        {/* Premium Corporate Dynamic Overlay */}
        <div className="absolute z-10 w-full h-full bg-black/75 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-900/60 md:to-transparent transition-all duration-300"></div>

        {/* CONTENT WITH ANIMATIONS */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center md:justify-start">
          <motion.div 
            className="text-center md:text-left text-white max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center md:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Header Typography - Custom Poppins Styling */}
            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 leading-[1.15] tracking-tight text-white font-['Poppins',_sans-serif]"
              variants={itemVariants}
            >
              Proactive, <br className="md:hidden" /> 
              <span className="text-blue-500 md:text-white">Proficient</span> & <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 md:from-white md:to-white">Professional</span>
            </motion.h1>

            {/* Subtext Paragraph Text Scaling - Custom Inter Styling */}
            <motion.p 
              className="text-xs sm:text-base lg:text-[17px] leading-relaxed text-slate-300 font-medium mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-xl font-['Inter',_sans-serif]"
              variants={itemVariants}
            >
              ProConsult International is a multi-disciplinary consulting firm that helps clients achieve success through strategic insights and practical execution.
            </motion.p>

            {/* Sleek, Compact Responsive CTA Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit sm:w-auto" // Changed from w-full to w-fit on mobile so it stays compact
            >
              <a href="/#about-us" className="inline-block w-auto">
                {/* 
                  Optimized for mobile:
                  - Used text-[11px] instead of text-xs for micro-copy typography on small viewports.
                  - Reduced padding from px-6 py-3.5 down to px-4 py-2.5 on mobile so it looks balanced.
                */}
                <button className="w-fit bg-blue-600 text-white text-[11px] sm:text-sm px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-900/20 group whitespace-nowrap border border-blue-500/20 font-['Poppins',_sans-serif]">
                  Get Started 
                  <i className="fas fa-arrow-right text-[10px] sm:text-[11px] transition-transform duration-300 group-hover:translate-x-1.5"></i>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 65, damping: 20 } 
    },
  };

  return (
    <>
      <section className="py-16 sm:py-20 md:py-28 px-6 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <motion.div 
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-widest uppercase mb-3 font-['Poppins',_sans-serif]">
              WHY CHOOSE PROCONSULT INTERNATIONAL
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 font-['Poppins',_sans-serif]">
              What Sets Us Apart
            </h2>
            <div className="w-10 h-[2px] bg-slate-900 mx-auto"></div>
          </motion.div>

          {/* TOP ROW: 4 PREMIUM MINIMALIST CARDS */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col justify-between shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 group">
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 mb-4 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <i className="fas fa-user-tie text-xs"></i>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-['Poppins',_sans-serif]">Expert Team</h4>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-['Inter',_sans-serif]">Senior consultants with Big 4 industry experience.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col justify-between shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 group">
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 mb-4 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <i className="fas fa-handshake text-xs"></i>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-['Poppins',_sans-serif]">Proven Trust</h4>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-['Inter',_sans-serif]">Trusted by leading organizations globally.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col justify-between shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 group">
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 mb-4 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <i className="fas fa-bolt text-xs"></i>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-['Poppins',_sans-serif]">Efficient Delivery</h4>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-['Inter',_sans-serif]">Highly responsive and cost-effective structural execution.</p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col justify-between shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 group">
              <div>
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 mb-4 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <i className="fas fa-globe text-xs"></i>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-['Poppins',_sans-serif]">Global Standards</h4>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-['Inter',_sans-serif]">Strong local presence adhering to premium global standards.</p>
              </div>
            </motion.div>

          </motion.div>

          {/* BOTTOM ROW: MINIMALIST METRICS (Zero bright blues) */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            
            {/* Stat Block 1 */}
            <div className="bg-white border border-slate-100 p-5 sm:p-8 rounded-xl text-center shadow-[0_2px_6px_-3px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Poppins',_sans-serif]">
                <Counter end={7} />+
              </h3>
              <p className="text-slate-400 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-2 font-['Inter',_sans-serif]">Years Experience</p>
            </div>

            {/* Stat Block 2 */}
            <div className="bg-white border border-slate-100 p-5 sm:p-8 rounded-xl text-center shadow-[0_2px_6px_-3px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Poppins',_sans-serif]">
                <Counter end={100} />+
              </h3>
              <p className="text-slate-400 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-2 font-['Inter',_sans-serif]">Clients Worldwide</p>
            </div>

            {/* Stat Block 3 */}
            <div className="bg-white border border-slate-100 p-5 sm:p-8 rounded-xl text-center shadow-[0_2px_6px_-3px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Poppins',_sans-serif]">
                <Counter end={95} />%
              </h3>
              <p className="text-slate-400 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-2 font-['Inter',_sans-serif]">Client Retention</p>
            </div>

            {/* Stat Block 4 */}
            <div className="bg-white border border-slate-100 p-5 sm:p-8 rounded-xl text-center shadow-[0_2px_6px_-3px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Poppins',_sans-serif]">
                <Counter end={20} />+
              </h3>
              <p className="text-slate-400 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-2 font-['Inter',_sans-serif]">Expert Consultants</p>
            </div>

          </motion.div>

        </div>
      </section>
      <AboutSection/>
    </>
  );
}


function AboutSection() {
  const servicesRef = useRef(null);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    servicesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handlePageTransitionTop = () => {
    window.scrollTo(0, 0);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 18 } 
    },
  };

  return (
    <>
      <section className="py-16 sm:py-20 md:py-28 px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* SECTION HEADER */}
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight pb-3 inline-block font-['Poppins',_sans-serif]">
            About Us
          </h2>
          <div className="w-10 h-[2px] bg-slate-900 mx-auto mt-1"></div>
        </motion.div>

        {/* MAIN BODY CONFIGURATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* LEFT SIDE: IMAGE */}
          <motion.div 
            className="overflow-hidden rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] group w-full aspect-[4/3] lg:aspect-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 55, damping: 18 }}
          >
            <img
              src="/Our-Team.webp"
              alt="ProConsult Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <motion.div 
            className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight max-w-xl lg:max-w-none font-['Poppins',_sans-serif]"
              variants={itemVariants}
            >
              Your Trusted Advisors — International Expertise. Local Insights.
            </motion.h3>
            
            <motion.p 
              className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium max-w-2xl lg:max-w-none font-['Inter',_sans-serif]"
              variants={itemVariants}
            >
              At ProConsult International, we empower organizations with our strategic consulting, financial advisory, legal services, and technology-enabled solutions.
            </motion.p>
            
            <motion.p 
              className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium max-w-2xl lg:max-w-none font-['Inter',_sans-serif]"
              variants={itemVariants}
            >
              With a sizeable presence in Pakistan, Afghanistan and with offices in Dubai, KSA, and the UK, we are ready, willing and able to help clients across international borders.
            </motion.p>

            {/* HIGH-INTERACTIVE PREMIUM ACTION BUTTONS */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-3 mt-4 w-full sm:w-auto font-['Poppins',_sans-serif]"
              variants={itemVariants}
            >
              {/* Button 1: Read More (Ghost Variant) */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit sm:w-auto mx-auto lg:mx-0"
              >
                <Link 
                  to="/about" 
                  onClick={handlePageTransitionTop}
                  className="inline-flex min-w-[140px] px-5 py-3 text-[11px] sm:text-xs border border-slate-200 text-slate-800 font-bold rounded-lg bg-white transition-all duration-300 hover:border-slate-900 hover:shadow-md justify-center items-center gap-2 whitespace-nowrap group"
                >
                  Read More 
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
              </motion.div>

              {/* Button 2: Meet Our Team (Primary Dark Accent) */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit sm:w-auto mx-auto lg:mx-0"
              >
                <Link 
                  to="/team" 
                  onClick={handlePageTransitionTop}
                  className="inline-flex min-w-[140px] px-5 py-3 text-[11px] sm:text-xs bg-slate-900 text-white border border-slate-900 font-bold rounded-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 justify-center items-center gap-2 whitespace-nowrap group"
                >
                  Meet Our Team 
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
              </motion.div>
              
              {/* Button 3: Explore Our Services (Ghost Variant) */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit sm:w-auto mx-auto lg:mx-0"
              >
                <a 
                  href="#services"
                  onClick={handleScrollToServices}
                  className="inline-flex min-w-[140px] px-5 py-3 text-[11px] sm:text-xs border border-slate-200 text-slate-800 font-bold rounded-lg bg-white transition-all duration-300 hover:border-slate-900 hover:shadow-md justify-center items-center gap-2 whitespace-nowrap cursor-pointer group"
                >
                  Explore Our Services 
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"></i>
                </a>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <div ref={servicesRef} id="services" className="scroll-mt-4">
        <ServicesSection />
      </div>
    </>
  );
}




function ServicesSection() {
  
  // Custom animations with a smooth, premium spring feel
  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 15 } 
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 15 } 
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 45, damping: 16 } 
    }
  };

  const slideUpSmooth = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { ease: 'easeOut', duration: 0.8 } 
    }
  };

  return (
    <>
      {/* SECTION WRAPPER: Matches minimalist executive slate branding */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <motion.div 
            className="text-center mb-12 sm:mb-24"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight pb-3 inline-block font-['Poppins',_sans-serif]">
              Our Services
            </h2>
            <div className="w-10 h-[2px] bg-slate-900 mx-auto mt-1 mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-xs sm:text-[14px] font-medium leading-relaxed px-2 font-['Inter',_sans-serif]">
              At ProConsult International, we partner with clients to deliver tailored solutions that drive sustainable growth, operational excellence, and long-term value.
            </p>
          </motion.div>

          {/* SERVICE CARDS CONTAINER */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* CARD 1: IFRS 16 Leases Compliance */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  IFRS 16 Leases Compliance Software Solution
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Our IFRS 16 Leases Compliance Software is a robust, automated solution designed to simplify lease accounting and ensure full compliance with IFRS 16 standards. Tailored for financial institutions, telecom operators, leasing companies, and asset-intensive organizations, our software enables accurate lease classification, liability recognition, and right-of-use asset tracking.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Explore more about IFRS 16 Compliance Solution
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo1.webp" alt="IFRS 16 Diagram" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 2: IFRS 9 Impairment Solution */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo2.webp" alt="IFRS 9 Diagram" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  IFRS 9 Impairment Solution Pro (ISP)
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Our innovative IFRS 9 Impairment Solution Pro (ISP) helps financial institutions calculate expected credit losses (ECL) in compliance with IFRS 9 requirements. ISP integrates advanced ECL engines, including PD, LGD, and Staging modules, while incorporating forward-looking macroeconomic factors. Designed for banks, fintechs, and financial companies, ISP ensures accurate impairment calculations and regulatory compliance.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about IFRS 9 Services
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </motion.div>

            {/* CARD 3: Financial Reporting */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Financial Reporting & Advisory Solutions
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Our team of accounting specialists provides end-to-end financial reporting advisory services, including assistance with IFRS and GAAP compliance, preparation of financial statements, and implementation of best practices. We help organizations navigate complex accounting standards, optimize financial reporting processes, and achieve regulatory compliance.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about Financial Reporting & Advisory Solutions
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo3.webp" alt="Financial Reporting Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Business Consulting */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideUpSmooth}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo4.webp" alt="Business Consulting Graphic" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Expert Business Consulting Services for Sustainable Growth
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Our team of seasoned business advisory consultants combines financial expertise, strategic planning, and industry-specific knowledge to help organizations navigate complexity, optimize performance, and achieve sustainable growth. We deliver actionable solutions tailored to your unique business challenges.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about Our Business Advisory Services
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </motion.div>

            {/* CARD 5: Audit & Assurance */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Expert Audit & Assurance Services
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Our certified audit professionals offer comprehensive audit and assurance services designed to enhance financial transparency, strengthen regulatory compliance, and drive operational excellence. Partner with us to ensure your financial statements meet global standards and support sustainable business growth.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about our Audit & Assurances services.
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo5.webp" alt="Audit & Assurance Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 6: Tax Compliance */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo6.webp" alt="Tax Compliance Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Tax Compliance & Advisory Services
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Stay ahead of complex tax regulations with our expert tax compliance and advisory services. Our team ensures accurate and timely business income tax filings, reducing risk and enhancing regulatory compliance. We handle every aspect of corporate tax filing from preparation to submission.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about our Tax Compliance & Advisory Services.
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </motion.div>

            {/* CARD 7: Legal Advisory */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Legal Advisory & Expert Opinions
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Navigate complex corporate and regulatory challenges with confidence through our expert legal advisory services. We provide authoritative guidance on compliance, corporate governance, and strategic business decisions. Our actionable opinions are backed by thorough research.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about our Legal Advisory & Expert Opinions.
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo7.webp" alt="Legal Advisory Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 8: Sustainability */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideUpSmooth}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo8.webp" alt="Sustainability Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Empowering Sustainable Business Practices
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  We help organizations build resilient, sustainable operations that align with global standards. Our services cover every aspect of sustainability, from strategy to implementation, ensuring your business thrives in an evolving regulatory landscape.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about our Empowering Sustainable Business.
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </motion.div>

            {/* CARD 9: Human Resources */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 order-2 md:order-1 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Human Resource Services
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Unlock the full potential of your workforce with our comprehensive human resource services designed to drive organizational excellence. From executive search and C-level assessments to performance appraisals and total reward design, we provide tailored solutions that enhance leadership effectiveness and workforce engagement.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about our Human Resource services.
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo9.webp" alt="Human Resource Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* CARD 10: Information Technology */}
            <motion.div 
              className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-md transition-all duration-300 group"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative p-2 transition-transform duration-500 group-hover:scale-103">
                  <img src="/logo10.webp" alt="Information Technology Asset" className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain" />
                </div>
              </div>
              <div className="flex-1 md:border-l-2 md:border-slate-900 md:pl-8 w-full text-center md:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-['Poppins',_sans-serif]">
                  Professional IT Services for Businesses
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium mb-6 font-['Inter',_sans-serif]">
                  Empower your organization with cutting-edge IT solutions designed to boost productivity, enhance security, and drive sustainable growth. Our team of finance and technology experts delivers enterprise-grade systems that integrate seamlessly with your financial workflows and business goals.
                </p>
                <a href="#" className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-900 group/link transition-colors font-['Poppins',_sans-serif]">
                  Learn more about our Information Technology Solutions.
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
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
    { name: "ICAP", desc: <a href="#" className="text-slate-700 hover:text-slate-950 transition-colors">Institute of Chartered Accountants of Pakistan (ICAP)</a>, img: "/membershiplogo1.webp" },
    { name: "ICMAP", desc: <a href="#" className="text-slate-700 hover:text-slate-950 transition-colors">Institute of Cost and Management Accountants of Pakistan (ICMAP)</a>, img: "/membershiplogo2.webp" },
    { name: "ICAEW", desc: <a href="#" className="text-slate-700 hover:text-slate-950 transition-colors">Institute of Chartered Accountants in England and Wales (ICAEW)</a>, img: "/membershiplogo3.webp" },
    { name: "ACCA", desc: <a href="#" className="text-slate-700 hover:text-slate-950 transition-colors">Association of Chartered Certified Accountants (ACCA)</a>, img: "/membershiplogo4.webp" },
    { name: "SECP", desc: <a href="#" className="text-slate-700 hover:text-slate-950 transition-colors">Securities and Exchange Commission of Pakistan (SECP)</a>, img: "/membershiplogo5.webp" },
    { name: "BOI", desc: <a href="#" className="text-slate-700 hover:text-slate-950 transition-colors">Board of Investment Pakistan (BOI)</a>, img: "/membershiplogo6.webp" }
  ];

  // Elongated, smooth fade-and-rise variant
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 55,
        damping: 16,
        delay: (index % 3) * 0.25 
      }
    })
  };

  return (
    <>
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <motion.div 
            className="text-center mb-12 sm:mb-24"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight pb-3 inline-block font-['Poppins',_sans-serif]">
              Membership & Associations
            </h2>
            <div className="w-10 h-[2px] bg-slate-900 mx-auto mt-1 mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-xs sm:text-[14px] font-medium leading-relaxed px-2 font-['Inter',_sans-serif]">
              ProConsult International is an SECP-incorporated consulting firm, registered with leading financial and trade bodies.
            </p>
          </motion.div>

          {/* RESPONSIVE GRID LAYOUT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {associations.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:shadow-md hover:-translate-y-1"
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Image Container - Keeps logos in original, full color with standard scale transition */}
                <div className="h-16 sm:h-20 md:h-24 w-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="max-h-full max-w-[70%] sm:max-w-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-103" 
                  />
                </div>
                <h4 className="text-slate-800 font-bold text-xs sm:text-[13px] md:text-[14px] leading-relaxed px-1 tracking-tight font-['Inter',_sans-serif]">
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
    <>
    {/* SECTION CONTAINER: Deepened with clean, modern corporate gradient tracking (no background quote shapes) */}
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 bg-blue-900 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.4),transparent_70%)] text-white overflow-hidden text-center flex flex-col items-center justify-center">
      
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* THE QUOTE TEXT */}
        <motion.p 
          className="font-medium italic leading-relaxed text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl mb-8 sm:mb-10 px-2 sm:px-4 text-slate-100 tracking-tight font-['Inter',_sans-serif]"
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
          className="font-semibold tracking-wider text-xs sm:text-sm md:text-base mb-1.5 uppercase text-white/95 font-['Poppins',_sans-serif]"
          variants={elementVariant}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          — CFO, Regional Logistics Group
        </motion.h4>

        {/* AUTHOR SUBTITLE */}
        <motion.p 
          className="text-blue-200/80 font-normal tracking-wide text-[11px] sm:text-xs md:text-sm mb-10 sm:mb-12 font-['Inter',_sans-serif]"
          variants={elementVariant}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Leading logistics company with 500+ employees
        </motion.p>

        {/* PREMIUM BUTTON: Redesigned into a sharp corporate layout style */}
        <div className="w-full flex justify-center px-4">
          <motion.a 
            href="#" 
            className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-white hover:text-slate-950 text-white font-bold rounded-md transition-all duration-300 text-[11px] sm:text-xs md:text-[13px] px-6 sm:px-10 py-3 sm:py-4 w-auto tracking-wider uppercase border border-white/20 hover:border-white shadow-sm font-['Poppins',_sans-serif]"
            variants={elementVariant}
            custom={0.45} // Triggers cleanly right after the subtitle completes its entrance
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Read More Case Studies</span>
            <span className="text-xs sm:text-sm font-light transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </motion.a>
        </div>

      </div>
    </section>
    <InternationalPresenceSection/>
    </>
  );
}


function InternationalPresenceSection() {
  const locations = ["Islamabad", "Kabul", "Dubai", "Manchester", "Jeddah"];

  // Framer Motion animation definitions
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemLeftVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 55, damping: 14, duration: 0.75 } 
    }
  };

  const rightBlockVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 45, damping: 15, duration: 0.85 } 
    }
  };

  return (
    <>
      {/* SECTION WRAPPER: Matches the elegant minimalist slate theme */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <motion.div 
            className="text-center mb-12 sm:mb-24 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-widest uppercase mb-2 font-['Poppins',_sans-serif]">
              International Presence
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight pb-3 inline-block font-['Poppins',_sans-serif]">
              Our Reach Across Regions
            </h2>
            <div className="w-10 h-[2px] bg-slate-900 mx-auto mt-1 mb-6"></div>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-[14px] font-medium px-2 font-['Inter',_sans-serif]">
              With offices and associates across key markets, we provide localized service backed by global expertise.
            </p>
          </motion.div>

          {/* TWO-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            {/* LEFT: STAGGERED OFFICE LISTS */}
            <motion.div 
              className="space-y-3 sm:space-y-4 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-full text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 border-b-[2px] border-slate-900 pb-2 inline-block tracking-tight font-['Poppins',_sans-serif]">
                  Office Locations:
                </h4>
              </div>
              
              {/* Clean, shadow-tracked location cards matching the executive theme */}
              {locations.map((city, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemLeftVariant}
                  className="bg-white p-4 sm:p-5 rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all duration-300 hover:translate-x-1 group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></span>
                  <p className="text-slate-800 text-xs sm:text-[14px] font-bold tracking-tight font-['Inter',_sans-serif]">{city}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT: ANIMATED MAP CARD AND COMPACT RESPONSIVE BUTTON */}
            <motion.div 
              className="relative p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] bg-white overflow-hidden flex flex-col items-center w-full"
              variants={rightBlockVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              
              {/* Map Graphic Container */}
              <div className="overflow-hidden rounded-xl mb-6 sm:mb-10 w-full flex justify-center">
                <img 
                  src="/proconsultimap.webp" 
                  alt="Global Reach Map" 
                  className="w-full h-auto max-w-md sm:max-w-xl object-contain transition-transform duration-500 ease-out hover:scale-102"
                />
              </div>

              {/* COMPACT BUTTON: Matches the sharp consulting layout archetype */}
              <div className="w-full flex justify-center px-2">
                <motion.a 
                  href="#" 
                  className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-md shadow-sm transition-all duration-300 text-[10px] sm:text-xs px-4 sm:px-8 py-2 sm:py-3.5 w-auto uppercase tracking-wider font-['Poppins',_sans-serif]"
                  whileHover={{ scale: 1.02, y: -0.5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <span className="text-xs sm:text-sm font-light transition-transform duration-300 group-hover:translate-x-1">→</span>
                </motion.a>
              </div>

            </motion.div>

          </div>

        </div>
      </section>
      
      <GrowTogetherSection />
    </>
  );
}

function GrowTogetherSection() {
  
  // Sequential fade-and-rise entrance variant
  const elementVariant = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-blue-900 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.4),transparent_70%)] text-white overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* HEADER TEXT */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight uppercase font-['Poppins',_sans-serif]"
          variants={elementVariant}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Let's Grow Together
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p 
          className="text-blue-200/90 text-xs sm:text-sm md:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2 font-['Inter',_sans-serif]"
          variants={elementVariant}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Ready to move your organization forward? Let's explore how the ProConsult group can help you.
        </motion.p>

        {/* BUTTONS CONTAINER - Keeps inline buttons row-aligned down to tiny mobile displays */}
        <motion.div 
          className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto px-2"
          variants={elementVariant}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          
          {/* CONTACT US BUTTON */}
          <motion.a 
            href="#" 
            className="group flex-1 inline-flex items-center justify-center gap-2 bg-white text-slate-950 font-bold rounded-md shadow-sm transition-all duration-300 text-[10px] sm:text-xs md:text-[13px] px-3 sm:px-8 py-3 sm:py-4 tracking-wider uppercase border border-white font-['Poppins',_sans-serif]"
            whileTap={{ scale: 0.98 }}
          >
            <span>Contact Us</span>
            <span className="text-xs sm:text-sm font-light transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>

          {/* REQUEST A DEMO BUTTON */}
          <motion.a 
            href="/demo" 
            className="group flex-1 inline-flex items-center justify-center bg-transparent text-white font-bold rounded-md transition-all duration-300 hover:bg-white hover:text-slate-950 text-[10px] sm:text-xs md:text-[13px] px-3 sm:px-8 py-3 sm:py-4 tracking-wider uppercase border border-white/30 hover:border-white shadow-sm font-['Poppins',_sans-serif]"
            whileTap={{ scale: 0.98 }}
          >
            Request a Demo
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}
export default Home;