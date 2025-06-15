
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Book Summaries", to: "/books" },
  { label: "Articles", to: "/articles" },
  { label: "Tools", to: "/tools" },
  { label: "Pomodoro Timer", to: "/pomodoro" }
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <Link to="/" className="font-bold text-2xl text-primary flex items-center tracking-tight">
          <span className="mr-2">Productivity<span className="text-primary-dark">Hub</span></span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 ml-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-medium text-base px-2 py-1 rounded hover:text-primary-dark transition-colors duration-200
                  ${location.pathname === link.to ? "text-primary-dark" : "text-gray-700"}
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu: Will be handled in V2 for simplicity */}
        <div className="md:hidden">
          {/* No mobile menu for version 1 */}
        </div>
      </div>
    </nav>
  );
}
