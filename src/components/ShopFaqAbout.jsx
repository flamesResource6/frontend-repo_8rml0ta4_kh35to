import { ShoppingBag, Package, HelpCircle, Info, Instagram, Mail } from "lucide-react";
import HoverIcon from "./HoverIcon";

const ProductCard = ({ title, shot, image, cta }) => (
  <div className="group rounded-2xl border border-white/10 bg-stone-900/40 p-5 text-stone-100 flex flex-col hover:border-amber-400/30 transition-colors">
    <div className="aspect-[5/3] rounded-xl overflow-hidden border border-white/10 mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-stone-300 text-sm">{shot}</p>
    </div>
    <button className="mt-4 group/btn inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-3 font-semibold transition">
      <HoverIcon icon={ShoppingBag} size={18} className="group/btn" /> {cta}
    </button>
  </div>
);

const FAQItem = ({ q, a }) => (
  <details className="group rounded-xl border border-white/10 bg-stone-900/40 p-5 text-stone-100">
    <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
      {q}
      <span className="ml-4 text-stone-400 group-open:rotate-180 transition">⌄</span>
    </summary>
    <p className="mt-3 text-stone-300">{a}</p>
  </details>
);

const ShopFaqAbout = () => {
  return (
    <section id="shop" className="bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {/* Shop */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pick your sachet</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              title="One‑Shot Sachet"
              shot="Balanced kick for a smooth latte or short black."
              cta="Add to Cart"
              image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop"
            />
            <ProductCard
              title="Two‑Shot Sachet"
              shot="Double strength for bold flavor and longer days."
              cta="Add to Cart"
              image="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FAQItem q="How to use?" a="Tear, squeeze into hot or cold milk/water, stir, and sip. No machine needed." />
            <FAQItem q="One-shot vs two-shot?" a="One-shot equals a standard espresso. Two-shot doubles the intensity and volume for stronger drinks." />
            <FAQItem q="Storage & shelf-life" a="Shelf-stable for months. Store sealed at room temperature; refrigerate after opening and use within 48 hours." />
          </div>
        </div>

        {/* About & Newsletter */}
        <div id="newsletter" className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-white/10 bg-stone-900/40 p-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><HoverIcon icon={Info} size={20} /> Our story</h3>
            <p className="text-stone-300">
              Built for travelers, busy pros, and coffee lovers who want premium espresso without the gear. From airport gates to summit views, your perfect cup is now pocket‑sized.
            </p>
          </div>
          <form className="rounded-2xl border border-white/10 bg-stone-900/40 p-6">
            <h3 className="text-xl font-bold mb-2">Be the first to taste our flavored range</h3>
            <p className="text-stone-300 mb-4">Join our newsletter for launch updates and early access.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@example.com" className="flex-1 rounded-lg bg-stone-800 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400" />
              <button className="rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-3 font-semibold inline-flex items-center gap-2">
                <HoverIcon icon={Mail} size={18} /> Subscribe
              </button>
            </div>
            <p className="text-xs text-stone-400 mt-2">We respect your inbox. Unsubscribe anytime.</p>
          </form>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <HoverIcon icon={Package} size={16} />
            <span>© {new Date().getFullYear()} Pocket Espresso Co.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-300 inline-flex items-center gap-1">
              <HoverIcon icon={Instagram} size={16} /> Instagram
            </a>
            <a href="mailto:hello@pocketespresso.co" className="hover:text-amber-300 inline-flex items-center gap-1">
              <HoverIcon icon={Mail} size={16} /> hello@pocketespresso.co
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ShopFaqAbout;
