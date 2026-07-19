export default function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,32,0.55), rgba(15,23,32,0.55)), url('/images/hero-bg.jpg')",
      }}
    >
      <a
        href="#"
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
      </a>

      <div className="max-w-3xl font-mono">

        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6 leading-tight">
          Welcome to <span className="text-teal-400">One</span>pager
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          we design and develop awesome websites and smart applications,
          impactful identities using the latest
        </p>

        <a
          href="#portfolio-section"
          className="relative inline-block"
        >
          <span className="block bg-teal-500 text-white font-bold uppercase tracking-wide text-sm px-10 py-4 transform -skew-x-12">
            <span className="inline-block transform skew-x-12">Learn More</span>
          </span>
        </a>

      </div>

      <a
        href="#"
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
