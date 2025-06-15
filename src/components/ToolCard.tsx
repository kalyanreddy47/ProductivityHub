
type Props = {
  name: string;
  desc: string;
  url: string;
};

export default function ToolCard({ name, desc, url }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col shadow group hover:shadow-lg transition">
      <h3 className="font-bold text-lg text-primary-dark mb-2">{name}</h3>
      <p className="text-gray-700 mb-4 text-sm">{desc}</p>
      <a
        href={url}
        className="w-fit inline-block mt-auto bg-primary text-white font-semibold px-4 py-2 rounded hover:bg-primary-dark transition"
        aria-label={"View tool: "+name}
        rel="noopener noreferrer"
        target="_blank"
      >
        View Tool
      </a>
    </div>
  );
}
