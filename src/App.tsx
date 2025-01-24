import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Hiburan from "./pages/Hiburan";
import NewsDetail from "./pages/NewsDetail";
import ScrollToTop from "./molecules/scrolltop";
import GayaHidup from "./pages/GayaHidup";
import Olahraga from "./pages/Olahraga";
import Nasional from "./pages/Nasional";
import Internasional from "./pages/Internasional";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/hiburan" element={<Hiburan />} />
            <Route path="/gaya-hidup" element={<GayaHidup />} />
            <Route path="/olahraga" element={<Olahraga />} />
            <Route path="/nasional" element={<Nasional />} />
            <Route path="/internasional" element={<Internasional />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
