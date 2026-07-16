const projects = [
  { img: 'https://demoxml.com/html/onepager/upload/1.jpg', title: 'App Design', tags: 'Development' },
  { img: 'https://demoxml.com/html/onepager/upload/2.jpg', title: 'Web Design', tags: 'Development' },
  { img: 'https://demoxml.com/html/onepager/upload/3.jpg', title: 'Creative Design', tags: 'Design' },
  { img: 'https://demoxml.com/html/onepager/upload/4.jpg', title: 'Mobile App', tags: 'Development' },
  { img: 'https://demoxml.com/html/onepager/upload/5.jpg', title: 'UI Design', tags: 'Design' },
  { img: 'https://demoxml.com/html/onepager/upload/6.jpg', title: 'Website Design', tags: 'Development' },
  { img: 'https://demoxml.com/html/onepager/upload/7.jpg', title: 'Dashboard', tags: 'Web' },
  { img: 'https://demoxml.com/html/onepager/upload/8.jpg', title: 'Brand Design', tags: 'Branding' },
];

export default function Portfolio() {
  return (
    <section 
      id="portfolio-section" 
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-2">
          Our Portfolio
        </h2>

        <p className="text-gray-500 mb-8">
          This is Photoshop's version of Beautiful Styles By Beenish Ishaq
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="rounded-lg overflow-hidden shadow"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {project.tags}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}