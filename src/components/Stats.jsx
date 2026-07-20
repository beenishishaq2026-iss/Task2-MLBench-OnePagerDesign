const stats = [
  {
    number: '956779',
    label: 'Lines of code written',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2a1 1 0 0 0 0 2v5.382a2 2 0 0 1-.211.894L3.72 19.553C2.87 21.25 4.1 23 6 23h12c1.9 0 3.13-1.75 2.28-3.447l-5.069-9.277A2 2 0 0 1 15 9.382V4a1 1 0 1 0 0-2zm2 2h2v5.382a4 4 0 0 0 .422 1.789L14.847 14H9.153l1.425-2.83A4 4 0 0 0 11 9.383z" />
      </svg>
    ),
  },
  {
    number: '1479',
    label: 'Coffe Drinked',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3h13a1 1 0 0 1 1 1v3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1.06A6 6 0 0 1 12 20H8a6 6 0 0 1-6-6V4a1 1 0 0 1 1-1zm14 6v4a3 3 0 0 0 1-2V9zM3 21h14v2H3z" />
      </svg>
    ),
  },
  {
    number: '578',
    label: 'Happy Clients',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2c-3.6 0-8 1.8-8 4.5V21h16v-2.5c0-2.7-4.4-4.5-8-4.5m-9.5-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6M0 20v-2c0-1.7 2-3 4.5-3.4-.9.8-1.5 1.9-1.5 3.4v2zm21.5-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.5 14.6c2.5.4 4.5 1.7 4.5 3.4v2h-3v-2c0-1.5-.6-2.6-1.5-3.4" />
      </svg>
    ),
  },
  {
    number: '2178',
    label: 'Projects Done',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3h20V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2zm0 2h6v1H9zM2 11v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7h-6v2H8v-2z" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-white font-mono">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-2 uppercase tracking-wide text-gray-900">
          Company Stats
        </h2>

        <p className="text-gray-400 mb-14">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-gray-100 rounded-md shadow-sm p-10 hover:shadow-md hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="text-teal-500 flex items-center justify-center mb-5">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {stat.number}
              </h3>

              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
