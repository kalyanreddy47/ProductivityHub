
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  excerpt: string;
  url: string;
};

export default function ArticleCard({ title, excerpt, url }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col shadow group hover:shadow-lg transition">
      <h3 className="font-bold text-lg text-primary-dark mb-2">{title}</h3>
      <p className="text-gray-700 mb-3 text-sm">{excerpt}</p>
      <a
        href={url}
        className="mt-auto flex items-center text-primary hover:text-primary-dark font-semibold transition text-sm hover:underline"
        aria-label={"Read full article: "+title}
        rel="noopener noreferrer"
      >
        Read Article <ArrowRight size={16} className="ml-2"/>
      </a>
    </div>
  );
}
