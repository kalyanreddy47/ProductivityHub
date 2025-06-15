
const socialLinks = [
  {
    label: "Twitter",
    url: "https://twitter.com/",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.64a9 9 0 01-2.84 1.09A4.48 4.48 0 0015.5 0c-2.35 0-4.26 1.91-4.26 4.26 0 .34.04.68.1 1A12.94 12.94 0 013 1.9a4.21 4.21 0 00-.58 2.15c0 1.47.75 2.77 1.89 3.53A4.48 4.48 0 012.2 6.09v.05A4.26 4.26 0 004.17 12a4.482 4.482 0 01-2.8.1C2.75 12.48 4 13 5.3 13c-3.08 2.42-6.99.8-8.2-2.49A12.82 12.82 0 0012.7 21c6.29 0 9.74-5.18 9.74-9.67V9.54A7.07 7.07 0 0023 3z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    url: "https://github.com/",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.87.5 12.14c0 5.13 3.47 9.49 8.29 11.05.6.11.82-.26.82-.58v-2.13c-3.37.75-4.09-1.61-4.09-1.61-.55-1.41-1.32-1.79-1.32-1.79-1.08-.75.08-.74.08-.74 1.2.09 1.84 1.26 1.84 1.26 1.06 1.88 2.78 1.34 3.46 1.03.11-.77.4-1.34.72-1.65-2.69-.3-5.53-1.41-5.53-6.28 0-1.39.47-2.53 1.24-3.41-.13-.31-.54-1.55.12-3.22 0 0 1.01-.33 3.3 1.28.95-.27 1.96-.4 2.96-.4s2.01.14 2.96.41c2.28-1.61 3.3-1.28 3.3-1.28.67 1.67.26 2.91.13 3.22.77.88 1.24 2.02 1.24 3.41 0 4.89-2.85 5.97-5.56 6.27.41.36.77 1.07.77 2.16v3.2c0 .33.21.7.82.58C20.53 21.64 24 17.26 24 12.14 24 5.87 18.77.5 12 .5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-5 px-4">
        <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Productivity Hub. All rights reserved.</div>
        <div className="flex space-x-5">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              className="text-gray-400 hover:text-primary transition"
              rel="noopener noreferrer"
              target="_blank"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
