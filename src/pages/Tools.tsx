
import ToolCard from "../components/ToolCard";
import FadeInSection from "../components/FadeInSection";

const tools = [
  { name: "Notion", desc: "All-in-one workspace for notes, tasks, databases, and collaboration.", url: "#" },
  { name: "Todoist", desc: "Best-in-class to-do list app for effective task management.", url: "#" },
  { name: "Focusmate", desc: "Virtual coworking for accountability and deep work.", url: "#" },
  { name: "Forest", desc: "Grow a virtual tree—stay focused and avoid phone distractions.", url: "#" },
  { name: "RescueTime", desc: "Time tracking and distraction-blocking for better digital habits.", url: "#" },
  { name: "Sunsama", desc: "Daily planner integrating tasks, calendar, and focus blocks.", url: "#" },
  { name: "Evernote", desc: "Robust note-taking platform with web clipper and powerful search.", url: "#" },
  { name: "Toggl Track", desc: "Effortless time tracking with beautiful reports.", url: "#" },
  { name: "Cold Turkey", desc: "The nuclear option for blocking distractions on your computer.", url: "#" },
  { name: "ClickUp", desc: "All-in-one app for tasks, docs, and project management.", url: "#" },
  { name: "Zapier", desc: "Automate your tasks between apps without coding.", url: "#" },
  { name: "Google Keep", desc: "Quick note-taking and reminders on the go.", url: "#" },
];

const Tools = () => (
  <div className="max-w-5xl mx-auto">
    <FadeInSection>
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-8 mt-5 text-center">Productivity Tools & Store</h1>
    </FadeInSection>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool, idx) => (
        <FadeInSection key={tool.name} delay={idx*80}>
          <ToolCard {...tool} />
        </FadeInSection>
      ))}
    </div>
  </div>
);

export default Tools;
