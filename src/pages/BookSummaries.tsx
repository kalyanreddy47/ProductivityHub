
import BookCard from "../components/BookCard";
import FadeInSection from "../components/FadeInSection";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    summary: "A practical guide to building good habits and breaking bad ones, Atomic Habits offers actionable strategies rooted in tiny changes that yield remarkable results over time.",
    details: "James Clear explores the science of habit formation, focusing on making habits obvious, attractive, easy, and satisfying. The book provides a clear framework (cue, craving, response, reward) and emphasizes the compounding power of small improvements. Stories and research back up every point, making it an engaging and convincing read.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    summary: "Deep Work reveals how focused, undistracted effort produces breakthrough results and how to cultivate this rare skill in a distracted world.",
    details: "Cal Newport outlines the benefits of uninterrupted, focused work and how distractions erode productivity and learning. The book presents rules for working deeply and maximizing cognitive capabilities, along with strategies to systematically schedule and protect deep work sessions.",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    summary: "Covey’s classic distills timeless truths about personal and professional effectiveness into seven habits that transform mindsets and outcomes.",
    details: "The book guides readers through the transition from dependence to independence, and ultimately interdependence. Covey’s habits encompass being proactive, beginning with the end in mind, prioritizing, thinking win-win, understanding before being understood, synergy, and sharpening the saw.",
  },
  {
    title: "Getting Things Done",
    author: "David Allen",
    summary: "David Allen’s GTD method helps you achieve stress-free productivity through effective task management, priorities, and clear next actions.",
    details: "Allen helps readers build reliable systems for capturing, clarifying, and organizing tasks. The workflow involves breaking projects into actionable steps, regular reviews, and efficient prioritization. The approach reduces mental clutter and increases confidence.",
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    summary: "A mindful classic on presence and consciousness, The Power of Now leads us to let go of past/future anxiety for greater clarity and focus.",
    details: "Tolle’s message is that continual presence is key to happiness and creative productivity. He blends spiritual wisdom and practical exercises, guiding the reader to recognize and detach from the mind’s endless chatter.",
  },
  {
    title: "Eat That Frog!",
    author: "Brian Tracy",
    summary: "Brian Tracy’s ‘Eat That Frog!’ presents 21 ways to stop procrastinating by tackling your hardest, most important tasks first.",
    details: "Based on the simple idea that doing your most challenging task first thing gives you momentum for the day. Tracy offers clear, brief strategies to break inertia, plan each day, and avoid distractions.",
  },
  {
    title: "Essentialism",
    author: "Greg McKeown",
    summary: "Essentialism teaches you to focus on what truly matters, eliminate the unnecessary, and achieve more by doing less.",
    details: "McKeown guides readers in saying no gracefully, setting clear boundaries, and reconsidering priorities. His disciplined pursuit of less leads to clarity of purpose and more meaningful success.",
  },
  {
    title: "The ONE Thing",
    author: "Gary Keller",
    summary: "Gary Keller encourages you to ask: What’s the ONE most valuable thing I can do? The book offers a simple system to cut through distractions and move the needle.",
    details: "Keller presents research and stories showing how focus and prioritization amplify results. He provides exercises to identify your core goals and eliminate multitasking.",
  },
];

const BookSummaries = () => (
  <div className="max-w-5xl mx-auto">
    <FadeInSection>
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-7 mt-5 text-center">Productivity Book Summaries</h1>
    </FadeInSection>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book, idx) => (
        <FadeInSection key={book.title} delay={idx * 90}>
          <BookCard {...book} />
        </FadeInSection>
      ))}
    </div>
  </div>
);

export default BookSummaries;
