const logos = [
  '/images/client-logo1.png',
  '/images/client-logo2.png',
  '/images/client-logo3.png',
  '/images/client-logo4.png',
]

export default function Clients() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Clients</h2>
        <p className="text-gray-500 mb-10">Trusted by businesses and creative teams</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow flex items-center justify-center">
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