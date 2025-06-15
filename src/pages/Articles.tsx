
import ArticleCard from "../components/ArticleCard";
import FadeInSection from "../components/FadeInSection";

const articles = [
  {
    title: "How to Master Focus in a Distracted World",
    excerpt: "Discover proven strategies to train your attention, avoid digital temptations, and finally get your best work done.",
    url: "#",
  },
  {
    title: "5 Ways to Build Sustainable Habits",
    excerpt: "Shift from willpower to systems—learn how to make new habits stick for the long haul.",
    url: "#",
  },
  {
    title: "The Science of Time Management",
    excerpt: "Break through procrastination with actionable techniques rooted in psychology.",
    url: "#",
  },
  {
    title: "Morning Routines of Top Performers",
    excerpt: "Explore how high achievers start their day to maximize their energy and effectiveness.",
    url: "#",
  },
  {
    title: "Batching Tasks for Less Stress & More Output",
    excerpt: "Group similar work to tap into flow, reduce fatigue, and finish faster.",
    url: "#",
  },
  {
    title: "Minimalism and Productivity",
    excerpt: "How simplifying your environment and calendar can result in greater output and peace.",
    url: "#",
  },
  {
    title: "Digital Tools that Don’t Waste Your Time",
    excerpt: "A curated look at apps that enhance your workflow without distracting you.",
    url: "#",
  },
  {
    title: "Beat the Afternoon Slump",
    excerpt: "Energy fading after lunch? Learn practical tricks to regain your focus and motivation.",
    url: "#",
  },
];

const Articles = () => (
  <div className="max-w-5xl mx-auto">
    <FadeInSection>
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-8 mt-5 text-center">
        Productivity Articles
      </h1>
    </FadeInSection>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, idx) => (
        <FadeInSection key={article.title} delay={idx*100}>
          <ArticleCard {...article} />
        </FadeInSection>
      ))}
    </div>
  </div>
);

export default Articles;
