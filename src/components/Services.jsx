const services = [
  {
    title: 'Web Design',
    desc: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 3h11l9 9-11 11-9-9zm4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
  {
    title: 'Photography',
    desc: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5z" />
      </svg>
    ),
  },
  {
    title: 'HTML5',
    desc: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h9l5 5v15H6zm8 1.5V8h4.5z" />
      </svg>
    ),
  },
  {
    title: 'Jquery',
    desc: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 22v-9a3 3 0 0 1 3-3h1V6a4 4 0 0 1 8 0v1.17A3 3 0 0 1 16 10v2h1a2 2 0 0 1 2 2v1.5l2.5-2.3 1 1.1L18 18v4h-6v-4l-2-2v-2.7c-.6.4-1.3.7-2 .7v6z" />
      </svg>
    ),
  },
  {
    title: 'Seo',
    desc: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2v11.2L9.5 12l3 3L18 9.8V6z" />
      </svg>
    ),
  },
  {
    title: 'Css3',
    desc: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2zm4.1 4l.3 3H16l-.3 3.2-3.7 1v0l-3.7-1-.2-2.2H5.9l.4 4.8L12 19l5.7-1.6L18.6 6z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services-section" className="py-20 px-6 bg-white font-mono">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-widest text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-400 mb-16">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 text-left">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-5">
              <div className="text-teal-400 shrink-0 pt-1">
                {service.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://demoxml.com/html/onepager/images/image.png"
            alt="Video thumbnail"
            className="w-full h-auto"
          />

          <p className="text-center mt-4 text-gray-700 font-semibold">
            My video
          </p>
        </div>
      </div>
    </section>
  )
}
