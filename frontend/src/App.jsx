import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Programmes from "./Pages/Programmes";
import ProgrammeDetail from "./Pages/ProgrammeDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InstitutionDetail from "./components/InstitutionDetail";
import Institutions from "./Pages/Institutions";
import Admissions from "./Pages/Admissions";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Disclaimer from "./Pages/Disclaimer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/institutions" element={<Institutions />} />

        <Route path="/institutions/:slug" element={<InstitutionDetail />} />
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* Programme listing */}
        <Route path="/programmes" element={<Programmes />} />

        {/* Dynamic programme detail */}
        <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
