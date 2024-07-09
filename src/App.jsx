import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <div className="full-section">
      <Navigation></Navigation>
      <Outlet />
    </div>
  )
}

export default App
