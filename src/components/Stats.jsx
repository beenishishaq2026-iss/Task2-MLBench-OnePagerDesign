const stats = [
  { number: '48,000+', label: 'Lines of Code' },
  { number: '3,000+', label: 'Coffee Cups' },
  { number: '900+', label: 'Happy Clients' },
  { number: '650+', label: 'Projects' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold text-orange-500">
                {stat.number}
              </h3>

              <p className="text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}