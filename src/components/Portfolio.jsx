const projects = [
  { img: 'https://demoxml.com/html/onepager/upload/1.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/2.jpg', title: 'App Design', tags: 'development '},
  { img: 'https://demoxml.com/html/onepager/upload/3.jpg', title: 'Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/4.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/5.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/6.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/7.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/8.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/9.jpg', title: 'App Design', tags: 'development' },
  { img: 'https://demoxml.com/html/onepager/upload/10.jpg', title: 'App Design', tags: 'development' },
]

const filters = ['All', 'Web Design', 'Photography', 'Illustration', 'Branding']

export default function Portfolio() {
  return (
    <section id="portfolio-section" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Portfolio</h2>
        <p className="text-gray-500 mb-8">
          This is Photoshop's version of Beautiful Styles By Beenish Ishaq</p>

        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm font-semibold">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-4 py-2 rounded border transition-colors ${
                i === 0
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg shadow group cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white px-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-200">{p.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}