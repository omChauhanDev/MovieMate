import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Auth/Login";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-seaSalt h-full">
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
