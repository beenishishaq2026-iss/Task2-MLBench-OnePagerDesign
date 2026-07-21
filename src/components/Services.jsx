import { Megaphone, Plane, Copy, ThumbsUp, Image, Code2 } from 'lucide-react'

const services = [
  {
    title: 'Web Design',
    desc: 'We craft clean, responsive websites that look great on every screen and turn visitors into customers.',
    icon: Megaphone,
  },
  {
    title: 'Photography',
    desc: 'Professional photography that captures your brand, products, and team the way they deserve to be seen.',
    icon: Plane,
  },
  {
    title: 'HTML5',
    desc: 'Modern, semantic markup built for speed, accessibility, and easy maintenance across every browser.',
    icon: Copy,
  },
  {
    title: 'Jquery',
    desc: 'Smooth, interactive front-end behavior that keeps your site fast without sacrificing polish.',
    icon: ThumbsUp,
  },
  {
    title: 'Seo',
    desc: 'On-page and technical SEO that helps the right people find your site through search.',
    icon: Image,
  },
  {
    title: 'Css3',
    desc: 'Pixel-perfect styling with modern CSS to give your brand a distinct, consistent look.',
    icon: Code2,
  },
]

export default function Services() {
  return (
    <section id="services-section" className="py-24 px-6 bg-white font-mono">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-400 mb-20">
          Everything you need to launch and grow, all under one roof.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 text-left">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="bg-teal-500 -skew-x-12 w-20 h-20 flex items-center justify-center shrink-0">
                <Icon className="text-white skew-x-12" size={30} strokeWidth={1.75} />
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-gray-900">
                  {title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto overflow-hidden shadow-lg">
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