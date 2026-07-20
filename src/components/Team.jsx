import { useRef } from 'react'

const team = [
  { name: 'Owen Miller', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team1.jpg' },
  { name: 'Mike William', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team2.jpg' },
  { name: 'Besim Dauti', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team3.jpg' },
  { name: 'Faton Avdiu', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team4.jpg' },
  { name: 'Owen Miller', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team1.jpg' },
  { name: 'Mike William', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team2.jpg' },
  { name: 'Besim Dauti', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team3.jpg' },
  { name: 'Faton Avdiu', role: 'developer', img: 'https://demoxml.com/html/onepager/upload/team4.jpg' },
];

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12" />
  </svg>
)
const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.4 1.8-2.4-.8.5-1.7.8-2.7 1a4.2 4.2 0 0 0-7.2 3.8A11.9 11.9 0 0 1 3 4.9a4.2 4.2 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.1-1.2.2-1.8.1.5 1.7 2 2.9 3.9 2.9A8.4 8.4 0 0 1 2 18.9a11.9 11.9 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
)
const RssIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="6.2" cy="17.8" r="2.2" />
    <path d="M3 10.5v3.3c4.6 0 8.3 3.7 8.3 8.2h3.3C14.6 15.7 9.3 10.5 3 10.5M3 4v3.3c8.1 0 14.7 6.6 14.7 14.7H21C21 11.9 13.1 4 3 4" />
  </svg>
)
const GooglePlusIcon = () => (
  <svg width="16" height="12" viewBox="0 0 32 24" fill="currentColor">
    <text x="0" y="17" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">g+</text>
  </svg>
)

const ArrowButton = ({ dir, onClick, position }) => (
  <button
    type="button"
    aria-label={dir === -1 ? 'Previous team members' : 'Next team members'}
    onClick={onClick}
    className={`hidden sm:flex absolute top-0 bottom-0 z-10 w-10 md:w-14
      bg-black/25 text-white items-center justify-center
      ${position === 'left' ? 'left-0' : 'right-0'}`}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {dir === -1 ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
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
          This is Photoshop's version of Lorem Ipsum. Proin gravida
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
                <h3 className="font-bold text-lg text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {member.role}
                </p>
              </div>

              <div className="bg-teal-500 px-6 py-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">
                  <FacebookIcon />
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">
                  <TwitterIcon />
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">
                  <RssIcon />
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">
                  <GooglePlusIcon />
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