import { Coffee, Zap, Backpack, Plane, CheckCircle } from "lucide-react";
import HoverIcon from "./HoverIcon";

const FeatureItem = ({ icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-stone-900/40 p-6 backdrop-blur hover:border-amber-400/30 transition-colors">
    <div className="h-11 w-11 rounded-lg bg-amber-500/20 grid place-items-center mb-4">
      <HoverIcon icon={icon} size={20} className="group" />
    </div>
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-stone-300 text-sm">{desc}</p>
  </div>
);

const HowStep = ({ number, text }) => (
  <div className="flex items-center gap-4">
    <div className="h-10 w-10 rounded-full bg-amber-500/20 text-amber-400 grid place-items-center font-semibold">
      {number}
    </div>
    <p className="text-stone-200">{text}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-stone-900 text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why you'll love it</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <FeatureItem icon={Coffee} title="One- & Two-Shot" desc="Choose your strength for the perfect pick‑me‑up." />
              <FeatureItem icon={Backpack} title="Travel-Friendly" desc="Ultra‑compact sachets for your bag or pocket." />
              <FeatureItem icon={Zap} title="Instant" desc="Just add milk or water, stir, and enjoy anywhere." />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How it works</h2>
            <div className="space-y-5">
              <HowStep number={1} text="Grab a sachet." />
              <HowStep number={2} text="Squeeze into milk or water." />
              <HowStep number={3} text="Stir & drink." />
              <div className="flex items-center gap-2 pt-2 text-amber-300">
                <HoverIcon icon={CheckCircle} size={20} />
                <span>Designed for life on the move — office, airplane, trail.</span>
              </div>
              <div className="flex items-center gap-3 text-stone-300">
                <HoverIcon icon={Plane} size={18} />
                <span>Carry‑on friendly and equipment‑free.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
