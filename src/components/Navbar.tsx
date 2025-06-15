
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Book Summaries", to: "/books" },
  { label: "Articles", to: "/articles" },
  { label: "Tools", to: "/tools" },
  { label: "Pomodoro Timer", to: "/pomodoro" },
  { label: "Pricing", to: "/pricing" },
  { label: "Login", to: "/login" },
];

export default function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    return () => sub?.unsubscribe();
  }, []);

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
          {user && (
            <li>
              <Button
                size="sm"
                className="bg-primary font-semibold text-white hover:bg-primary-dark ml-3"
                asChild
              >
                <Link to="/pricing">Upgrade</Link>
              </Button>
            </li>
          )}
        </ul>
        {/* Mobile menu - could be added here in the future */}
        <div className="md:hidden"></div>
      </div>
    </nav>
  );
}
