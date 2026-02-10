import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ResidentialConstruction from './pages/ResidentialConstruction';
import CommercialBuildouts from './pages/CommercialBuildouts';
import FlooringTile from './pages/FlooringTile';
import KitchensBathrooms from './pages/KitchensBathrooms';
import TenantImprovements from './pages/TenantImprovements';
import Remodeling from './pages/Remodeling';
import StuccoExterior from './pages/StuccoExterior';
import ConcreteMasonry from './pages/ConcreteMasonry';
import DemolitionCleanup from './pages/DemolitionCleanup';
import ADACodeUpgrades from './pages/ADACodeUpgrades';
import NewConstruction from './pages/NewConstruction';
import Reglazing from './pages/Reglazing';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/residential-construction" element={<ResidentialConstruction />} />
            <Route path="/commercial-buildouts" element={<CommercialBuildouts />} />
            <Route path="/flooring-tile" element={<FlooringTile />} />
            <Route path="/kitchens-bathrooms" element={<KitchensBathrooms />} />
            <Route path="/tenant-improvements" element={<TenantImprovements />} />
            <Route path="/remodeling" element={<Remodeling />} />
            <Route path="/stucco-exterior" element={<StuccoExterior />} />
            <Route path="/concrete-masonry" element={<ConcreteMasonry />} />
            <Route path="/demolition-cleanup" element={<DemolitionCleanup />} />
            <Route path="/ada-code-upgrades" element={<ADACodeUpgrades />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/reglazing" element={<Reglazing />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Elfsight Website Translator */}
      <div className="elfsight-app-e106334d-be25-4004-828a-288717fcef8c" data-elfsight-app-lazy></div>
      
      {/* Elfsight All-in-One Chat */}
      <div className="elfsight-app-068b41e7-7962-44bb-b44e-db85e45c6904" data-elfsight-app-lazy></div>
    </div>
    </Router>
  );
};

export default App;