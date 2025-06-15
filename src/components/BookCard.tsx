
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

type Props = {
  title: string;
  author: string;
  summary: string;
  details: string;
};

export default function BookCard({ title, author, summary, details }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col shadow-sm group hover:shadow-lg transition min-h-[220px]">
      <h3 className="font-bold text-lg text-primary-dark mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">by {author}</p>
      <p className="text-gray-700 text-base">{summary}</p>
      <button
        onClick={() => setExpanded(e => !e)}
        className="mt-3 flex items-center text-sm text-primary font-semibold hover:underline focus:outline-none focus:ring-2 rounded transition"
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            Hide details <ArrowUp size={18} className="ml-2" />
          </>
        ) : (
          <>
            Read More <ArrowDown size={18} className="ml-2" />
          </>
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-52 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!expanded}
      >
        <div className="text-gray-600 text-sm">{details}</div>
      </div>
    </div>
  );
}
