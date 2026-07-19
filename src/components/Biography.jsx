const logos = [
  { src: '/images/client-logo1.png', alt: 'Opera' },
  { src: '/images/client-logo2.png', alt: 'HP' },
  { src: '/images/client-logo3.png', alt: 'WordPress' },
  { src: '/images/client-logo4.png', alt: 'Canon' },
]

export default function Biography() {
  return (
    <section id="about-section" className="py-20 px-6 bg-white font-mono">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide text-gray-900">
            Company Biography
          </h2>
          <span className="inline-block bg-teal-500 text-white text-sm px-4 py-2 mb-8 uppercase tracking-wide">
            Short story about us
          </span>

          <div className="text-gray-400 leading-relaxed space-y-6">
            <p>
              We're a small team of <strong className="text-gray-900">designers</strong> and
              developers who love turning simple ideas into clean, usable
              websites. Every project starts with listening — understanding
              what a business actually needs before we open a single
              design tool.
            </p>
            <p>
              Over the years we've worked with startups, agencies, and
              established brands alike, building everything from quick
              landing pages to full product sites. We care about the
              details as much as the big picture, and we believe good
              design should be <strong className="text-teal-500">simple, honest, and easy to use</strong>.
            </p>
            <p>
              Got a project in mind? We'd love to hear about it.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-4xl font-bold uppercase tracking-wide text-gray-900">
              Our Clients
            </h2>
            <div className="hidden sm:flex items-center gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
              <span className="w-3 h-3 rounded-full border border-gray-300"></span>
              <span className="w-3 h-3 rounded-full border border-gray-300"></span>
              <span className="w-3 h-3 rounded-full border border-gray-300"></span>
            </div>
          </div>

          <span className="inline-block bg-teal-500 text-white text-sm px-4 py-2 mb-8 uppercase tracking-wide">
            We love our clients
          </span>

          <div className="grid grid-cols-2 gap-6">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-teal-500 h-44 flex items-center justify-center p-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}