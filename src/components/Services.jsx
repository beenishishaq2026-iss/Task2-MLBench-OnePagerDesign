const services = [
  { title: 'Web Design', desc: 'I am great Web designer.Any services you needed here i am' },
  { title: 'Photography', desc: 'Capture moments and put in Beenish Art Gallery' },
  { title: 'HTML5', desc: 'Create sturucture of Website' },
  { title: 'Jquery', desc: 'Use filters to go up and down' },
  { title: 'Seo', desc: 'Use advertisements to increase market demand' },
  { title: 'Css3', desc: 'Choose Beenish beautiful website styles for css inspiration' },
]

export default function Services() {
  return (
    <section id="services-section" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-500 mb-12">
          This is Photoshop's version of Art Designs
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

<div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
  <img
    src="https://demoxml.com/html/onepager/images/image.png"
    alt="Video thumbnail"
    className="w-full h-auto"
  />

  <p className="text-center mt-4 text-gray-700 font-semibold">
    My video
  </p>
</div>
    </section>
  )
}        
        