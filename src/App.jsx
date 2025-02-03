import Homepages from "./pages/Homepages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Imagepages from "./pages/Imagepages";
import Videopages from "./pages/Videopages";
import Caberawitpages from "./pages/Caberawitpages";
import Mainpages from "./component/Mainpages";
import Caberawitkg from "./pages/Caberawitkg";

import Berita1 from "./berita/Berita1";
import AboutUs from "./berita/AboutUs";
import Berita2 from "./berita/berita2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/mainpages" element={<Mainpages />} />
        <Route path="/caberawitkg" element={<Caberawitkg />} />
        <Route path="/imagepages" element={<Imagepages />} />
        <Route path="/videopages" element={<Videopages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/caberawitpages" element={<Caberawitpages />} />
        <Route path="/berita1" element={<Berita1 />} />
        <Route path="/berita2" element={<Berita2 />} />
      </Routes>
    </Router>
  );
}

export default App;
