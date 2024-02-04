import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/style.css'
import 'ultimate-react-multilevel-menu/dist/esm/index.css'
import ServiceTemplate from './Components/Services/ServiceTemplate';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services/:section/:subsection" element={<ServiceTemplate />} />
    </Routes>
  </Router>
  );
}

export default App;
