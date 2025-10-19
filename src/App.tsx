import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flow from './pages/Flow';
import Trading from './pages/Trading';
import Lending from './pages/Lending';
import PSPs from './pages/PSPs';
import CorporateTreasuries from './pages/CorporateTreasuries';
import CorporateFXPlatforms from './pages/CorporateFXPlatforms';
import Banks from './pages/Banks';
import AssetManagers from './pages/AssetManagers';
import Institutions from './pages/Institutions';
import TradingFirms from './pages/TradingFirms';
import Team from './pages/Team';
import Resources from './pages/Resources';
import TermsOfService from './pages/TermsOfService';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/asset-managers" element={<AssetManagers />} />
            <Route path="/trading" element={<Trading />} />
            {/* Redirect /marketplaces to /psps to consolidate similar content */}
            <Route path="/marketplaces" element={<Navigate to="/psps" replace />} />
            <Route path="/lending" element={<Lending />} />
            <Route path="/psps" element={<PSPs />} />
            <Route path="/corporate-treasuries" element={<CorporateTreasuries />} />
            <Route path="/corporate-fx-platforms" element={<CorporateFXPlatforms />} />
            <Route path="/banks" element={<Banks />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/trading-firms" element={<TradingFirms />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;