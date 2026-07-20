export default function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex items-center justify-center min-h-screen bg-[#1f2733] text-white text-center px-4 overflow-hidden"
    >
      <a
        href="#"
        aria-label="Previous slide"
        className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 text-white/80 hover:text-teal-400 transition-colors duration-300"
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
      </a>

      <div className="max-w-4xl font-mono">

        <h1 className="text-4xl md:text-6xl uppercase tracking-widest mb-8 leading-tight">
          <span className="font-light">Welcome to </span>
          <span className="font-bold text-teal-400">One</span><span className="font-bold text-white">pager</span>
        </h1>

        <p className="text-gray-400 mb-10 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
          We design and develop awesome websites and smart applications,
          impactful identities using the latest
        </p>

        <a
          href="#portfolio-section"
          className="relative inline-block"
        >
          <span className="block bg-teal-400 text-white font-bold uppercase tracking-widest text-sm px-12 py-5 transform -skew-x-12 hover:bg-teal-500 transition-colors duration-300">
            <span className="inline-block transform skew-x-12">Learn More</span>
          </span>
        </a>

      </div>

      <a
        href="#"
        aria-label="Next slide"
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-white/80 hover:text-teal-400 transition-colors duration-300"
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
