import { useState } from 'react';
import { X } from 'lucide-react';

const projects = [
  { img: '/images/2.jpg', title: 'Cool App Design', category: 'Web Design' },
  { img: '/images/2.jpg', title: 'Cool App Design', category: 'Branding' },
  { img: '/images/3.jpg', title: 'Cool App Design', category: 'Illustration' },
  { img: '/images/4.jpg', title: 'Cool App Design', category: 'Web Design' },
  { img: '/images/5.jpg', title: 'Cool App Design', category: 'Branding' },
  { img: '/images/6.jpg', title: 'Cool App Design', category: 'Photography' },
  { img: '/images/7.jpg', title: 'Cool App Design', category: 'Web Design' },
  { img: '/images/8.jpg', title: 'Cool App Design', category: 'Branding' },
  { img: '/images/9.jpg', title: 'Cool App Design', category: 'Illustration' },
  { img: '/images/10.jpg', title: 'Cool App Design', category: 'Photography' },
];

const filters = ['All', 'Web Design', 'Photography', 'Illustration', 'Branding'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio-section" className="relative bg-white overflow-hidden">

      <img
        src="/images/background1.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative max-w-7xl mx-auto px-4">

        <div className="py-16 border-y border-gray-200">
          <div className="text-center font-mono">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-dark">
              Our Portfolio
            </h2>

            <p className="text-gray-400 mb-10">
              This is Photoshop's version of Beautiful Styles By Beenish Ishaq
            </p>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center items-center">
              {filters.map((f) =>
                active === f ? (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="bg-teal text-white px-6 py-2.5 -skew-x-12 font-semibold uppercase text-sm tracking-wide cursor-pointer"
                  >
                    <span className="inline-block skew-x-12">{f}</span>
                  </button>
                ) : (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="px-6 py-2.5 text-dark font-semibold uppercase text-sm tracking-wide cursor-pointer"
                  >
                    {f}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="py-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 text-left">
            {filtered.map((project, i) => (
              <div
                key={`${project.img}-${i}`}
                onClick={() => setLightbox(project)}
                className="mb-2 break-inside-avoid overflow-hidden cursor-pointer bg-dark"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full block object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white cursor-pointer"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox.img}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}