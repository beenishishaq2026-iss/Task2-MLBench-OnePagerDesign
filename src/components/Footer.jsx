import { Share2, MessageCircle, Rss, Globe } from 'lucide-react'

const socials = [Share2, MessageCircle, Rss, Globe]

export default function Footer() {
  return (
    <footer className="bg-teal py-[40px] px-6 font-mono">
      <div className="max-w-[1170px] mx-auto flex flex-wrap items-center justify-between">
        <p className="text-white text-[16px] my-[21px] m-0">
          © 2026 OnePager. All Rights Reserved.
        </p>

        <ul className="flex p-0 m-0 list-none">
          {socials.map((Icon, i) => (
            <li key={i} className={i === 0 ? '' : 'ml-[12px]'}>
              <a className="group w-[60px] h-[60px] rounded-full border border-white flex items-center justify-center transition-colors duration-150 hover:bg-white cursor-pointer">
                <Icon size={31} strokeWidth={1.75} className="text-white group-hover:text-teal transition-colors duration-150" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}