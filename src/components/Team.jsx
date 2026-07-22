import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG } from 'react-icons/fa'

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
      
      className="relative pt-[100px] pb-[35px] bg-black bg-cover bg-center bg-scroll"
      style={{
  backgroundImage:
    "linear-gradient(rgba(43,48,60,0.9), rgba(43,48,60,0.9)), url('/images/maxresdefault.jpg')",
}}
    >
      <div className="text-center relative font-mono px-4 mb-[40px]">
        <h1 className="text-[45px] font-bold uppercase text-white mx-[10px]">
          Meet The Team
        </h1>

        <p className="text-white text-[18px] leading-[24px] m-0">
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

              <div className="bg-black/50 px-5 py-[17px]">
                <h5 className="font-bold text-[20px] text-white m-0">
                  {member.name}
                </h5>
                <span className="inline-block text-[#aeaeae] text-[14px]">
                  {member.role}
                </span>
              </div>

              <ul className="bg-teal px-5 py-[23px] flex items-center gap-2 m-0 list-none">
                {[FaFacebookF, FaTwitter, FaRss, FaGooglePlusG].map((Icon, idx) => (
                  <li key={idx}>
                    <a className="w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center cursor-pointer">
                      <Icon size={14} className="text-white" />
                    </a>
                  </li>
                ))}
              </ul>
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