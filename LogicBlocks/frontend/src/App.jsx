import { Outlet } from "react-router-dom";

// components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
