import { Home, Phone, Mail, Clock, User, Link2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact-section" className="py-20 px-6 bg-gray-900 text-white font-mono">
      <div className="max-w-[1600px] mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4 uppercase tracking-wide">
          Get in Touch!
        </h2>

        <p className="text-center text-gray-400 mb-16">
          This is Photoshop's version of Johar Town. Let's get connect
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <h3 className="text-4xl font-bold mb-6">
              Contact info
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              We usually reply within one business day. For urgent
              requests, feel free to call us directly during office hours,
              or drop by our studio — we're always happy to talk through
              a new project over coffee.
            </p>

            <hr className="border-gray-700 mb-6" />

            <div className="flex flex-wrap gap-x-10 gap-y-3 mb-3">
              <div className="flex items-center gap-3">
                <Home size={18} strokeWidth={1.75} />
                <span>Johar Town Lahore</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.75} />
                <span>+923 467887543</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Mail size={18} strokeWidth={1.75} />
              <span>info@domain.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <Clock size={18} strokeWidth={1.75} />
              <span>Monday – Friday, 9:00 AM – 6:00 PM</span>
            </div>
          </div>

          <form className="grid grid-cols-2 gap-6">

            <div className="col-span-2 md:col-span-1 space-y-6">

              <div className="flex items-center">
                <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 text-gray-900 flex items-center justify-center -mr-7 z-10 shrink-0">
                  <User size={20} strokeWidth={1.75} />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-4 focus:outline-none"
                />
              </div>

              <div className="flex items-center">
                <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 text-gray-900 flex items-center justify-center -mr-7 z-10 shrink-0">
                  <Mail size={20} strokeWidth={1.75} />
                </span>
                <input
                  type="email"
                  placeholder="e-mail"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-4 focus:outline-none"
                />
              </div>

              <div className="flex items-center">
                <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 text-gray-900 flex items-center justify-center -mr-7 z-10 shrink-0">
                  <Link2 size={20} strokeWidth={1.75} />
                </span>
                <input
                  type="text"
                  placeholder="website"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-4 focus:outline-none"
                />
              </div>

            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
              <textarea
                placeholder="Message"
                className="w-full flex-1 min-h-[168px] bg-white text-gray-900 placeholder-gray-400 p-4 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold uppercase tracking-wide text-sm py-4"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}