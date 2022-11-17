import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="md:md:container">
      <Navbar />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
}

export default App;
