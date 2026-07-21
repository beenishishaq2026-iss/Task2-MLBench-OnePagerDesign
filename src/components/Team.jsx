import { useRef } from 'react'
import { Share2, MessageCircle, Rss, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

const team = [
  { name: 'Owen Miller', role: 'developer', img: '/images/team1.jpg' },
  { name: 'Mike William', role: 'developer', img: '/images/team2.jpg' },
  { name: 'Besim Dauti', role: 'developer', img: '/images/team3.jpg' },
  { name: 'Faton Avdiu', role: 'developer', img: '/images/team4.jpg' },
  { name: 'Owen Miller', role: 'developer', img: '/images/team1.jpg' },
  { name: 'Mike William', role: 'developer', img: '/images/team2.jpg' },
  { name: 'Besim Dauti', role: 'developer', img: '/images/team3.jpg' },
  { name: 'Faton Avdiu', role: 'developer', img: '/images/team4.jpg' },
];

const ArrowButton = ({ dir, onClick, position }) => (
  <button
    type="button"
    aria-label={dir === -1 ? 'Previous team members' : 'Next team members'}
    onClick={onClick}
    className={`hidden sm:flex absolute top-0 bottom-0 z-10 w-10 md:w-14
      bg-black/25 text-white items-center justify-center
      ${position === 'left' ? 'left-0' : 'right-0'}`}
  >
    {dir === -1 ? <ChevronLeft size={22} strokeWidth={2} /> : <ChevronRight size={22} strokeWidth={2} />}
  </button>
)

export default function Team() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const cardWidth = card ? card.getBoundingClientRect().width : track.clientWidth
    track.scrollBy({ left: dir * cardWidth })
  }

  return (
    <section
      id="team-section"
      className="relative py-16 md:py-20 bg-gray-900 bg-cover bg-center bg-scroll md:bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,14,20,0.82), rgba(10,14,20,0.82)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=60')",
      }}
    >
      <div className="text-center relative font-mono px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-3 uppercase tracking-wide text-white">
          Meet The Team
        </h2>

        <p className="text-gray-300 mb-10 md:mb-14 text-sm md:text-base">
          This is Photoshop's version of Art pictures
        </p>
      </div>

      <div className="relative">
        <ArrowButton dir={-1} position="left" onClick={() => scrollByCard(-1)} />

        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              data-card
              className="snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 md:h-96 object-cover"
              />

              <div className="bg-[#12161d] px-6 py-4">
                <h3 className="font-bold text-xl text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {member.role}
                </p>
              </div>

              <div className="bg-teal-500 px-6 py-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white text-teal-500 flex items-center justify-center">
                  <Share2 size={14} strokeWidth={2.25} />
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-teal-500 flex items-center justify-center">
                  <MessageCircle size={14} strokeWidth={2.25} />
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-teal-500 flex items-center justify-center">
                  <Rss size={14} strokeWidth={2.25} />
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-teal-500 flex items-center justify-center">
                  <Globe size={14} strokeWidth={2.25} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <ArrowButton dir={1} position="right" onClick={() => scrollByCard(1)} />
      </div>

      <p className="mt-6 text-center text-xs text-gray-400 sm:hidden">
        Swipe to see more of the team
      </p>
    </section>
  );
}