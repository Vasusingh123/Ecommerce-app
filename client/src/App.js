import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound.js";
import Register from "./pages/Auth/Register.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
