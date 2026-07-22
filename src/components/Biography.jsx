const logos = [
  { src: '/images/client-logo1.png', alt: 'Opera' },
  { src: '/images/client-logo2.png', alt: 'HP' },
  { src: '/images/client-logo3.png', alt: 'WordPress' },
  { src: '/images/client-logo4.png', alt: 'Canon' },
]

export default function Biography() {
  return (
    <section id="about-section" className="pt-[100px] px-6 bg-white font-mono">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-16">

          <div className="mb-[50px]">
            <div className="mb-[40px]">
              <h2 className="text-[35px] font-semibold uppercase text-[#181818] mb-[6px]">
                Company Biography
              </h2>
              <span className="inline-block bg-teal text-white text-[18px] uppercase px-[6px]">
                Short story about us
              </span>
            </div>

            <div className="text-[#8b8b8b] text-[20px] leading-[26px]">
              <p className="mb-[20px]">
                We're a small team of <span className="text-teal font-bold">designers</span> and
                developers who love turning simple ideas into clean, usable
                websites. Every project starts with listening — understanding
                what a business actually needs before we open a single
                design tool.
              </p>
              <p className="mb-[20px]">
                Over the years we've worked with startups, agencies, and
                established brands alike, building everything from quick
                landing pages to full product sites. We care about the
                details as much as the big picture, and we believe good
                design should be <span className="text-teal font-bold">simple, honest, and easy to use</span>.
              </p>
              <p className="mb-[20px]">
                Got a project in mind? We'd love to hear about it.
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <div className="relative mb-[40px]">
              <h2 className="text-[35px] font-semibold uppercase text-[#181818] mb-[6px]">
                Our Clients
              </h2>
              <span className="inline-block bg-teal text-white text-[18px] uppercase px-[6px]">
                We love our clients
              </span>

              <div className="hidden sm:flex items-center gap-2 absolute top-1 right-0">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300"></span>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-[30px] p-0 m-0 list-none">
              {logos.map((logo) => (
                <li key={logo.alt} className="h-[149px]">
                  <a className="flex items-center justify-center w-full h-full bg-teal">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full inline-block align-middle"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}