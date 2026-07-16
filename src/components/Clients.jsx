const logos = [
  '/images/client-logo1.png',
  '/images/client-logo2.png',
  '/images/client-logo3.png',
  '/images/client-logo4.png',
]

export default function Clients() {
  return (
    
    <section className="w-full py-20 px-4 bg-gray-50">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-3 uppercase tracking-wide">
          Our Clients
        </h2>

        <span className="inline-block bg-teal-500 text-white text-sm font-semibold px-4 py-2 mb-10 uppercase tracking-wide">
          We love our clients
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-teal-500 h-40 rounded-sm shadow flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Client logo"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}