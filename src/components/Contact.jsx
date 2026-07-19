const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 2 10h3v11h5v-6h4v6h5V10h3z" /></svg>
)
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z" /></svg>
)
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20v16H2zm2 2v.01L12 13l8-6.99V6H4zm16 12V8.4l-8 7-8-7V18z" /></svg>
)
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
)
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5" /></svg>
)
const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20v16H2zm2 2v.01L12 13l8-6.99V6H4zm16 12V8.4l-8 7-8-7V18z" /></svg>
)
const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12a4.1 4.1 0 0 1 4.1-4.1h4V6H8a6 6 0 0 0 0 12h4v-1.9H8A4.1 4.1 0 0 1 3.9 12M9 13h6v-2H9zm7-7h-4v1.9h4a4.1 4.1 0 0 1 0 8.2h-4V18h4a6 6 0 0 0 0-12" /></svg>
)

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
                <HomeIcon />Johar Town Lahore              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <span>+923 467887543</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <MailIcon />
              <span>info@domain.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <ClockIcon />
              <span>Monday – Friday, 9:00 AM – 6:00 PM</span>
            </div>
          </div>

          <form className="grid grid-cols-2 gap-6">

            <div className="col-span-2 md:col-span-1 space-y-6">

              <div className="flex items-center">
                <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 text-gray-900 flex items-center justify-center -mr-7 z-10 shrink-0">
                  <UserIcon />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-4 focus:outline-none"
                />
              </div>

              <div className="flex items-center">
                <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 text-gray-900 flex items-center justify-center -mr-7 z-10 shrink-0">
                  <EnvelopeIcon />
                </span>
                <input
                  type="email"
                  placeholder="e-mail"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-4 py-4 focus:outline-none"
                />
              </div>

              <div className="flex items-center">
                <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 text-gray-900 flex items-center justify-center -mr-7 z-10 shrink-0">
                  <LinkIcon />
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