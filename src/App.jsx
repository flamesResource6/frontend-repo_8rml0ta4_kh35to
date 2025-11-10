import Hero from './components/Hero';
import Features from './components/Features';
import FlavoursAndMedia from './components/FlavoursAndMedia';
import ShopFaqAbout from './components/ShopFaqAbout';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-inter">
      <Hero />
      <Features />
      <FlavoursAndMedia />
      <ShopFaqAbout />
    </div>
  );
}

export default App;
