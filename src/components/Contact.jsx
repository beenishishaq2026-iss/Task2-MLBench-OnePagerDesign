export default function Contact() {
  return (
    <section id="contact-section" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-2">
          Contact Us
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Feel free to send us a message.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-2"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-2"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2"
            >
              Send
            </button>
          </form>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact Info
            </h3>

            <p>Address: 123 Main Street</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@example.com</p>
          </div>

        </div>

      </div>
    </section>
  );
}