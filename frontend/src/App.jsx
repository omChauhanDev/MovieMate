import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-seaSalt h-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
