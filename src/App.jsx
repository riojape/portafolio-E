import ResponsiveAppBar from "./components/AppBar";
import { PortafolioProvider } from "./context/PortafolioProvider";
import Home from "./pages/Home";

function App() {
  return (
    <PortafolioProvider>
      <ResponsiveAppBar />
      <Home />
    </PortafolioProvider>
  );
}

export default App;
