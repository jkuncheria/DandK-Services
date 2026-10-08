import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
// import Financing from './pages/Financing';
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
import Resurfacing from './pages/Resurfacing';
import Countertops from './pages/Countertops';
import Garages from './pages/Garages';
import Floors from './pages/Floors';
import Cabinets from './pages/Cabinets';
import Construction from './pages/Construction';
import Cabinetry from './pages/Cabinetry';
import Painting from './pages/Painting';
import Drywall from './pages/Drywall';
import ConcreteStaining from './pages/ConcreteStaining';

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
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route path="/financing" element={<Financing />} /> */}
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
            <Route path="/resurfacing" element={<Resurfacing />} />
            <Route path="/countertops" element={<Countertops />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/floors" element={<Floors />} />
            <Route path="/cabinets" element={<Cabinets />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/cabinetry" element={<Cabinetry />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/drywall" element={<Drywall />} />
            <Route path="/concrete-staining" element={<ConcreteStaining />} />
          </Routes>
      </main>

      <Footer />
      
    </div>
    </Router>
  );
};

export default App;
