export default function Hero() {
  return (
    <section
      id="home-section"
      className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
      }}
    >
      <div className="max-w-2xl">

        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6 leading-tight">
          WELCOME TO ONEPAGER
        </h1>

        <p className="text-gray-200 mb-8">
          We design and develop awesome websites and smart applications,
          impactful identities using the latest technologies.
        </p>

        <a
          href="#portfolio-section"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded"
        >
          Learn More
        </a>

      </div>
    </section>
  );
}