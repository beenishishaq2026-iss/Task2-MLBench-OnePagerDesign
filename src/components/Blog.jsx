const posts = [
  {
    img: "https://demoxml.com/html/onepager/upload/image1.jpg",
    title: "Mobile Friendly Dashboard",
    desc: "A modern and responsive dashboard for web applications."
  },
  {
    img: "https://demoxml.com/html/onepager/upload/image2.jpg",
    title: "Creative Web Design",
    desc: "Clean and responsive website layouts for all devices."
  },
  {
    img: "https://demoxml.com/html/onepager/upload/image3.jpg",
    title: "UI Development",
    desc: "Building beautiful user interfaces with React and Tailwind CSS."
  },
  {
    img: "https://demoxml.com/html/onepager/upload/image4.jpg",
    title: "Modern Applications",
    desc: "Creating fast and user-friendly web applications."
  },
];

export default function Blog() {
  return (
    <section
      id="blog-section"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-2">
          Latest Posts
        </h2>

        <p className="text-gray-500 mb-10">
          Explore our latest articles and updates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-gray-50 rounded-lg shadow overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}