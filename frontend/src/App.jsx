import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Auth/Signup";
import { Home } from "./components/Home/Landing";
import { Login } from "./components/Auth/Login";
import { Toaster } from "react-hot-toast";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { getUserDetails } from "./actions/userActions";
import { userAtom } from "./store/atoms";
import { useSetAtom } from "jotai";

function App() {
  const setUser = useSetAtom(userAtom);
  getUserDetails(setUser);
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Toaster />
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
