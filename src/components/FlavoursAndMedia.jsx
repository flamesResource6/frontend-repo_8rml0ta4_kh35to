import { ArrowRight } from "lucide-react";
import HoverIcon from "./HoverIcon";

const FlavoursAndMedia = () => {
  return (
    <section id="flavours" className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-16 space-y-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Flavoured Coffees – Coming Soon</h2>
            <p className="text-stone-300">A taste tour in your pocket. Sign up to be the first to try our vanilla, caramel, and mocha infusions.</p>
            <a href="#newsletter" className="group inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold">
              Pre-Order Flavours
              <span className="inline-flex"><HoverIcon icon={ArrowRight} size={18} /></span>
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div className="aspect-video bg-black/30 grid place-items-center">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DO8jKugiQp-/?utm_source=ig_embed&amp;utm_campaign=loading"
                title="Instagram Reel"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavoursAndMedia;
