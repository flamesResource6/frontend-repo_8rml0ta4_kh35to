import Hero3D from './components/Hero3D';
import Features from './components/Features';
import FlavoursAndMedia from './components/FlavoursAndMedia';
import ShopFaqAbout from './components/ShopFaqAbout';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-inter">
      <CursorGlow />
      <Hero3D />
      <Features />
      <FlavoursAndMedia />
      <ShopFaqAbout />
    </div>
  );
}

export default App;
