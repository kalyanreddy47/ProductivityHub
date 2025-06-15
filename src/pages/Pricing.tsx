
import { Link } from "react-router-dom";

const perks = [
  "Access to premium articles",
  "Exclusive discounts on productivity tools",
  "Bonus perks: Early access to new features"
];

export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4">Upgrade to Pro</h1>
      <p className="text-gray-600 mb-10 text-lg text-center max-w-2xl">
        Supercharge your productivity journey. Upgrade for premium content, tool discounts, and amazing perks!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Free Tier */}
        <div className="border border-gray-200 rounded-lg bg-white px-6 py-8 flex flex-col shadow group">
          <h2 className="text-xl font-bold mb-2 text-primary">Free</h2>
          <ul className="mb-6 text-gray-700 space-y-2 text-base">
            <li>- Access to book summaries</li>
            <li>- Access to standard articles</li>
            <li>- Productivity tools directory</li>
            <li>- Pomodoro timer</li>
          </ul>
          <div className="mt-auto">
            <span className="font-semibold text-2xl text-primary">Free</span>
          </div>
        </div>
        {/* Pro Tier */}
        <div className="border-2 border-primary rounded-lg bg-white px-6 py-8 flex flex-col shadow-lg group relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white rounded px-3 py-1 text-xs font-semibold shadow">
            Most Popular
          </div>
          <h2 className="text-xl font-bold mb-2 text-primary-dark">Pro</h2>
          <ul className="mb-6 text-gray-700 space-y-2 text-base">
            <li>- All Free features</li>
            {perks.map((perk, i) => (
              <li key={i}>- {perk}</li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col">
            <span className="font-semibold text-2xl text-primary-dark">$6<span className="text-base text-gray-500 ml-1">/month</span></span>
            <button className="mt-4 bg-primary text-white rounded-md px-5 py-2 font-semibold hover:bg-primary-dark transition w-full shadow">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
      <p className="text-sm mt-8 text-gray-400 text-center max-w-lg">
        Need help or have questions about Pro? <a href="#" className="underline hover:text-primary-dark">Contact us</a>
      </p>
    </section>
  );
}
