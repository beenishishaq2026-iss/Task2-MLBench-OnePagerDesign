import { FlaskConical, Coffee, Users, Briefcase } from 'lucide-react'

const stats = [
  { number: '956779', label: 'Lines of code written', icon: FlaskConical },
  { number: '1479', label: 'Coffe Drinked', icon: Coffee },
  { number: '578', label: 'Happy Clients', icon: Users },
  { number: '2178', label: 'Projects Done', icon: Briefcase },
];

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-white font-mono border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide text-gray-900">
          Company Stats
        </h2>

        <p className="text-gray-400 mb-14">
          This is Photoshop's version of Beenish Ishaq
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ number, label, icon: Icon }) => (
            <div
              key={label}
              className="border border-gray-200 p-10"
            >
              <div className="text-teal-500 flex items-center justify-center mb-5">
                <Icon size={40} strokeWidth={1.75} fill="currentColor" />
              </div>

              <h3 className="text-5xl font-bold text-gray-900 mb-4">
                {number}
              </h3>

              <p className="text-gray-400 text-sm uppercase tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}