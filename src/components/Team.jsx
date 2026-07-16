const team = [
  {
    name: 'Owen Miller', role: 'Developer', img: 'https://demoxml.com/html/onepager/upload/team1.jpg'
  },
  {
    name: 'Mike William', role: 'Developer', img: 'https://demoxml.com/html/onepager/upload/team2.jpg'
  },
  {
    name: 'Besim Dauti', role: 'Developer', img: 'https://demoxml.com/html/onepager/upload/team3.jpg'
  },
  {
    name: 'Faton Avdiu', role: 'Developer', img: 'https://demoxml.com/html/onepager/upload/team4.jpg'
  },
];

export default function Team() {
  return (
    <section 
      id="team-section" 
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-2">
          Meet The Team
        </h2>

        <p className="text-gray-500 mb-12">
          This is Photoshop's version.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg overflow-hidden shadow"
            >

              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="py-4 bg-gray-50">
                <h3 className="font-semibold text-base">
                  {member.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}