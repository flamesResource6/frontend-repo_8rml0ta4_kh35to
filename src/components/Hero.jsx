import { ArrowRight, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-800 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Coffee className="h-4 w-4 text-amber-400" />
              Portable Espresso Sachets
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Espresso in a Sachet –
              <span className="block text-amber-400">One-Shot or Two-Shot, Ready in Seconds</span>
            </h1>
            <p className="text-stone-200 text-lg">
              Your go-anywhere espresso solution – just squeeze, stir, sip.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-3 font-semibold transition">
                Shop One-Shot <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 px-5 py-3 font-semibold">
                Shop Two-Shot
              </a>
              <a href="#flavours" className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 text-amber-300 hover:text-amber-900 hover:bg-amber-300 px-5 py-3 font-semibold">
                Pre-Order Flavours
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] md:aspect-[5/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1887&auto=format&fit=crop"
                alt="Traveler pouring espresso sachet into milk"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-stone-900/70 backdrop-blur rounded-xl border border-white/10 p-3 flex items-center gap-3 shadow-lg">
              <div className="h-10 w-10 rounded-full bg-amber-500/20 grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-400">
                  <path d="M12 3v18M7 8l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Squeeze Action</div>
                <div className="text-stone-300">Designed for one-hand pour on the go</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
