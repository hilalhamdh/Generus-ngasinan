import Homepages from "./pages/Homepages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Imagepages from "./pages/Imagepages";
import Videopages from "./pages/Videopages";
import Caberawitpages from "./pages/Caberawitpages";
import Mainpages from "./component/Mainpages";
import Caberawitkg from "./pages/Caberawitkg";
import Berita from "./pages/Berita";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/mainpages" element={<Mainpages />} />
        <Route path="/caberawitkg" element={<Caberawitkg />} />
        <Route path="/imagepages" element={<Imagepages />} />
        <Route path="/videopages" element={<Videopages />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/caberawitpages" element={<Caberawitpages />} />
      </Routes>
    </Router>
  );
}

export default App;
