export default function Biography() {
  return (
    <section id="about-section" className="py-20 px-4 bg-white">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-3 uppercase tracking-wide">Company Biography</h2>
        <span className="inline-block bg-teaal-500 text-white text-sm font-semibold px-4 py-2 mb-8 uppercase tracking-wide">
          Short story about us
        </span>

        <div className="text-gray-500 text-sm leading-relaxed space-y-4">
          <p>
            This is <strong className="text-teal-600">Photoshop's</strong> Great Comapny with great desins by our author Beenish Ishaq
          </p>
          <p>
            We started this company with a simple idea: great design should be
            accessible to everyone, not just large brands with big budgets. <strong className="text-teal-600">Mern Developer Styles</strong> 
          </p>
          <p>
            Today, we're proud to have worked with businesses of all sizes,
            across many industries, and we're always excited to take on new
            challenges.
          </p>
        </div>
      </div>
    </section>
  )
}