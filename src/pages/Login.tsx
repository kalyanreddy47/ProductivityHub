
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrMsg("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrMsg(error.message || "Login failed");
    } else {
      navigate("/");
    }
    setLoading(false);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-[100%] max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-5 text-primary-dark">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <label className="font-medium text-sm" htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            autoFocus
            required
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com"
          />
          <label className="font-medium text-sm mt-2" htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Your password"
          />
          {errMsg && <div className="bg-red-50 text-red-500 py-2 px-3 my-2 rounded text-sm">{errMsg}</div>}
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600 text-sm">Don't have an account?</span>
          <br/>
          <Link to="/signup" className="text-primary-dark hover:underline text-sm">Sign Up</Link>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-2 rounded hover:bg-gray-50 transition"
            disabled
            aria-label="Login with Google (Coming soon)"
          >
            <svg height={22} width={22} viewBox="0 0 22 22" aria-hidden className="mr-1">
              <g>
                <path fill="#4285F4" d="M21.8 11.2c0-.8-.1-1.5-.2-2.2H11v4.2h6c-.2 1-.8 2-1.8 2.5v2h2.8c1.7-1.5 2.8-3.7 2.8-6.5z"/>
                <path fill="#34A853" d="M11 22c2.4 0 4.3-.8 5.7-2.1l-2.8-2.2c-.8.6-1.8 1-2.9 1-2.3 0-4.2-1.5-4.9-3.6H3.2v2.3C4.7 20.3 7.6 22 11 22z"/>
                <path fill="#FBBC05" d="M6.1 13C5.9 12.4 5.8 11.7 5.8 11s.1-1.4.3-2.1V6.6h-2.8C2.1 8.5 1 10.6 1 13c0 2.1.6 4 1.7 5.3l2.6-2.1C5.4 14.7 5.9 13.8 6.1 13z"/>
                <path fill="#EA4335" d="M11 4.5c1.3 0 2.5.4 3.5 1.2l2.7-2.7C15.3 1.3 13.3.5 11 .5 7.6.5 4.7 2.3 3.2 5.1l2.6 2.1C6.8 5.4 8.7 4.5 11 4.5z"/>
              </g>
            </svg>
            Login with Google (coming soon)
          </button>
        </div>
      </div>
    </section>
  );
}
