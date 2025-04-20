import "./App.css";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopProductsSection from "./components/TopProductsSection";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <TopProductsSection />
    </div>
  );
}

export default App;
