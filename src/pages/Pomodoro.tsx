
import { useState, useRef, useEffect } from "react";
import FadeInSection from "../components/FadeInSection";

const WORK_MINUTES = 25;
const BREAK_MINUTES = 5;

function format(time: number): string {
  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const s = (time % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function Pomodoro() {
  const [mode, setMode] = useState<"work" | "break">("work");
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(WORK_MINUTES * 60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((t) => {
        if (t > 0) return t - 1;
        // auto-switch modes
        if (mode === "work") {
          setMode("break");
          setIsRunning(false);
          setTime(BREAK_MINUTES * 60);
        } else {
          setMode("work");
          setIsRunning(false);
          setTime(WORK_MINUTES * 60);
        }
        return 0;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode]);

  // Reset when switching mode
  useEffect(() => {
    if (mode === "work") setTime(WORK_MINUTES * 60);
    else setTime(BREAK_MINUTES * 60);
  }, [mode]);

  // Keyboard accessibility
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        setIsRunning((r) => !r);
      } else if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        setIsRunning(false);
        setTime(mode === "work" ? WORK_MINUTES * 60 : BREAK_MINUTES * 60);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mode]);

  return (
    <div className="max-w-lg mx-auto flex flex-col items-center">
      <FadeInSection>
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4 mt-8 text-center">Pomodoro Timer</h1>
        <p className="mb-8 text-gray-600 text-center max-w-md">
          25 minutes of focused work, followed by a 5-minute break. Stay in the zone—use our distraction-free timer!
        </p>
      </FadeInSection>
      <FadeInSection delay={170}>
        <div className="flex flex-col items-center bg-white rounded-2xl border border-gray-100 shadow-2xl px-10 py-10 mt-4 w-full max-w-xl">
          <div className="flex items-center gap-4 mb-5">
            <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${mode === "work" ? "bg-primary text-white" : "bg-gray-100 text-primary-dark"} mr-1`}>Work</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${mode === "break" ? "bg-green-400 text-primary-dark" : "bg-gray-100 text-primary-dark"}`}>Break</span>
          </div>
          <span className="font-mono text-7xl text-gray-800 my-6 select-none tabular-nums tracking-widest" aria-live="polite">
            {format(time)}
          </span>
          <div className="flex items-center gap-4 mt-4">
            {!isRunning ? (
              <button
                className="px-6 py-2 rounded bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition"
                onClick={() => setIsRunning(true)}
                aria-label="Start timer"
              >
                Start
              </button>
            ) : (
              <button
                className="px-6 py-2 rounded bg-gray-200 text-primary-dark font-semibold text-lg hover:bg-gray-300 transition"
                onClick={() => setIsRunning(false)}
                aria-label="Pause timer"
              >
                Pause
              </button>
            )}
            <button
              className="px-4 py-2 rounded bg-gray-100 text-primary-dark text-lg border border-gray-200 hover:bg-gray-200 transition"
              onClick={() => {
                setIsRunning(false);
                setTime(mode === "work" ? WORK_MINUTES * 60 : BREAK_MINUTES * 60);
              }}
              aria-label="Reset timer"
            >
              Reset
            </button>
          </div>
          <p className="mt-5 text-sm text-gray-400">Space: Start/Pause &nbsp;•&nbsp; R: Reset</p>
        </div>
      </FadeInSection>
    </div>
  );
}
