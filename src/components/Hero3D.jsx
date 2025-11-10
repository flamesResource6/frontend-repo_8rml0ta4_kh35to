import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - must not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-950/20 to-stone-950" />
        <div className="absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[32rem] w-[32rem] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Interactive 3D • Cursor‑Reactive
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Espresso in Motion
            <span className="block text-amber-400">A pocket shot for every journey</span>
          </h1>
          <p className="mt-3 text-stone-200 text-lg">
            A modern, 3D‑driven experience — move your cursor to explore the particle sphere.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-3 font-semibold transition">
              Shop One‑Shot
            </a>
            <a href="#shop" className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 px-5 py-3 font-semibold">
              Shop Two‑Shot
            </a>
            <a href="#flavours" className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 text-amber-300 hover:text-amber-900 hover:bg-amber-300 px-5 py-3 font-semibold">
              Pre‑Order Flavours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
