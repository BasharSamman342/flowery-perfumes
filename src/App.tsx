import "./App.css";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopProductsSection from "./components/TopProductsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <TopProductsSection />
      <Footer />
    </div>
  );
}

export default App;
