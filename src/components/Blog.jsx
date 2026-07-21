import { Clock, MessageCircle } from "lucide-react";

const posts = [
  {
    img: "/images/image1.jpg",
    date: "19 Oct",
    comments: 10,
    title: "Mobile friendly comments dashboard now launched!",
  },
  {
    img: "/images/image2.jpg",
    date: "19 Oct",
    comments: 10,
    title: "Mobile friendly comments dashboard now launched!",
  },
  {
    img: "/images/image3.jpg",
    date: "19 Oct",
    comments: 10,
    title: "Mobile friendly comments dashboard now launched!",
  },
  {
    img: "/images/image4.jpg",
    date: "19 Oct",
    comments: 10,
    title: "Mobile friendly comments dashboard now launched!",
  },
];

export default function Blog() {
  return (
    <section
      id="blog-section"
      className="py-20 px-4 bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
          Latest Posts
        </h2>

        <p className="font-mono text-gray-400 mb-14">
          A quick look at what we've been building and sharing lately.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

          {posts.map((post, i) => (
            <div key={i}>
              <div className="relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute left-0 bottom-0 bg-teal text-white text-sm font-mono flex items-center gap-4 px-4 py-2">
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} strokeWidth={2} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle size={16} strokeWidth={2} />
                    {post.comments}
                  </span>
                </div>
              </div>

              <p className="font-mono text-gray-400 text-center mt-6 leading-relaxed">
                {post.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}