function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <div className="relative h-[850px] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/procunsult-video.mp4" type="video/mp4" />
          Does not support!
        </video>

        <div className="absolute z-10 w-full h-full bg-black/40"></div>

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Proactive, <br /> Proficient & <br /> Professional
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-200">
            ProConsult International is a multi-disciplinary consulting firm that helps clients achieve success through strategic insights and practical execution.
          </p>

          <button className="bg-white text-blue-900 px-12 py-4 rounded-full font-bold flex items-center gap-2 mx-auto transition-all duration-300 hover:bg-blue-900 hover:text-white">
            Get Started <span>→</span>
          </button>
        </div>
      </div>

      {/* 2. ABOUT SECTION - We call it here so it shows up below the Hero */}
      <AboutSection />
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
              <button className="flex-1 min-w-[140px] py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white flex justify-center items-center gap-2">
                Read More <span>→</span>
              </button>

              <button className="flex-1 min-w-[140px] py-3 bg-blue-900 text-white border-2 border-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-blue-900 flex justify-center items-center gap-2 shadow-lg">
                Meet Our Team <span>→</span>
              </button>

              <button className="flex-1 min-w-[140px] py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white flex justify-center items-center gap-2">
                Explore Services <span>→</span>
              </button>
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
  );
}
export default Home;