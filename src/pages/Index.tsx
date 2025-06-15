
import FadeInSection from "../components/FadeInSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Book Summaries",
    desc: "Instantly grasp the key insights from the top productivity books—quick, actionable, inspiring.",
    link: "/books",
  },
  {
    title: "Productivity Articles",
    desc: "Curated articles on productivity, focus, and habits to jumpstart your routine.",
    link: "/articles",
  },
  {
    title: "Productivity Tools & Store",
    desc: "The very best apps, tools, and gear—find what’ll supercharge your workflow.",
    link: "/tools",
  },
  {
    title: "Pomodoro Timer",
    desc: "Beat distractions! Use our built-in Pomodoro timer for effortless deep work.",
    link: "/pomodoro",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <FadeInSection>
        <section className="w-full pt-10 pb-12 md:pt-16 md:pb-20 bg-gradient-to-b from-primary-light via-white to-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-4 font-sans leading-tight tracking-tight">
              Your Ultimate Productivity Hub
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-600 mb-7">
              Level up your life. Get productivity book summaries, expert articles, tested tools, and a Pomodoro timer—all in one focused place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {features.slice(0,3).map(f => (
                <Link key={f.title} to={f.link} className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold shadow-md bg-primary text-white hover:bg-primary-dark transition duration-200">
                  {f.title}
                  <ArrowRight className="ml-2" size={22} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Features */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 px-4">
        {features.map((feature, idx) => (
          <FadeInSection key={feature.title} delay={idx*120}>
            <Link to={feature.link} className="group flex flex-col p-6 transition-shadow rounded-lg bg-white/95 border border-gray-100 hover:shadow-xl cursor-pointer h-full relative">
              <h2 className="text-xl font-bold mb-2 text-primary-dark">{feature.title}</h2>
              <p className="text-gray-600 text-base mb-2">{feature.desc}</p>
              <span className="mt-auto text-primary group-hover:underline group-hover:translate-x-1 transition-all text-sm flex items-center">
                Explore <ArrowRight size={18} className="ml-1" />
              </span>
            </Link>
          </FadeInSection>
        ))}
      </section>
    </div>
  );
};

export default Index;
