export default function Navbar() {

  const links = [
    { name: 'Home', href: '#home-section' },
    { name: 'Portfolio', href: '#portfolio-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Team', href: '#team-section' },
    { name: 'Blog', href: '#blog-section' },
    { name: 'Contact Us', href: '#contact-section' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        <a href="#home-section">
          <img
            src="https://demoxml.com/html/onepager/images/logo.png"
            alt="Logo"
            className="h-8"
          />
        </a>

        <ul className="flex gap-6 text-sm font-semibold text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}